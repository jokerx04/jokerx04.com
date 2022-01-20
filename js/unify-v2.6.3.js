// jQuery.browser.mobile (http://detectmobilebrowser.com)
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(function() {
				
	// Global Ajax Event
	$(document).ajaxStart(function () {

		startBlockUI();

	});

	$(document).ajaxStop(function () {

		stopBlockUI();

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
