$(function() {
	
	// Global site tag (gtag.js) - Google Analytics
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-0KPMDR6F1P');
	
	// Global Ajax Event
	$(document).ajaxStart(function () {
		
		startBlockUI();
		
	});
	
	$(document).ajaxStop(function () {
		
		stopBlockUI();
		
	});
	
	// jQuery Tocify
	$('body').prepend('<div id="toc" style="z-index: 10; top: 252px; right: 10px; max-height: 50%; padding: 10px; background-color: #ffffff;"></div>');
	
	$('#toc').tocify({

		context: '.entry-content',
		selectors: 'h2,h3,h4',
		ignoreSelector: '.another_category h4',
		theme: 'jqueryui'

	});
	
	if ($(window).width() >= 1200) {
		$('#toc').show();
	} else {
		$('#toc').hide();
	}
	
	// Window Resize
	$(window).resize(function (eventObject) {
		
		if ($(window).width() >= 1200) {
			$('#toc').show();
		} else {
			$('#toc').hide();
		}
		
	});

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

			

		}

	};
	
	$.extend(defaults, options);
	
	if (defaults.crossDomain && jQuery.support.cors) {
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

		message: '<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmnevU%2FbtqTLyQjF5S%2FmVaLDms5y6A3XBAOTPQoy0%2Fimg.gif" />',
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

function prismHighlight(selector, data, language) {
	
	if ($.trim(language) === '') {
		language = 'markup';
	}
	
	$(selector).html('<pre class="line-numbers"><code class="language-' + language + '">' + data + '</code></pre>');
	
	Prism.highlightAll();
	
}

function getJQueryVersion() {
		
	return $().jquery;

}

function getJQueryUIVersion() {

	return $.ui.version;

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
			port = '80'
		}
		
		if (url.protocol === 'https:') {
			port = '443'
		}
	}
	
	returnValue = url.hostname + ':' + port + url.pathname + url.search;
	
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
