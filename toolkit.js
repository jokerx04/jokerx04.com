// test
$(function () {
	
	// Prism Syntax Highlighter
	$.prismSyntaxHighlighter = function () {
		
		var prismInputProgramCode = $("#prismInputProgramCode").val();
		
		var prismOutputProgramCode = "";
		
		prismOutputProgramCode += "<pre class=\"line-numbers\"><code class=\"language-" + $("#prismLanguageType").val() + "\">";
		prismOutputProgramCode += prismInputProgramCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
		prismOutputProgramCode += "</code></pre>";
		
		$("#prismOutputProgramCode").val(prismOutputProgramCode);
		
		$("#prismProgramCode").html(prismOutputProgramCode);
		
		Prism.highlightAll();
		
	};
	
	// REST API console
	if (window.localStorage != null) {
		$("#resetRestApiConsoleLocalStorage").css("display", "");
		
		$("#restApiConsoleUrl").val(localStorage.getItem("restApiConsole.restApiConsoleUrl"));
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleMethod") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleMethod"))) {
			$("#restApiConsoleMethod").val("GET");
		} else {
			$("#restApiConsoleMethod").val(localStorage.getItem("restApiConsole.restApiConsoleMethod"));
		}
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleDataType") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleDataType"))) {
			$("#restApiConsoleDataType").val("xml");
		} else {
			$("#restApiConsoleDataType").val(localStorage.getItem("restApiConsole.restApiConsoleDataType"));
		}
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleContentType") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleContentType"))) {
			$("#restApiConsoleContentType").val("application/x-www-form-urlencoded; charset=UTF-8");
		} else {
			$("#restApiConsoleContentType").val(localStorage.getItem("restApiConsole.restApiConsoleContentType"));
		}
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleAsync") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleAsync"))) {
			$("#restApiConsoleAsync").val("true");
		} else {
			$("#restApiConsoleAsync").val(localStorage.getItem("restApiConsole.restApiConsoleAsync"));
		}
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleCache") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleCache"))) {
			$("#restApiConsoleCache").val("true");
		} else {
			$("#restApiConsoleCache").val(localStorage.getItem("restApiConsole.restApiConsoleCache"));
		}
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleTimeout") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleTimeout"))) {
			$("#restApiConsoleTimeout").val("0");
		} else {
			$("#restApiConsoleTimeout").val(localStorage.getItem("restApiConsole.restApiConsoleTimeout"));
		}
		
		$("#restApiConsoleUsername").val(localStorage.getItem("restApiConsole.restApiConsoleUsername"));
		$("#restApiConsolePassword").val(localStorage.getItem("restApiConsole.restApiConsolePassword"));
		
		var restApiConsoleHeaderSerialize = localStorage.getItem("restApiConsole.restApiConsoleHeaderSerialize");
		
		var headerChecked = "";
		var headerKey = "";
		var headerValue = "";
		
		if (restApiConsoleHeaderSerialize != null) {
			$.each(restApiConsoleHeaderSerialize.split("&"), function (indexInArray, value) {
				
				if (((indexInArray + 1) % 3) == 1) {
					if ((indexInArray + 1) > 3) {
						$(".restApiConsoleHeaderPlus:last").closest("tr").after($(".restApiConsoleHeaderPlus:last").closest("tr").clone().wrapAll("<div/>").parent().html());
					}
					
					headerChecked = $.trim(value.split("=")[1]);
					
					if ("" == headerChecked) {
						$(".restApiConsoleHeaderPlus:last").closest("tr").find(".restApiConsoleHeaderCheckbox").prop("checked", false);
					} else {
						$(".restApiConsoleHeaderPlus:last").closest("tr").find(".restApiConsoleHeaderCheckbox").prop("checked", true);
					}
					
					$(".restApiConsoleHeaderPlus:last").closest("tr").find("input[name='restApiConsoleHeaderChecked']").val(headerChecked);
				} else if (((indexInArray + 1) % 3) == 2) {
					headerKey = $.trim(value.split("=")[1]);
					
					$(".restApiConsoleHeaderPlus:last").closest("tr").find("input[name='restApiConsoleHeaderKey']").val(decodeURIComponent(headerKey));
				} else if (((indexInArray + 1) % 3) == 0) {
					headerValue = $.trim(value.split("=")[1]);
					
					$(".restApiConsoleHeaderPlus:last").closest("tr").find("input[name='restApiConsoleHeaderValue']").val(decodeURIComponent(headerValue));
				}
				
			});
		}
		
		if ((localStorage.getItem("restApiConsole.restApiConsoleDataBodyType") == null) || ("" == localStorage.getItem("restApiConsole.restApiConsoleDataBodyType"))) {
			$(".restApiConsoleDataBodyType").val("form");
		} else {
			$(".restApiConsoleDataBodyType").val(localStorage.getItem("restApiConsole.restApiConsoleDataBodyType"));
			
			if ("form" == localStorage.getItem("restApiConsole.restApiConsoleDataBodyType")) {
				$(".restApiConsoleDataBodyForm").show();
				$(".restApiConsoleDataBodyRaw").hide();
			} else if ("raw" == localStorage.getItem("restApiConsole.restApiConsoleDataBodyType")) {
				$(".restApiConsoleDataBodyForm").hide();
				$(".restApiConsoleDataBodyRaw").show();
			} else {
				$(".restApiConsoleDataBodyForm").show();
				$(".restApiConsoleDataBodyRaw").hide();
			}
		}
		
		var restApiConsoleDataSerialize = localStorage.getItem("restApiConsole.restApiConsoleDataSerialize");
		
		var dataChecked = "";
		var dataKey = "";
		var dataValue = "";
		
		if (restApiConsoleDataSerialize != null) {
			$.each(restApiConsoleDataSerialize.split("&"), function (indexInArray, value) {
				
				if (((indexInArray + 1) % 3) == 1) {
					if ((indexInArray + 1) > 3) {
						$(".restApiConsoleDataPlus:last").closest("tr").after($(".restApiConsoleDataPlus:last").closest("tr").clone().wrapAll("<div/>").parent().html());
					}
					
					dataChecked = $.trim(value.split("=")[1]);
					
					if ("" == dataChecked) {
						$(".restApiConsoleDataPlus:last").closest("tr").find(".restApiConsoleDataCheckbox").prop("checked", false);
					} else {
						$(".restApiConsoleDataPlus:last").closest("tr").find(".restApiConsoleDataCheckbox").prop("checked", true);
					}
					
					$(".restApiConsoleDataPlus:last").closest("tr").find("input[name='restApiConsoleDataChecked']").val(dataChecked);
				} else if (((indexInArray + 1) % 3) == 2) {
					dataKey = $.trim(value.split("=")[1]);
					
					$(".restApiConsoleDataPlus:last").closest("tr").find("input[name='restApiConsoleDataKey']").val(decodeURIComponent(dataKey));
				} else if (((indexInArray + 1) % 3) == 0) {
					dataValue = $.trim(value.split("=")[1]);
					
					$(".restApiConsoleDataPlus:last").closest("tr").find("input[name='restApiConsoleDataValue']").val(decodeURIComponent(dataValue));
				}
				
			});
		}
		
		$(".restApiConsoleDataBodyRaw").val(localStorage.getItem("restApiConsole.restApiConsoleDataBodyRaw"));
	}
	
	$.setRestApiConsoleLocalStorage = function () {
		
		if (window.localStorage != null) {
			localStorage.setItem("restApiConsole.restApiConsoleUrl", $.trim($("#restApiConsoleUrl").val()));
			localStorage.setItem("restApiConsole.restApiConsoleMethod", $("#restApiConsoleMethod").val());
			localStorage.setItem("restApiConsole.restApiConsoleDataType", $("#restApiConsoleDataType").val());
			localStorage.setItem("restApiConsole.restApiConsoleContentType", $.trim($("#restApiConsoleContentType").val()));
			localStorage.setItem("restApiConsole.restApiConsoleAsync", $("#restApiConsoleAsync").val());
			localStorage.setItem("restApiConsole.restApiConsoleCache", $("#restApiConsoleCache").val());
			localStorage.setItem("restApiConsole.restApiConsoleTimeout", $.trim($("#restApiConsoleTimeout").val()));
			localStorage.setItem("restApiConsole.restApiConsoleUsername", $.trim($("#restApiConsoleUsername").val()));
			localStorage.setItem("restApiConsole.restApiConsolePassword", $.trim($("#restApiConsolePassword").val()));
			localStorage.setItem("restApiConsole.restApiConsoleHeaderSerialize", $("#restApiConsoleHeaderForm").not(".restApiConsoleHeaderCheckbox").serialize());
			localStorage.setItem("restApiConsole.restApiConsoleDataBodyType", $.trim($(".restApiConsoleDataBodyType").val()));
			localStorage.setItem("restApiConsole.restApiConsoleDataSerialize", $("#restApiConsoleDataForm").serialize());
			localStorage.setItem("restApiConsole.restApiConsoleDataBodyRaw", $.trim($(".restApiConsoleDataBodyRaw").val()));
		}
		
	};
	
	$.resetRestApiConsoleLocalStorage = function () {
		
		if (window.localStorage != null) {
			if (!confirm("요청/응답 설정정보를 초기화하시겠습니까?")) {
				return;
			}
			
			localStorage.removeItem("restApiConsole.restApiConsoleUrl");
			localStorage.removeItem("restApiConsole.restApiConsoleMethod");
			localStorage.removeItem("restApiConsole.restApiConsoleDataType");
			localStorage.removeItem("restApiConsole.restApiConsoleContentType");
			localStorage.removeItem("restApiConsole.restApiConsoleAsync");
			localStorage.removeItem("restApiConsole.restApiConsoleCache");
			localStorage.removeItem("restApiConsole.restApiConsoleTimeout");
			localStorage.removeItem("restApiConsole.restApiConsoleUsername");
			localStorage.removeItem("restApiConsole.restApiConsolePassword");
			localStorage.removeItem("restApiConsole.restApiConsoleHeaderSerialize");
			localStorage.removeItem("restApiConsole.restApiConsoleDataBodyType");
			localStorage.removeItem("restApiConsole.restApiConsoleDataSerialize");
			localStorage.removeItem("restApiConsole.restApiConsoleDataBodyRaw");
			
			window.location.reload();
		}
		
	};
	
	$(document).on("click", ".restApiConsoleHeaderCheckbox", function (eventObject) {
		
		if ($(this).prop("checked")) {
			$(this).closest("td").find("input[name='restApiConsoleHeaderChecked']").val("headerChecked");
		} else {
			$(this).closest("td").find("input[name='restApiConsoleHeaderChecked']").val("");
		}
		
	});
	
	$(document).on("click", ".restApiConsoleHeaderPlus", function (eventObject) {
		
		$(this).closest("tr").after($(this).closest("tr").clone().wrapAll("<div/>").parent().html());
		
	});
	
	$(document).on("click", ".restApiConsoleHeaderMinus", function (eventObject) {
		
		if ($(this).parents().find("#restApiConsoleHeaderTable > tbody > tr").length == 1) {
			$("input[name='restApiConsoleHeaderKey']").val("");
			$("input[name='restApiConsoleHeaderValue']").val("");
		} else {
			$(this).closest("tr").remove();
		}
		
	});
	
	$(document).on("click", ".restApiConsoleDataBodyType", function (eventObject) {
		
		if ("form" == $(this).val()) {
			$(".restApiConsoleDataBodyForm").show();
			$(".restApiConsoleDataBodyRaw").hide();
		} else if ("raw" == $(this).val()) {
			$(".restApiConsoleDataBodyForm").hide();
			$(".restApiConsoleDataBodyRaw").show();
		} else {
			$(".restApiConsoleDataBodyForm").show();
			$(".restApiConsoleDataBodyRaw").hide();
		}
		
	});
	
	$(document).on("click", ".restApiConsoleDataCheckbox", function (eventObject) {
		
		if ($(this).prop("checked")) {
			$(this).closest("td").find("input[name='restApiConsoleDataChecked']").val("dataChecked");
		} else {
			$(this).closest("td").find("input[name='restApiConsoleDataChecked']").val("");
		}
		
	});
	
	$(document).on("click", ".restApiConsoleDataPlus", function (eventObject) {
		
		$(this).closest("tr").after($(this).closest("tr").clone().wrapAll("<div/>").parent().html());
		
	});
	
	$(document).on("click", ".restApiConsoleDataMinus", function (eventObject) {
		
		if ($(this).parents().find("#restApiConsoleDataTable > tbody > tr").length == 1) {
			$("input[name='restApiConsoleDataKey']").val("");
			$("input[name='restApiConsoleDataValue']").val("");
		} else {
			$(this).closest("tr").remove();
		}
		
	});
	
	$.getRestApiConsoleHeader = function (restApiConsoleHeaderSerialize) {
		
		var returnValue = "";
		
		var headerChecked = false;
		var headerKey = "";
		var headerValue = "";
		
		$.each(restApiConsoleHeaderSerialize.split("&"), function (indexInArray, value) {
			
			if (((indexInArray + 1) % 3) == 1) {
				if ("headerChecked" == $.trim(value.split("=")[1])) {
					headerChecked = true;
				} else {
					headerChecked = false;
				}
			}
			
			if (headerChecked) {
				if (((indexInArray + 1) % 3) == 2) {
					headerKey = $.trim(value.split("=")[1]);
				} else if (((indexInArray + 1) % 3) == 0) {
					headerValue = $.trim(value.split("=")[1]);
					
					if ("" != headerKey) {
						if ("" != returnValue) {
							returnValue += ",";
						}
						
						returnValue += "\"";
						returnValue += headerKey;
						returnValue += "\"";
						returnValue += ":";
						
						if ($.isNumeric(headerValue)) {
							returnValue += headerValue;
						} else {
							returnValue += "\"";
							returnValue += headerValue;
							returnValue += "\"";
						}
					}
				}
			}
			
		});
		
		return returnValue;
		
	};
	
	$.getRestApiConsoleData = function (restApiConsoleDataSerialize) {
		
		var returnValue = "";
		
		var dataChecked = false;
		var dataKey = "";
		var dataValue = "";
		
		$.each(restApiConsoleDataSerialize.split("&"), function (indexInArray, value) {
			
			if (((indexInArray + 1) % 3) == 1) {
				if ("dataChecked" == $.trim(value.split("=")[1])) {
					dataChecked = true;
				} else {
					dataChecked = false;
				}
			}
			
			if (dataChecked) {
				if (((indexInArray + 1) % 3) == 2) {
					dataKey = $.trim(value.split("=")[1]);
				} else if (((indexInArray + 1) % 3) == 0) {
					dataValue = $.trim(value.split("=")[1]);
					
					if ("" != dataKey) {
						if ("" != returnValue) {
							returnValue += "&";
						}
						
						returnValue += dataKey;
						returnValue += "=";
						returnValue += dataValue;
					}
				}
			}
			
		});
		
		return returnValue;
		
	};
	
	$.restApiConsole = function () {
		
		$.setRestApiConsoleLocalStorage();
		
		var restApiConsoleDataBodyType = $(".restApiConsoleDataBodyType").val();
		
		var ajaxData = "";
		
		if ("form" == restApiConsoleDataBodyType) {
			ajaxData = $.getRestApiConsoleData($("#restApiConsoleDataForm").serialize());
		} else if ("raw" == restApiConsoleDataBodyType) {
			ajaxData = $(".restApiConsoleDataBodyRaw").val();
		} else {
			ajaxData = $.getRestApiConsoleData($("#restApiConsoleDataForm").serialize());
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: $.trim($("#restApiConsoleUrl").val()),
			method: $("#restApiConsoleMethod").val(),
			type: $("#restApiConsoleMethod").val(),
			dataType: $("#restApiConsoleDataType").val(),
			contentType: $.trim($("#restApiConsoleContentType").val()),
			async: $("#restApiConsoleAsync").val(),
			cache: $("#restApiConsoleCache").val(),
			timeout : (("" == $.trim($("#restApiConsoleTimeout").val()).replace(/[^0-9]/g, "")) ? 0 : $.trim($("#restApiConsoleTimeout").val()).replace(/[^0-9]/g, "")),
			username: $.trim($("#restApiConsoleUsername").val()),
			password: $.trim($("#restApiConsolePassword").val()),
			headers: $.parseJSON('{' + $.getRestApiConsoleHeader($("#restApiConsoleHeaderForm").not(".restApiConsoleHeaderCheckbox").serialize()) + '}'),
			data: ajaxData,
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				var restApiConsoleResponseCode = "";
				
				var prismLanguage = "markup";
				
				if (data != null) {
					var jsBeautifyOption = {};
					
					jsBeautifyOption.indent_size = "1";
					jsBeautifyOption.indent_char = "\t";
						
					if ("xml" == $("#restApiConsoleDataType").val()) {
						if (window.ActiveXObject){
							restApiConsoleResponseCode = data.xml;
						} else{
							restApiConsoleResponseCode = (new XMLSerializer()).serializeToString(data);
						}
						
						restApiConsoleResponseCode = html_beautify(restApiConsoleResponseCode, jsBeautifyOption);
					} else if ("json" == $("#restApiConsoleDataType").val()) {
						restApiConsoleResponseCode = JSON.stringify(data, null, "\t");
						
						prismLanguage = "json";
					} else {
						restApiConsoleResponseCode = html_beautify(data, jsBeautifyOption);
					}
				}
				
				var restApiConsoleResponsePrismCode = "";
				restApiConsoleResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-" + prismLanguage + "\">";
				restApiConsoleResponsePrismCode += restApiConsoleResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
				restApiConsoleResponsePrismCode += "</code></pre>";
				
				$("#restApiConsoleResponseCode").val(restApiConsoleResponseCode);
				
				$("#restApiConsoleResponsePrismCode").html(restApiConsoleResponsePrismCode);
				
				Prism.highlightAll();
				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				
				var restApiConsoleResponseCode = "";
				
				restApiConsoleResponseCode += "readyState : ";
				restApiConsoleResponseCode += jqXHR.readyState;
				
				if ("0" == jqXHR.readyState) {
					restApiConsoleResponseCode += "-UNSENT";
				}
				
				if ("1" == jqXHR.readyState) {
					restApiConsoleResponseCode += "-OPENED";
				}
				
				if ("2" == jqXHR.readyState) {
					restApiConsoleResponseCode += "-HEADERS_RECEIVED";
				}
				
				if ("3" == jqXHR.readyState) {
					restApiConsoleResponseCode += "-LOADING";
				}
				
				if ("4" == jqXHR.readyState) {
					restApiConsoleResponseCode += "-DONE";
				}
				
				restApiConsoleResponseCode += "\n";
				restApiConsoleResponseCode += "status : ";
				restApiConsoleResponseCode += jqXHR.status;
				restApiConsoleResponseCode += "\n";
				restApiConsoleResponseCode += "statusText : ";
				restApiConsoleResponseCode += jqXHR.statusText;
				restApiConsoleResponseCode += "\n";
				restApiConsoleResponseCode += "textStatus : ";
				restApiConsoleResponseCode += textStatus;
				restApiConsoleResponseCode += "\n";
				restApiConsoleResponseCode += "errorThrown : ";
				restApiConsoleResponseCode += errorThrown;
				restApiConsoleResponseCode += "\n";
				restApiConsoleResponseCode += "responseText : ";
				restApiConsoleResponseCode += (jqXHR.responseText == null ? "" : jqXHR.responseText.replace(/\r/g, "").replace(/\n/g, ""));
				
				var restApiConsoleResponsePrismCode = "";
				restApiConsoleResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-markup\">";
				restApiConsoleResponsePrismCode += restApiConsoleResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
				restApiConsoleResponsePrismCode += "</code></pre>";
				
				$("#restApiConsoleResponseCode").val(restApiConsoleResponseCode);
				
				$("#restApiConsoleResponsePrismCode").html(restApiConsoleResponsePrismCode);
				
				Prism.highlightAll();
				
			},
			complete: function (jqXHR, textStatus) {
				
				var restApiConsoleResponse = "";
				
				restApiConsoleResponse += "(";
				restApiConsoleResponse += "readyState : ";
				restApiConsoleResponse += jqXHR.readyState;
				
				if ("0" == jqXHR.readyState) {
					restApiConsoleResponse += "-UNSENT";
				}
				
				if ("1" == jqXHR.readyState) {
					restApiConsoleResponse += "-OPENED";
				}
				
				if ("2" == jqXHR.readyState) {
					restApiConsoleResponse += "-HEADERS_RECEIVED";
				}
				
				if ("3" == jqXHR.readyState) {
					restApiConsoleResponse += "-LOADING";
				}
				
				if ("4" == jqXHR.readyState) {
					restApiConsoleResponse += "-DONE";
				}
				
				restApiConsoleResponse += ", ";
				restApiConsoleResponse += "status : ";
				restApiConsoleResponse += jqXHR.status;
				restApiConsoleResponse += ", ";
				restApiConsoleResponse += "statusText : ";
				restApiConsoleResponse += jqXHR.statusText;
				restApiConsoleResponse += ", ";
				restApiConsoleResponse += "textStatus : ";
				restApiConsoleResponse += textStatus;
				restApiConsoleResponse += ")";
				
				$("#restApiConsoleResponse").html(restApiConsoleResponse);
				
			}
			
		});
		
	};
	
	
});
