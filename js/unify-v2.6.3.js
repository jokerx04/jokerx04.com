$(function () {
	// Unify-v2.6.3 Initialization
	$.HSCore.components.HSTabs.init('[role="tablist"]');
	$.HSCore.components.HSTabs.init('[data-tabs-mobile-type]');

	$.HSCore.components.HSGoTo.init('.js-go-to');

	$.HSCore.components.HSCarousel.init('.js-carousel');

	$.HSCore.components.HSPopup.init('.js-fancybox');

	$('.js-mega-menu').HSMegaMenu({

		event: 'hover',
		pageContainer: $('.container'),
		breakpoint: 991

	});

	$('[class*="js-counter"]').each(function (index, element) {

		$(this).text($(this).text().replace( /[,]/gi, ''));

	});

	var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');

	$(window).on('load', function (eventObject) {
		$.HSCore.components.HSHeader.init($('#js-header'));

		$.HSCore.helpers.HSHamburgers.init('.hamburger');

		setTimeout(function () {
			$.HSCore.components.HSStickyBlock.init('.js-sticky-block');
		}, 300);
	});

	$(window).on('resize', function (eventObject) {
		setTimeout(function () {
			$.HSCore.components.HSTabs.init('[role="tablist"]');
			$.HSCore.components.HSTabs.init('[data-tabs-mobile-type]');
		}, 200);
	});
	
	// GNB
	jokerx04.jQuery.ajax({
		global: false,
		isCorsUrl: false,
		url: 'https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@latest/json/unify-v2.6.3-menu.json',
		method: 'GET',
		type: 'GET',
		success: function (data, textStatus, jqXHR) {
			if (!_.isEqual(jqXHR.status, 200)) {
				return;
			}

			var selector;
			var id;
			var categories;

			var categoriesDepth;
			var categoriesType;
			var categoriesTitle;
			var categoriesHref;
			var categoriesTarget;

			var idCount = 0;
			var preCategoriesDepth = -1;
			var nextCategoriesDepth = -1;						
			
			var categoriesTag;

			for (var i = 0; i < data.length; i++) {
				selector = data[i].selector;
				id = data[i].id;
				categories = data[i].categories;

				categoriesTag = '';

				if (_.isEqual($(selector).length, 0)) {
					continue;
				}

				for (var k = 0; k < categories.length; k++) {
					categoriesDepth = categories[k].depth;
					categoriesType = categories[k].type;
					categoriesTitle = categories[k].title;
					categoriesHref = categories[k].href;
					categoriesTarget = categories[k].target;

					if (_.isEqual(k, 0)) {
						preCategoriesDepth = -1;
					}  else {
						preCategoriesDepth = categories[k - 1].depth;
					}
					
					if (_.isEqual(k + 1, categories.length)) {
						nextCategoriesDepth = -1;
					}  else {
						nextCategoriesDepth = categories[k + 1].depth;
					}
					
					if (_.isEqual(categoriesDepth, 1)) {
						idCount++;
						
						if (_.isEqual(nextCategoriesDepth, categoriesDepth) || _.isEqual(nextCategoriesDepth, -1)) {
							categoriesTag += '<li class="dropdown-item">';
						} else {
							categoriesTag += '<li class="dropdown-item hs-has-sub-menu">';
						}

						categoriesTag += '		<a id="nav-link--' + id + idCount + '" class="nav-link g-color-primary--hover" href="' + categoriesHref + '" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu--' + id + idCount + '">' + categoriesTitle + '</a>';
					}
					
					if (_.isEqual(categoriesDepth, 2)) {
						if (!_.isEqual(preCategoriesDepth, categoriesDepth)) {
							categoriesTag += '		<ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2" id="nav-submenu--' + id + idCount + '" aria-labelledby="nav-link--' + id + idCount + '">';
						}
					
						if (_.isEqual(categoriesType, 'link')) {
							categoriesTag += '			<li class="dropdown-item">';
							categoriesTag += '				<a class="nav-link g-color-primary--hover" href="' + categoriesHref + '" ' + (_.isEqual(categoriesTarget, 'blank') ? 'target="_blank"' : '') + '>' + categoriesTitle + '</a>';
							categoriesTag += '			</li>';
						}
						
						if (_.isEqual(categoriesType, 'div')) {
							categoriesTag += '			<li class="dropdown-divider"></li>';
						}
						
						if (!_.isEqual(nextCategoriesDepth, categoriesDepth)) {
							categoriesTag += '		</ul>';
						}
					}
					
					if (_.isEqual(categoriesDepth, 1)) {
						if (_.isEqual(nextCategoriesDepth, categoriesDepth)) {
							categoriesTag += '</li>';
						}
					}
				}

				categoriesTag += '</li>';
				
				$(selector).append(categoriesTag);
			}

		},
		complete: function (jqXHR, textStatus) {
			if (_.isEqual(window.location.host, 'jokerx04.com')) {
				$('#navBar').find('a[href="' + window.location.protocol + '//' + window.location.host + '"]').addClass('active');
			}

			if (_.isEqual(window.location.host, 'lab.jokerx04.com')) {
				$('#navBar').find('a[href="' + window.location.protocol + '//' + window.location.host + '"]').addClass('active');
			}

			if (_.isEqual(window.location.host, 'blog.jokerx04.com')) {
				var breadcrumbsTitle = $('.breadcrumbsTitle').eq(0).text();

				if (_.includes(breadcrumbsTitle, '(')) {
					breadcrumbsTitle = breadcrumbsTitle.substring(0, breadcrumbsTitle.lastIndexOf('('));
				}
				
				if (_.includes(window.location.pathname, '/tag/')) {
					breadcrumbsTitle = '#' + breadcrumbsTitle;
				}
				
				$('#navBar #nav-link-blog').parent().find('a').each(function (index, element) {
					if (_.isEqual($(this).text(), breadcrumbsTitle) &&
							!_.isEqual($(this).closest('ul').closest('li').find('a:nth(0)').text(), '') &&
							!_.isEqual($(this).closest('ul').closest('li').find('a:nth(0)').attr('id'), 'nav-link-blog')) {
						
						breadcrumbsTitle = $(this).closest('ul').closest('li').find('a:nth(0)').text() + '/' + breadcrumbsTitle;

						return false;
					}
				});

				breadcrumbsTitle = '블로그/' + breadcrumbsTitle;

				var breadcrumbsTitleSplitIndex = 0;

				var navBarAText = '';

				$('#navBar #nav-link-blog').parent().find('a').each(function (index, element) {
					navBarAText = $(this).text();

					if (_.includes(navBarAText, '(')) {
						navBarAText = navBarAText.substring(0, navBarAText.lastIndexOf('('));
					}

					if (_.isEqual(navBarAText, breadcrumbsTitle.split('/')[breadcrumbsTitleSplitIndex])) {
						$(this).addClass('active');

						breadcrumbsTitleSplitIndex++;
					}
				});
			}
			
			$('#navBar ul li ul li').each(function (index, element) {
				if ($(this).find('li').length >= 10) {
					if (!$(this).find('ul').hasClass('u-dropdown-col-2')) {
						$(this).find('ul').addClass('u-dropdown-col-2');
					}
				}
			});
		}
	});
	
	// Footer
	jokerx04.jQuery.ajax({
		global: false,
		isCorsUrl: false,
		url: 'https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@latest/json/unify-v2.6.3-footer.json',
		method: 'GET',
		type: 'GET',
		success: function (data, textStatus, jqXHR) {
			if (!_.isEqual(jqXHR.status, 200)) {
				return;
			}
			
			$('#footerDesc').html(data.footerDesc);
			
			var footerBlogLink = data.footerBlogLink;
			var footerSkinLink = data.footerSkinLink;
			var footerContact = data.footerContact;
			
			var footerBlogLinkTitle;
			var footerBlogLinkHref;
			var footerBlogLinkTarget;
			
			var footerSkinLinkTitle;
			var footerSkinLinkHref;
			var footerSkinLinkTarget;
			
			var footerContactTitle;
			var footerContactHref;
			var footerContactTarget;
			
			var footerBlogLinkTag;
			var footerSkinLinkTag;
			var footerContactTag;
			
			for (var i = 0; i < footerBlogLink.length; i++) {
				footerBlogLinkTitle = footerBlogLink[i].title;
				footerBlogLinkHref = footerBlogLink[i].href;
				footerBlogLinkTarget = footerBlogLink[i].target;

				footerBlogLinkTag = '';
				
				if (_.isEqual(i + 1, footerBlogLink.length)) {
					footerBlogLinkTag += '<li class="g-pos-rel g-py-10">';
				} else {
					footerBlogLinkTag += '<li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">';
				}
				
				footerBlogLinkTag += '	<h4 class="h6 g-pr-20 mb-0">';
				footerBlogLinkTag += '		<a class="g-color-white-opacity-0_8 g-color-white--hover" href="' + footerBlogLinkHref + '" ' + (_.isEqual(footerBlogLinkTarget, 'blank') ? 'target="_blank"' : '') + '>' + footerBlogLinkTitle + '</a>';
				
				if (_.isEqual(footerBlogLinkTarget, 'blank')) {
					footerBlogLinkTag += '		<i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>';
				}
				
				footerBlogLinkTag += '	</h4>';
				footerBlogLinkTag += '</li>';
				
				$('#footerBlogLink').append(footerBlogLinkTag);
			}
			
			
			for (var i = 0; i < footerSkinLink.length; i++) {
				footerSkinLinkTitle = footerSkinLink[i].title;
				footerSkinLinkHref = footerSkinLink[i].href;
				footerSkinLinkTarget = footerSkinLink[i].target;

				footerSkinLinkTag = '';
				
				if (_.isEqual(i + 1, footerSkinLink.length)) {
					footerSkinLinkTag += '<li class="g-pos-rel g-py-10">';
				} else {
					footerSkinLinkTag += '<li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">';
				}
				
				footerSkinLinkTag += '	<h4 class="h6 g-pr-20 mb-0">';
				footerSkinLinkTag += '		<a class="g-color-white-opacity-0_8 g-color-white--hover" href="' + footerSkinLinkHref + '" ' + (_.isEqual(footerSkinLinkTarget, 'blank') ? 'target="_blank"' : '') + '>' + footerSkinLinkTitle + '</a>';
				
				if (_.isEqual(footerSkinLinkTarget, 'blank')) {
					footerSkinLinkTag += '		<i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>';
				}
				
				footerSkinLinkTag += '	</h4>';
				footerSkinLinkTag += '</li>';
				
				$('#footerSkinLink').append(footerSkinLinkTag);
			}
			
			for (var i = 0; i < footerContact.length; i++) {
				footerContactTitle = footerContact[i].title;
				footerContactHref = footerContact[i].href;
				footerContactTarget = footerContact[i].target;

				footerContactTag = '';
				
				footerContactTag += '<a class="g-color-white-opacity-0_8 g-color-white--hover" href="' + footerContactHref + '" ' + (_.isEqual(footerContactTarget, 'blank') ? 'target="_blank"' : '') + '>' + footerContactTitle + '</a>';
				
				if (!_.isEqual(i + 1, footerContact.length)) {
					footerContactTag += '<br />';
				}
				
				$('#footerContact').append(footerContactTag);
			}
			
			$('#footerCopyright').html(data.footerCopyright);
		},
		complete: function (jqXHR, textStatus) {
			
		}
	});
});
