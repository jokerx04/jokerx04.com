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

		message: '<img src="./images/loading.gif" />',
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
