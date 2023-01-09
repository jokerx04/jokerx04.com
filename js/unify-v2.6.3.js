// jQuery.browser.mobile (http://detectmobilebrowser.com)
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(function() {

	// Global Ajax Event
	let ajaxSendCount = 0;
	let ajaxCompleteCount = 0;
	
	$(document).ajaxStart(function () {

		

	});
	
	$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {
		
		ajaxSendCount++;
		
		if (ajaxOptions.global && ajaxOptions.async) {
			jqXHR.timeoutId = setTimeout(function () {
				if ($('.blockUI').length === 0) {
					startBlockUI();
				}
				
			}, 500);
		}

	});
	
	$(document).ajaxComplete(function (event, jqXHR, ajaxOptions) {
		
		ajaxCompleteCount++;
		
		if (jqXHR.timeoutId) {
			clearTimeout(jqXHR.timeoutId);
		}

	});
	
	$(document).ajaxStop(function () {
		
		if (ajaxSendCount === ajaxCompleteCount) {
			stopBlockUI();
		}

	});

	// GNB Navigation
	getNavigationHtml('#nav-submenu-blog', 'id', {

		"key": "depth,type,title,href,target",
		"value": [

			"1,link,블로그,#,self",
			"2,link,전체 글,https://blog.jokerx04.com,self",
			"2,link,분류 전체보기,https://blog.jokerx04.com/category,self",
			"2,link,공지사항,https://blog.jokerx04.com/notice,self",
			"2,link,방명록,https://blog.jokerx04.com/guestbook,self",
			"2,link,태그,https://blog.jokerx04.com/tag,self",
			"2,link,블로그 관리,https://blog.jokerx04.com/manage,blank",
			"2,link,티스토리 스킨 가이드,https://tistory.github.io/document-tistory-skin,blank",
			"2,link,티스토리 Open API,https://tistory.github.io/document-tistory-apis,blank"

		]

	});

	getNavigationHtml('#nav-submenu-bookmark', 'bookmark', {

		"key": "depth,type,title,href,target",
		"value": [

			"1,link,프레젠테이션,#,self",
			"2,link,한국어 맞춤법/문법 검사기,http://speller.cs.pusan.ac.kr,blank",
			"2,div,,,",
			"2,link,Presentation Magazine,https://www.presentationmagazine.com,blank",
			"2,div,,,",
			"2,link,PIXLR,https://pixlr.com/kr/editor,blank",
			"2,link,FLATICON,https://www.flaticon.com,blank",
			"2,link,ICONFINDER,https://www.iconfinder.com,blank",
			"2,link,IconArchive,http://www.iconarchive.com,blank",
			"2,link,Icons for everything,https://thenounproject.com,blank",
			"2,link,iconmonstr,https://iconmonstr.com,blank",
			"2,link,Unsplash,https://unsplash.com,blank",
			"1,link,교육,#,self",
			"2,link,K-MOOC,http://www.kmooc.kr,blank",
			"2,link,인프런,https://www.inflearn.com,blank",
			"2,link,T아카데미,https://tacademy.skplanet.com,blank",
			"2,link,노마드 코더,https://nomadcoders.co,blank",
			"2,link,서울특별시 평생학습포털,http://sll.seoul.go.kr,blank",
			"2,link,경기도 무료 온라인 평생학습,https://www.gseek.kr,blank",
			"2,div,,,",
			"2,link,한국사데이터베이스,http://db.history.go.kr,blank",
			"2,link,한국역사정보통합시스템,http://koreanhistory.or.kr,blank",
			"2,div,,,",
			"2,link,Z-Library,https://z-lib.org,blank",
			"2,link,Library Genesis,https://libgen.is,blank",
			"1,link,부동산,#,self",
			"2,link,씨:리얼,http://seereal.lh.or.kr,blank",
			"2,link,네이버 부동산,http://land.naver.com,blank",
			"2,link,다음 부동산,http://realestate.daum.net,blank",
			"2,link,부동산114,http://www.r114.com,blank",
			"2,link,MK부동산,http://estate.mk.co.kr,blank",
			"2,link,리브부동산,https://kbland.kr,blank",
			"2,link,직방,https://www.zigbang.com,blank",
			"2,link,다방,https://www.dabangapp.com,blank",
			"2,link,밸류맵,https://www.valueupmap.com,blank",
			"2,link,디스코,https://www.disco.re,blank",
			"2,div,,,",
			"2,link,국토교통부 부동산공시가격 알리미,http://www.realtyprice.kr,blank",
			"2,link,국토교통부 실거래가 공개시스템,http://rt.molit.go.kr,blank",
			"2,link,하우스머치,https://www.howsmuch.com,blank",
			"2,link,주소 기반 연립·다세대 시세 조회,http://villasise.com,blank",
			"2,link,건축행정시스템 세움터,https://cloud.eais.go.kr,blank",
			"2,link,바로바로,https://www.barobaro.info,blank",
			"2,div,,,",
			"2,link,마이홈포털,https://www.myhome.go.kr,blank",
			"2,link,신혼희망타운,http://신혼희망타운.com,blank",
			"2,link,한국부동산원 청약홈,https://www.applyhome.co.kr,blank",
			"2,link,LH 청약센터,https://apply.lh.or.kr,blank",
			"1,link,쇼핑,#,self",
			"2,link,랜스타,http://www.lanmart.co.kr,blank",
			"2,link,강원전자,http://www.kwshop.co.kr,blank",
			"2,link,(주)이온크루,http://deck.plus-web.co.kr,blank",
			"2,div,,,",
			"2,link,신세계 TV쇼핑,http://tv.ssg.com,blank",
			"2,link,파크랜드,http://eshop.parkland.co.kr,blank",
			"2,link,STCO,http://www.stco.co.kr,blank",
			"2,link,네파 통합 쇼핑몰,http://www.nepamall.com,blank",
			"2,div,,,",
			"2,link,이마트몰,http://emart.ssg.com,blank",
			"2,link,칼이쓰마,http://www.kalesma.com,blank",
			"2,link,가나주류백화점 광진점,http://www.kajawine.kr,blank",
			"2,link,디자인아지트,https://designagit.com,blank",
			"1,link,웹 마스터 도구,#,self",
			"2,link,Google Analytics,https://analytics.google.com,blank",
			"2,link,Google Adsense,https://www.google.co.kr/adsense,blank",
			"2,link,Google Search Console,https://search.google.com/search-console,blank",
			"2,link,네이버 서치어드바이저,https://searchadvisor.naver.com,blank",
			"2,link,Bing 웹 마스터 도구,http://www.bing.com/toolbox/webmaster,blank",
			"2,link,XML Sitemap Generator,http://www.check-domains.com/sitemap/index.php,blank",
			"2,div,,,",
			"2,link,가비아,https://www.gabia.com,blank",
			"2,link,IwinV CLOUD,https://www.iwinv.kr,blank",
			"2,link,MacinCloud,https://www.macincloud.com,blank",
			"2,link,MacStadium,https://www.macstadium.com,blank",
			"2,div,,,",
			"2,link,네이버 모두,http://www.modoo.at,blank",
			"2,link,WIX,http://ko.wix.com,blank",
			"1,link,프레임워크,#,self",
			"2,link,Apache Software Foundation,http://www.apache.org,blank",
			"2,div,,,",
			"2,link,Spring,http://spring.io,blank",
			"2,link,표준프레임워크 포털,http://www.egovframe.go.kr,blank",
			"2,link,Thymeleaf,https://www.thymeleaf.org,blank",
			"2,link,React,https://ko.reactjs.org,blank",
			"2,link,jQuery,https://jquery.com,blank",
			"2,link,Bootstrap,https://getbootstrap.com,blank",
			"1,link,솔루션,#,self",
			"2,link,Highcharts,https://www.highcharts.com,blank",
			"2,link,D3.js,https://d3js.org,blank",
			"2,link,dc.js,https://dc-js.github.io/dc.js,blank",
			"2,link,MapD Charting,https://github.com/omnisci/mapd-charting,blank",
			"2,div,,,",
			"2,link,OpenLayers,https://openlayers.org,blank",
			"2,link,Mapbox,https://www.mapbox.com,blank",
			"2,link,kepler.gl,https://kepler.gl,blank",
			"2,link,deck.gl,https://deck.gl,blank",
			"2,link,flowmap.blue,https://flowmap.blue,blank",
			"2,div,,,",
			"2,link,WrapBootstrap,https://wrapbootstrap.com,blank",
			"2,link,Bootstrap Themes,https://themes.getbootstrap.com,blank",
			"1,link,데이터,#,self",
			"2,link,정보공개포털,https://www.open.go.kr,blank",
			"2,link,공공데이터포털,https://www.data.go.kr,blank",
			"2,link,KOSIS 국가통계포털,http://kosis.kr,blank",
			"2,link,AI 허브,https://aihub.or.kr,blank",
			"2,div,,,",
			"2,link,NAVER Developers,https://developers.naver.com,blank",
			"2,link,Kakao Developers,https://developers.kakao.com,blank",
			"2,div,,,",
			"2,link,Download Sample Videos,https://www.sample-videos.com,blank",
			"1,link,게임,#,self",
			"2,link,두기의 고전게임,https://nemo838.tistory.com,blank",
			"2,link,두기의 무설치,https://doogie838.tistory.com,blank",
			"2,link,툴리의 고전게임,https://www.tooli.co.kr,blank",
			"2,link,My Abandonware,https://www.myabandonware.com,blank",
			"1,link,기타,#,self",
			"2,link,소프트웨어기술자 경력관리시스템,https://career.sw.or.kr,blank"

		]

	});

	jQueryAjax({

		global: false,
		isCorsUrl: false,
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		url: 'https://www.tistory.com/apis/category/list?&output=json&blogName=jokerx04-lab&access_token=bc4a6ac229fa008885b1f99cb57153a2_65227d4e733f4974e0bcad4da6e418e7',
		method: 'GET',
		type: 'GET',
		success: function (data, textStatus, jqXHR) {

			if ((data.tistory.status === '200') && (data.tistory.item.categories !== undefined)) {
				console.log(JSON.stringify(data, null, '\t'));
			}

		}

	}).then(
		function () {

			return jQueryAjax({

					global: false,
					isCorsUrl: false,
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					url: 'https://www.tistory.com/apis/category/list?output=json&blogName=jokerx04&access_token=d697f5d5e99459276b03685445473e81_c5ae69e972d51dd9540c661c3ecacc2a',
					method: 'GET',
					type: 'GET',
					success: function (data, textStatus, jqXHR) {

						if ((data.tistory.status === '200') && (data.tistory.item.categories !== undefined)) {
							var secondaryUrl = 'https://' + data.tistory.item.secondaryUrl;
							var categories = data.tistory.item.categories;

							var categoriesId = '';
							var categoriesName = '';
							var categoriesParent = '';
							var categoriesLabel = '';
							var categoriesEntries = '';
							var categoriesEntriesInLogin = '';

							var tempClass = '';
							var isSubMenuTag = true;

							var categoriesTag = '';

							for (var i = 0; i < categories.length; i++) {
								categoriesId = categories[i].id;
								categoriesName = categories[i].name;
								categoriesParent = categories[i].parent;
								categoriesLabel = categories[i].label;
								categoriesEntries = categories[i].entries;
								categoriesEntriesInLogin = categories[i].entriesInLogin;

								if (categoriesParent !== '') {
									continue;
								}

								tempClass = '';
								isSubMenuTag = true;

								categoriesTag += '<li class="dropdown-item tempClass">';
								categoriesTag += '	<a id="nav-link--blog' + categoriesId + '" class="nav-link g-color-primary--hover" href="' + secondaryUrl + '/category/' + categoriesLabel + '" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu--blog' + categoriesId + '">' + categoriesName + '(' + categoriesEntries + ')</a>';

								for (var k = 0; k < categories.length; k++) {
									if (categoriesId !== categories[k].parent) {
										continue;
									}

									if (isSubMenuTag) {
										categoriesTag += '	<ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2" id="nav-submenu--blog' + categoriesId + '" aria-labelledby="nav-link--blog' + categoriesId + '">';
									}

									categoriesTag += '		<li class="dropdown-item">';
									categoriesTag += '			<a class="nav-link g-color-primary--hover" href="' + secondaryUrl + '/category/' + categories[k].label + '">' + categories[k].name + '(' + categories[k].entries + ')</a>';
									categoriesTag += '		</li>';

									isSubMenuTag = false;
								}

								if (!isSubMenuTag) {
									tempClass = 'hs-has-sub-menu';

									categoriesTag += '	</ul>';
								}

								categoriesTag += '</li>';

								if (categoriesTag.lastIndexOf('tempClass') !== -1) {
									categoriesTag = categoriesTag.substring(0, categoriesTag.lastIndexOf('tempClass')) + tempClass + categoriesTag.substring(categoriesTag.lastIndexOf('tempClass') + 'tempClass'.length);
								}
							}

							$('#nav-submenu-blog').append(categoriesTag);
						}

					}

				});

		},
		function () {

		}
	).always(
		function () {

			// GNB Active
			if (window.location.host === 'jokerx04.com') {
				$('#navBar').find('a[href="' + window.location.protocol + '//' + window.location.host + '"]').addClass('active');
			}

			if (window.location.host === 'lab.jokerx04.com') {
				$('#navBar').find('a[href="' + window.location.protocol + '//' + window.location.host + '"]').addClass('active');
			}

			if (window.location.host === 'blog.jokerx04.com') {
				var breadcrumbsTitle = $('.breadcrumbsTitle').eq(0).text();

				if (breadcrumbsTitle.lastIndexOf('(') !== -1) {
					breadcrumbsTitle = breadcrumbsTitle.substring(0, breadcrumbsTitle.lastIndexOf('('));
				}

				$('#navBar').find('a').each(function (index, element) {

					if ($(this).text() === breadcrumbsTitle) {
						if (breadcrumbsTitle.lastIndexOf('/') === -1) {
							breadcrumbsTitle = '블로그/' + breadcrumbsTitle;
						}

						return false;
					}

				});

				breadcrumbsTitle = '블로그/' + breadcrumbsTitle;

				var breadcrumbsTitleSplitIndex = 0;

				var navBarAText = '';

				$('#navBar').find('a').each(function (index, element) {

					navBarAText = $(this).text();

					if (navBarAText.lastIndexOf('(') !== -1) {
						navBarAText = navBarAText.substring(0, navBarAText.lastIndexOf('('));
					}

					if (navBarAText === breadcrumbsTitle.split('/')[breadcrumbsTitleSplitIndex]) {
						$(this).addClass('active');

						breadcrumbsTitleSplitIndex++;
					}

				});
			}

		}
	);

});

function jQueryAjaxErrorConsole(jQueryAjaxErrorArray) {

	console.error('readyState : %s(%s)', jQueryAjaxErrorArray[0], jQueryAjaxErrorArray[1]);
	console.error('status : %s', jQueryAjaxErrorArray[2]);
	console.error('statusText : %s', jQueryAjaxErrorArray[3]);
	console.error('textStatus : %s', jQueryAjaxErrorArray[4]);
	console.error('errorThrown : %s', jQueryAjaxErrorArray[5]);
	console.error('responseText : %s', jQueryAjaxErrorArray[6]);

}


function jQueryAjaxErrorAlert(jQueryAjaxErrorArray) {

	let jQueryAjaxErrorText = '';

	jQueryAjaxErrorText += ('readyState : ' + jQueryAjaxErrorArray[0] + '(' + jQueryAjaxErrorArray[1] + ')');
	jQueryAjaxErrorText += '\n';
	jQueryAjaxErrorText += ('status : ' + jQueryAjaxErrorArray[2]);
	jQueryAjaxErrorText += '\n';
	jQueryAjaxErrorText += ('statusText : ' + jQueryAjaxErrorArray[3]);
	jQueryAjaxErrorText += '\n';
	jQueryAjaxErrorText += ('textStatus : ' + jQueryAjaxErrorArray[4]);
	jQueryAjaxErrorText += '\n';
	jQueryAjaxErrorText += ('errorThrown : ' + jQueryAjaxErrorArray[5]);
	jQueryAjaxErrorText += '\n';
	jQueryAjaxErrorText += ('responseText : ' + jQueryAjaxErrorArray[6]);

	alert(jQueryAjaxErrorText);

}

function jQueryAjax(options) {

	let defaults = {

		global: true,
		crossDomain: true,
		context: this,
		traditional: true,
		method: 'POST',
		type: 'POST',
		dataType: 'json',
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		processData: true,
		async: true,
		cache: true,
		timeout : 0,
		headers: {  },
		beforeSend: function (jqXHR, settings) {



		},
		success: function (data, textStatus, jqXHR) {



		},
		error: function (jqXHR, textStatus, errorThrown) {

			let jQueryAjaxErrorArray = getJQueryAjaxErrorArray(jqXHR, textStatus, errorThrown);

			jQueryAjaxErrorConsole(jQueryAjaxErrorArray);

		},
		complete: function (jqXHR, textStatus) {



		},
		isCorsUrl: true

	};

	$.extend(defaults, options);

	if (defaults.crossDomain && defaults.isCorsUrl && jQuery.support.cors) {
		defaults.url = 'https://cors.jokerx04.com/' + getCorsUrl(defaults.url);
	}

	return $.ajax({

		global: defaults.global,
		crossDomain: defaults.crossDomain,
		context: defaults.context,
		traditional: defaults.traditional,
		url: defaults.url,
		method: defaults.method,
		type: defaults.type,
		dataType: defaults.dataType,
		contentType: defaults.contentType,
		processData: defaults.processData,
		async: defaults.async,
		cache: defaults.cache,
		timeout : defaults.timeout,
		headers: defaults.headers,
		data: defaults.data,
		beforeSend: defaults.beforeSend,
		success: defaults.success,
		error: defaults.error,
		complete: defaults.complete

	});

}

function startBlockUI(selector, options) {

	let defaults = {

		message: '<img src="https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com@b0c99c4/images/loading.gif" />',
		css: {

			width: '100px',
			top: ($(window).height() - 100) / 2 + 'px',
			left: ($(window).width() - 100) / 2 + 'px',
			border: 'none',
			backgroundColor: 'rgba(255, 255, 255, 0)',
			filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000, endColorstr=#00000000)',
			background: 'transparent'

		}

	};

	$.extend(defaults, options);

	if ($.trim(selector) === '') {
		$.blockUI(defaults);
	} else {
		$(selector).block(defaults);
	}

}

function stopBlockUI(selector) {

	if ($.trim(selector) === '') {
		$.unblockUI();
	} else {
		$(selector).unblock();
	}

}

function htmlBeautify(data, options) {

	let defaults = {

		indent_size: '1',
		indent_char: '\t'

	};

	$.extend(defaults, options);

	return html_beautify(data, defaults);

}

function prismHighlight(selector, data, language) {

	if ($.trim(language) === '') {
		language = 'markup';
	}

	$(selector).html('<pre class="line-numbers"><code class="language-' + language + '">' + data + '</code></pre>');

	Prism.highlightAll();

}

function getNavigationHtml(selector, id, categories) {

	let categoriesKey = categories.key;
	let categoriesValue = categories.value;
	
	let categoriesId = 0;
	let categoriesDepth = '';
	let categoriesType = '';
	let categoriesTitle = '';
	let categoriesHref = '';
	let categoriesTarget = '';
	
	let preCategoriesDepth = '-1';
	let nextCategoriesDepth = '-1';
	
	let categoriesTag = '';

	for (let i = 0; i < categoriesValue.length; i++) {
		categoriesDepth = categoriesValue[i].split(',')[0];
		categoriesType = categoriesValue[i].split(',')[1];
		categoriesTitle = categoriesValue[i].split(',')[2];
		categoriesHref = categoriesValue[i].split(',')[3];
		categoriesTarget = categoriesValue[i].split(',')[4];
		
		if (i !== 0) {
			preCategoriesDepth = categoriesValue[i - 1].split(',')[0];
		}
		
		if ((i + 1) !== categoriesValue.length) {
			nextCategoriesDepth = categoriesValue[i + 1].split(',')[0];
		}
		
		if (categoriesDepth === '1') {
			categoriesId++;
			
			categoriesTag += '<li class="dropdown-item hs-has-sub-menu">';
			categoriesTag += '		<a id="nav-link--' + (id + categoriesId) + '" class="nav-link g-color-primary--hover" href="' + categoriesHref + '" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu--' + (id + categoriesId) + '">' + categoriesTitle + '</a>';
		}
		
		if (categoriesDepth === '2') {
			if (preCategoriesDepth !== categoriesDepth) {
				categoriesTag += '		<ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2" id="nav-submenu--' + (id + categoriesId) + '" aria-labelledby="nav-link--' + (id + categoriesId) + '">';
			}
		
			if (categoriesType === 'link') {
				categoriesTag += '			<li class="dropdown-item">';
				categoriesTag += '				<a class="nav-link g-color-primary--hover" href="' + categoriesHref + '" ' + ((categoriesTarget === 'blank') ? 'target="_blank"' : '') + '>' + categoriesTitle + '</a>';
				categoriesTag += '			</li>';
			}
			
			if (categoriesType === 'div') {
				categoriesTag += '			<li class="dropdown-divider"></li>';
			}
			
			if (nextCategoriesDepth !== categoriesDepth) {
				categoriesTag += '		</ul>';
			}
			
			if ((i + 1) === categoriesValue.length) {
				categoriesTag += '		</ul>';
			}
		}
		
		if (categoriesDepth === '1') {
			if (nextCategoriesDepth === categoriesDepth) {
				categoriesTag += '</li>';
			}
		}
	}
	
	categoriesTag += '</li>';
	
	$(selector).append(categoriesTag);
	
	$(selector).find('li.hs-has-sub-menu').each(function (index, element) {
		
		if ($(this).find('a:eq(0)').text().indexOf($(this).find('a:eq(0)').text() + '(') === -1) {
			$(this).find('a:eq(0)').text($(this).find('a:eq(0)').text() + '(' + ($(this).find('a').length - 1) + ')');
		}
		
	});
	
}

function addTableTr(selector, appendTrIndex, appendTrHtml) {

	if (appendTrIndex === undefined) {
		appendTrIndex = $(selector).closest('table').find('tr').index($(selector).closest('tr'));
	}

	if (appendTrIndex >= $(selector).closest('table').find('tr').length) {
		appendTrIndex = $(selector).closest('table').find('tr').index($(selector).closest('tr'));
	}

	if (appendTrHtml === undefined) {
		appendTrHtml = getStringHtml($(selector).closest('tr'));
	}

	$(selector).closest('table').find('tr:nth-child(' + (appendTrIndex + 1) + ')').after(appendTrHtml);

	disableTableTr($(selector).closest('table').find('tr:nth-child(' + (appendTrIndex + 2) + ')'), false);

}

function removeTableTr(selector) {

	if ($(selector).closest('table').find('.' + $(selector).attr('class').replace(/\s/gi, '.')).length === 1) {
		$(selector).closest('tr').find('input[type="text"]').val('');

		$(selector).closest('tr').find('input[type="checkbox"]').prop('checked', false);

		$(selector).closest('tr').find('input[type="radio"]').prop('checked', false);

		$(selector).closest('tr').find('textarea').val('');

		$(selector).closest('tr').find('select option:eq(0)').prop('selected', true);
	} else {
		$(selector).closest('tr').remove();
	}

}

function disableTableTr(selector, isDisabled) {

	$(selector).closest('tr').find('input').prop('disabled', isDisabled);

	$(selector).closest('tr').find('textarea').prop('disabled', isDisabled);

	$(selector).closest('tr').find('select').prop('disabled', isDisabled);

}

function getJQueryVersion() {

	return $().jquery;

}

function getJQueryUIVersion() {

	return $.ui.version;

}

function getStringHtml(selector) {

	return $(selector).clone().wrapAll('<div/>').parent().html();

}

function getJsonStringify(json) {

	try {
		return JSON.stringify(json, null, '\t');
	} catch(e) {
		console.error('getJsonStringify(json) : %s, %s', e.name, e.message);

		return json;
	}

}

function getJsonParseStringify(jsonText) {

	try {
		return getJsonStringify(JSON.parse(jsonText));
	} catch(e) {
		console.error('getJsonParseStringify(jsonText) : %s, %s', e.name, e.message);

		return jsonText;
	}

}

function getJQueryAjaxErrorArray(jqXHR, textStatus, errorThrown) {

	let returnValue = new Array();

	let readyState = '';

	if (jqXHR.readyState === 0) {
		readyState = 'UNSENT';
	}

	if (jqXHR.readyState === 1) {
		readyState = 'OPENED';
	}

	if (jqXHR.readyState === 2) {
		readyState = 'HEADERS_RECEIVED';
	}

	if (jqXHR.readyState === 3) {
		readyState = 'LOADING';
	}

	if (jqXHR.readyState === 4) {
		readyState = 'DONE';
	}

	returnValue.push(readyState);
	returnValue.push(jqXHR.readyState);
	returnValue.push(jqXHR.status);
	returnValue.push(jqXHR.statusText);
	returnValue.push(textStatus);
	returnValue.push(errorThrown);
	returnValue.push(jqXHR.responseText);

	return returnValue;

}

function getCorsUrl(data) {

	let returnValue = $.trim(data);

	if (returnValue.indexOf('://') === -1) {
		returnValue = 'http://' + returnValue;
	}

	let url = new URL(returnValue);

	let port = url.port;

	if (port === '') {
		if (url.protocol === 'http:') {
			returnValue = url.hostname + url.pathname + url.search;
		}

		if (url.protocol === 'https:') {
			returnValue = url.hostname + ':443' + url.pathname + url.search;
		}
	} else {
		returnValue = url.hostname + ':' + port + url.pathname + url.search;
	}

	return returnValue;

}

function getNumber(data) {

	let returnValue = $.trim(data);

	returnValue = returnValue.replace(/[^0-9]/g, '');

	return returnValue;

}

function getEscapeHtml(data) {

	let returnValue = $.trim(data);

	returnValue = returnValue.replace(/&/g, '&amp;');
	returnValue = returnValue.replace(/</g, '&lt;');
	returnValue = returnValue.replace(/>/g, '&gt;');

	return returnValue;

}

function googleTranslateElementInit() {

	new google.translate.TranslateElement({

		pageLanguage: 'ko',
		layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
		autoDisplay: true

	}, 'googleTranslate');

	var checkExist = setInterval(function() {

		if ($('#googleTranslate select').length > 0) {
			$('#googleTranslate select').addClass('custom-select w-50');

			clearInterval(checkExist);
		}

	}, 100);

}
