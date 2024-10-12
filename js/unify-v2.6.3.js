(function (global, factory) {
	'use strict';

	if ((typeof exports === 'object') && (typeof module !== 'undefined')) {
		module.exports = factory();
	} else if ((typeof define === 'function') && define.amd) {
		define(factory);
	} else if (typeof globalThis !== 'undefined') {
		global = globalThis;

		global.jokerx04 = factory();
	} else {
		global = self;
		
		global.jokerx04 = factory();
	}
})(this, (function () {
	'use strict';

	/**
	 * 라이브러리 디폴트 설정 정보이다.
	 */
	var defaults = {
		// Date 출력 패턴
		'dateFormat': 'yyyy-MM-dd E HH:mm:ss.SSS',

		// CORS Anywhere 서버 URL
		'corsAnywhereServerUrl': 'https://cors.jokerx04.com/'
	}

	/**
	 * 라이브러리 생성자 함수이다.
	 * Console 출력 여부에 따라 디폴트 설정 정보 및 함수 목록을 출력한다.
	 * jokerx04(options); 형태로 선언하며 options 값으로 디폴트 설정 정보를 변경 또는 추가한다.
	 * 
	 * jokerx04({ 'dateFormat': 'yyyy-MM-dd E HH:mm:ss.SSS' });
	 */
	var jokerx04 = function (options) {
		try {
			_.assign(defaults, options);
			
			console.info(`
%c     ██╗ ██████╗ ██╗  ██╗███████╗██████╗ ██╗  ██╗ ██████╗ ██╗  ██╗     █████╗ ██████╗ ██╗
%c     ██║██╔═══██╗██║ ██╔╝██╔════╝██╔══██╗╚██╗██╔╝██╔═████╗██║  ██║    ██╔══██╗██╔══██╗██║
%c     ██║██║   ██║█████╔╝ █████╗  ██████╔╝ ╚███╔╝ ██║██╔██║███████║    ███████║██████╔╝██║
%c██   ██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗ ██╔██╗ ████╔╝██║╚════██║    ██╔══██║██╔═══╝ ██║
%c╚█████╔╝╚██████╔╝██║  ██╗███████╗██║  ██║██╔╝ ██╗╚██████╔╝     ██║    ██║  ██║██║     ██║
%c ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝      ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝
					`, 'color: #084081', 'color: #0868AC', 'color: #2B8CBE', 'color: #4EB3D3', 'color: #7BCCC4', 'color: #A8DDB5');
			
			jokerx04.common.console('table', defaults);
			
			jokerx04.common.getFunctionStringArray(jokerx04);
		} catch(e) {
			if (e.message === '_ is not defined') {
				jokerx04.common.console('error', jokerx04.name + '는 Lodash(https://lodash.com) 라이브러리가 필요합니다.');
			} else {
				jokerx04.common.console('error', e);
			}
		}
	};
	
	/**
	 * 공통 관련 함수 패키지이다.
	 */
	jokerx04.common = {
		/**
		 * Console 에 문자열을 출력한다.
		 * 
		 * jokerx04.common.console('default', 'log'); // log
		 * jokerx04.common.console('log', null); // [2023-02-24 금요일 12:44:34.229][]
		 * jokerx04.common.console('trace', undefined); // [2023-02-24 금요일 12:44:34.229][]
		 * jokerx04.common.console('debug', 123); // [2023-02-24 금요일 12:44:34.229][123]
		 * jokerx04.common.console('info', '123'); // [2023-02-24 금요일 12:44:34.229][123]
		 * jokerx04.common.console('warn', false); // [2023-02-24 금요일 12:44:34.229][false]
		 * jokerx04.common.console('error', Symbol('123')); // [2023-02-24 금요일 12:44:34.229][Symbol(123)]
		 * jokerx04.common.console('clear'); // Console 삭제
		 * jokerx04.common.console('table', [ 1, 2, 3 ]); // 테이블 형태의 인덱스, 값 Console
		 * jokerx04.common.console('table', { "key1": 123, "key2": "value" }); // 테이블 형태의 키, 값 Console
		 * jokerx04.common.console('dir', window); // Window 객체 Console
		 * jokerx04.common.console('dirxml', document.querySelector('body')); // body Element 객체 Console
		 * jokerx04.common.console('count', 'count'); // count: 1
		 * jokerx04.common.console('count', 'count'); // count: 1
		 * 		jokerx04.common.console('count', 'count'); // count: 2
		 * 		jokerx04.common.console('countReset', 'count');
		 * 		jokerx04.common.console('count', 'count'); // count: 1
		 * jokerx04.common.console('log', 'group start');
		 * 		jokerx04.common.console('group', 'Level 1');
		 * 		jokerx04.common.console('log', 'Level 1-1');
		 * 		jokerx04.common.console('group', 'Level 2');
		 * 		jokerx04.common.console('trace', 'Level 2-1');
		 * 		jokerx04.common.console('info', 'Level 2-2');
		 * 		jokerx04.common.console('groupEnd');
		 * 		jokerx04.common.console('warn', 'Level 1-2');
		 * 		jokerx04.common.console('groupEnd');
		 * 		jokerx04.common.console('error', 'group end'); // 계층구조 Console
		 * jokerx04.common.console('time', 'time');
		 * 		jokerx04.common.console('timeLog', 'time'); // time: 0.006103515625 ms
		 * 		jokerx04.common.console('timeEnd', 'time'); // time: 0.112060546875 ms
		 */
		console: function (type, object) {
			if (jokerx04.boolean.isEquals(type, 'default')) {
				console.log(object);
			} else if ([ 'clear', 'groupEnd' ].includes(type)) {
				console[type]();
			} else if ([ 'dir', 'dirxml' ].includes(type)) {
				console[type](object);
			} else if ((jokerx04.boolean.isEquals(type, 'table')) && (jokerx04.array.isArrayObject(object) || jokerx04.common.isJSONObject(object))) {
				console[type](object);
			} else if ([ 'count', 'countReset', 'group', 'groupCollapsed', 'time', 'timeEnd', 'timeLog' ].includes(type)) {
				console[type](jokerx04.string.toString(object));
			} else if (jokerx04.boolean.isEquals(type, 'log')) {
				console.log('[%s][%s][%s]', type.toUpperCase(), jokerx04.date.getCurrentDate(), jokerx04.string.toString(object));
			} else if (jokerx04.boolean.isEquals(type.toUpperCase(), 'trace')) {
				console.trace('[%s][%s][%s]', type.toUpperCase(), jokerx04.date.getCurrentDate(), jokerx04.string.toString(object));
			} else if (jokerx04.boolean.isEquals(type.toUpperCase(), 'debug')) {
				console.debug('[%s][%s][%s]', type.toUpperCase(), jokerx04.date.getCurrentDate(), jokerx04.string.toString(object));
			} else if (jokerx04.boolean.isEquals(type.toUpperCase(), 'info')) {
				console.info('[%s][%s][%s]', type.toUpperCase(), jokerx04.date.getCurrentDate(), jokerx04.string.toString(object));
			} else if (jokerx04.boolean.isEquals(type, 'warn')) {
				console.warn('[%s][%s][%s]', type.toUpperCase(), jokerx04.date.getCurrentDate(), jokerx04.string.toString(object));
			} else if (jokerx04.boolean.isEquals(type, 'error')) {
				console.error('[%s][%s][%s]', type.toUpperCase(), jokerx04.date.getCurrentDate(), jokerx04.string.toString(object));
			}
		},

		/**
		 * 원시값(number, string, boolean, symbol) 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isPrimitive(null); // false
		 * jokerx04.common.isPrimitive(undefined); // false
		 * jokerx04.common.isPrimitive(123); // true
		 * jokerx04.common.isPrimitive('123'); // true
		 * jokerx04.common.isPrimitive(false); // true
		 * jokerx04.common.isPrimitive(Symbol('123')); // true
		 * jokerx04.common.isPrimitive([ 1, 2, 3 ]); // false
		 * jokerx04.common.isPrimitive({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.common.isPrimitive(window); // false
		 * jokerx04.common.isPrimitive(function () {}); // false
		 * jokerx04.common.isPrimitive(new Date()); // false
		 * jokerx04.common.isPrimitive(/\w+/); // false
		 * jokerx04.common.isPrimitive(document.querySelector('body')); // false
		 */
		isPrimitive: function (object) {
			return (jokerx04.boolean.isEquals(typeof object, 'number') ||
					jokerx04.boolean.isEquals(typeof object, 'string') ||
					jokerx04.boolean.isEquals(typeof object, 'boolean') ||
					jokerx04.boolean.isEquals(typeof object, 'symbol'));
		},

		/**
		 * Window 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isWindow(null); // false
		 * jokerx04.common.isWindow(undefined); // false
		 * jokerx04.common.isWindow(123); // false
		 * jokerx04.common.isWindow('123'); // false
		 * jokerx04.common.isWindow(false); // false
		 * jokerx04.common.isWindow(Symbol('123')); // false
		 * jokerx04.common.isWindow([ 1, 2, 3 ]); // false
		 * jokerx04.common.isWindow({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.common.isWindow(window); // true
		 * jokerx04.common.isWindow(function () {}); // false
		 * jokerx04.common.isWindow(new Date()); // false
		 * jokerx04.common.isWindow(/\w+/); // false
		 * jokerx04.common.isWindow(document.querySelector('body')); // false
		 */
		isWindow: function (object) {
			return (jokerx04.common.isDefined(object) &&
					jokerx04.boolean.isEquals(object, object.window));
		},

		/**
		 * Function 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isFunction(null); // false
		 * jokerx04.common.isFunction(undefined); // false
		 * jokerx04.common.isFunction(123); // false
		 * jokerx04.common.isFunction('123'); // false
		 * jokerx04.common.isFunction(false); // false
		 * jokerx04.common.isFunction(Symbol('123')); // false
		 * jokerx04.common.isFunction([ 1, 2, 3 ]); // false
		 * jokerx04.common.isFunction({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.common.isFunction(window); // false
		 * jokerx04.common.isFunction(function () {}); // true
		 * jokerx04.common.isFunction(new Date()); // false
		 * jokerx04.common.isFunction(/\w+/); // false
		 * jokerx04.common.isFunction(document.querySelector('body')); // false
		 */
		isFunction: function (object) {
			return jokerx04.boolean.isEquals(typeof object, 'function');
		},

		/**
		 * Object 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isObject(null); // false
		 * jokerx04.common.isObject(undefined); // false
		 * jokerx04.common.isObject(123); // false
		 * jokerx04.common.isObject('123'); // false
		 * jokerx04.common.isObject(false); // false
		 * jokerx04.common.isObject(Symbol('123')); // false
		 * jokerx04.common.isObject([ 1, 2, 3 ]); // true
		 * jokerx04.common.isObject({ "key1": 123, "key2": "value" }); // true
		 * jokerx04.common.isObject(window); // true
		 * jokerx04.common.isObject(function () {}); // false
		 * jokerx04.common.isObject(new Date()); // true
		 * jokerx04.common.isObject(/\w+/); // true
		 * jokerx04.common.isObject(document.querySelector('body')); // true
		 */
		isObject: function (object) {
			return jokerx04.boolean.isEquals(typeof object, 'object');
		},

		/**
		 * 객체 유형이 Object 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isPlainObject(null); // false
		 * jokerx04.common.isPlainObject(undefined); // false
		 * jokerx04.common.isPlainObject(123); // false
		 * jokerx04.common.isPlainObject('123'); // false
		 * jokerx04.common.isPlainObject(false); // false
		 * jokerx04.common.isPlainObject(Symbol('123')); // false
		 * jokerx04.common.isPlainObject([ 1, 2, 3 ]); // false
		 * jokerx04.common.isPlainObject({ "key1": 123, "key2": "value" }); // true
		 * jokerx04.common.isPlainObject(window); // false
		 * jokerx04.common.isPlainObject(function () {}); // false
		 * jokerx04.common.isPlainObject(new Date()); // false
		 * jokerx04.common.isPlainObject(/\w+/); // false
		 * jokerx04.common.isPlainObject(document.querySelector('body')); // false
		 */
		isPlainObject: function (object) {
			return jokerx04.boolean.isEquals(Object.prototype.toString.call(object), '[object Object]');
		},

		/**
		 * 객체 유형이 JSON 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isJSONObject(null); // false
		 * jokerx04.common.isJSONObject(undefined); // false
		 * jokerx04.common.isJSONObject(123); // false
		 * jokerx04.common.isJSONObject('123'); // false
		 * jokerx04.common.isJSONObject(false); // false
		 * jokerx04.common.isJSONObject(Symbol('123')); // false
		 * jokerx04.common.isJSONObject([ 1, 2, 3 ]); // false
		 * jokerx04.common.isJSONObject({ "key1": 123, "key2": "value" }); // true
		 * jokerx04.common.isJSONObject(window); // false
		 * jokerx04.common.isJSONObject(function () {}); // false
		 * jokerx04.common.isJSONObject(new Date()); // false
		 * jokerx04.common.isJSONObject(/\w+/); // false
		 * jokerx04.common.isJSONObject(document.querySelector('body')); // false
		 */
		isJSONObject: function (object) {
			return (jokerx04.common.isPlainObject(object) &&
					jokerx04.boolean.isEquals(object.toString, Object.prototype.toString));
		},

		/**
		 * 비어있는 객체인지 여부를 반환한다.
		 * 객체의 속성명이나 배열의 인덱스를 조회할 수 있을 경우 false 를 반환한다.
		 * 
		 * jokerx04.common.isEmptyObject(null); // true
		 * jokerx04.common.isEmptyObject(undefined); // true
		 * jokerx04.common.isEmptyObject(123); // true
		 * jokerx04.common.isEmptyObject('123'); // false
		 * jokerx04.common.isEmptyObject(false); // true
		 * jokerx04.common.isEmptyObject(Symbol('123')); // true
		 * jokerx04.common.isEmptyObject([ 1, 2, 3 ]); // false
		 * jokerx04.common.isEmptyObject([]); // true
		 * jokerx04.common.isEmptyObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.common.isEmptyObject({}); // true
		 * jokerx04.common.isEmptyObject(window); // false
		 * jokerx04.common.isEmptyObject(function () {}); // true
		 * jokerx04.common.isEmptyObject(new Date()); // true
		 * jokerx04.common.isEmptyObject(/\w+/); // true
		 * jokerx04.common.isEmptyObject(document.querySelector('body')); // true
		 */
		isEmptyObject: function (object) {
			for (var key in object) {
				return false;
			}

			return true;
		},

		/**
		 * 정의된 객체이며 값이 Null 이 아닌지 여부를 반환한다.
		 * 
		 * jokerx04.common.isDefined(null); // false
		 * jokerx04.common.isDefined(undefined); // false
		 * jokerx04.common.isDefined(123); // true
		 * jokerx04.common.isDefined('123'); // true
		 * jokerx04.common.isDefined(false); // true
		 * jokerx04.common.isDefined(Symbol('123')); // true
		 * jokerx04.common.isDefined([ 1, 2, 3 ]); // true
		 * jokerx04.common.isDefined([]); // true
		 * jokerx04.common.isDefined({ "key1": 123, "key2": "value" }); // true
		 * jokerx04.common.isDefined({}); // true
		 * jokerx04.common.isDefined(window); // true
		 * jokerx04.common.isDefined(function () {}); // true
		 * jokerx04.common.isDefined(new Date()); // true
		 * jokerx04.common.isDefined(/\w+/); // true
		 * jokerx04.common.isDefined(document.querySelector('body')); // true
		 */
		isDefined: function (object) {
			return (jokerx04.boolean.isNotEquals(object, undefined) &&
					jokerx04.boolean.isNotEquals(object, null));
		},

		/**
		 * 정의되지 않은 객체이거나 값이 Null 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isUndefined(null); // true
		 * jokerx04.common.isUndefined(undefined); // true
		 * jokerx04.common.isUndefined(123); // false
		 * jokerx04.common.isUndefined('123'); // false
		 * jokerx04.common.isUndefined(false); // false
		 * jokerx04.common.isUndefined(Symbol('123')); // false
		 * jokerx04.common.isUndefined([ 1, 2, 3 ]); // false
		 * jokerx04.common.isUndefined([]); // false
		 * jokerx04.common.isUndefined({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.common.isUndefined({}); // false
		 * jokerx04.common.isUndefined(window); // false
		 * jokerx04.common.isUndefined(function () {}); // false
		 * jokerx04.common.isUndefined(new Date()); // false
		 * jokerx04.common.isUndefined(/\w+/); // false
		 * jokerx04.common.isUndefined(document.querySelector('body')); // false
		 */
		isUndefined: function (object) {
			return !jokerx04.common.isDefined(object);
		},

		/**
		 * 모두 정의된 객체이며 값이 Null 이 아닌지 여부를 반환한다.
		 * 
		 * jokerx04.common.isAllDefined(null); // false
		 * jokerx04.common.isAllDefined(undefined); // false
		 * jokerx04.common.isAllDefined(null, undefined, 123); // false
		 * jokerx04.common.isAllDefined('123', false, Symbol('123')); // true
		 * jokerx04.common.isAllDefined([ 1, 2, 3 ], [], { "key1": 123, "key2": "value" }, {}); // true
		 * jokerx04.common.isAllDefined(window, function () {}, new Date(), /\w+/); // true
		 * jokerx04.common.isAllDefined(document.querySelector('body')); // true
		 */
		isAllDefined: function (...object) {
			for (var i = 0; i < object.length; i++) {
				if (jokerx04.common.isUndefined(object[i])) {
					return false;
				}
			}

			return true;
		},
		
		/**
		 * 모두 정의되지 않은 객체이거나 값이 Null 인지 여부를 반환한다.
		 * 
		 * jokerx04.common.isAllUndefined(null); // true
		 * jokerx04.common.isAllUndefined(undefined); // true
		 * jokerx04.common.isAllUndefined(null, undefined); // true
		 * jokerx04.common.isAllUndefined(null, undefined, 123, '123', false, Symbol('123')); // false
		 * jokerx04.common.isAllUndefined([ 1, 2, 3 ], [], { "key1": 123, "key2": "value" }, {}); // false
		 * jokerx04.common.isAllUndefined(window, function () {}, new Date(), /\w+/); // false
		 * jokerx04.common.isAllUndefined(document.querySelector('body')); // false
		 */
		isAllUndefined: function (...object) {
			for (var i = 0; i < object.length; i++) {
				if (jokerx04.common.isDefined(object[i])) {
					return false;
				}
			}

			return true;
		},

		/**
		 * JSON 객체 문자열을 파싱하여 JSON 객체로 반환한다.
		 * 
		 * jokerx04.common.parseJson(null); // null
		 * jokerx04.common.parseJson(undefined); // null
		 * jokerx04.common.parseJson(123); // null
		 * jokerx04.common.parseJson('123'); // null
		 * jokerx04.common.parseJson(false); // null
		 * jokerx04.common.parseJson(Symbol('123')); // null
		 * jokerx04.common.parseJson([ 1, 2, 3 ]); // [1,2,3]
		 * jokerx04.common.parseJson({ "key1": 123, "key2": "value" }); // {"key1": 123, "key2": "value"}
		 * jokerx04.common.parseJson(window); // null
		 * jokerx04.common.parseJson(function () {}); // null
		 * jokerx04.common.parseJson(new Date()); // null
		 * jokerx04.common.parseJson(/\w+/); // null
		 * jokerx04.common.parseJson(document.querySelector('body')); // null
		 */
		parseJson: function (object) {
			try {
				if (jokerx04.common.isUndefined(object)) {
					return null;
				}

				if (jokerx04.array.isArrayObject(object) || jokerx04.common.isJSONObject(object)) {
					return object;
				}
				
				return JSON.parse(jokerx04.string.toString(object));
			} catch (e) {
				return null;
			}
		},

		/**
		 * 객체의 속성 Function 들의 파라미터 포함 함수명을 배열로 반환한다.
		 * isCollapsed 파라미터가 true 일 경우 console.groupCollapsed(), false 일 경우 console.group() 형태로 함수명을 출력한다.
		 * 
		 * jokerx04.common.getFunctionStringArray(null); // []
		 * jokerx04.common.getFunctionStringArray(undefined); // []
		 * jokerx04.common.getFunctionStringArray(document.querySelector('body')); // []
		 * jokerx04.common.getFunctionStringArray(jokerx04); // jokerx04 객체의 속성 내 Function 들의 파라미터 포함 함수명의 배열
		 */
		getFunctionStringArray: function (object, isCollapsed) {
			if (jokerx04.common.isUndefined(object)) {
				return [];
			}

			var functionStringArray = function (object, objectName, returnValue) {
				var key;

				var parameterText;
				
				for (key in object) {
					if (jokerx04.common.isObject(object[key])) {
						groupCount++;

						if (isCollapsed) {
							jokerx04.common.console('groupCollapsed', objectName + '.' + key);
						} else {
							jokerx04.common.console('group', objectName + '.' + key);
						}
						
						if (jokerx04.boolean.isEquals(Object.keys(object[key]).length, 0)) {
							groupCount--;

							jokerx04.common.console('groupEnd');
						}

						if (Object.keys(object[key]).length > 0) {
							functionStringArray(object[key], objectName + '.' + key, returnValue);

							groupCount--;

							jokerx04.common.console('groupEnd');
						}
					}

					if (jokerx04.common.isFunction(object[key])) {
						parameterText = jokerx04.string.getSubstringBetween(object[key], '(', '{');

						parameterText = '(' + jokerx04.string.getTrim(parameterText) + ';';

						returnValue.push(objectName + '.' + key + parameterText);

						jokerx04.common.console('default', objectName + '.' + key + parameterText);
					}
				}

				return returnValue;
			};

			var returnValue;

			var objectName;

			var groupCount = 0;

			if (jokerx04.common.isUndefined(isCollapsed)) {
				isCollapsed = true;
			}

			if (jokerx04.common.isUndefined(objectName)) {
				objectName = object.name;

				groupCount++;

				jokerx04.common.console('group', objectName);
			}
			
			if (!jokerx04.array.isArrayObject(returnValue)) {
				returnValue = new Array();
			}

			functionStringArray(object, objectName, returnValue);

			for (var i = 0; i < groupCount; i++) {
				jokerx04.common.console('groupEnd');
			}

			return returnValue;
		}

	};

	/**
	 * 논리 관련 함수 패키지이다.
	 */
	jokerx04.boolean = {
		/**
		 * 객체 유형이 Boolean 인지 여부를 반환한다.
		 * 
		 * jokerx04.boolean.isBooleanObject(null); // false
		 * jokerx04.boolean.isBooleanObject(undefined); // false
		 * jokerx04.boolean.isBooleanObject(1); // false
		 * jokerx04.boolean.isBooleanObject('123'); // false
		 * jokerx04.boolean.isBooleanObject(true); // false
		 * jokerx04.boolean.isBooleanObject(Symbol('123')); // false
		 * jokerx04.boolean.isBooleanObject([ 1, 2, 3 ]); // false
		 * jokerx04.boolean.isBooleanObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.boolean.isBooleanObject(window); // false
		 * jokerx04.boolean.isBooleanObject(function () {}); // false
		 * jokerx04.boolean.isBooleanObject(new Date()); // false
		 * jokerx04.boolean.isBooleanObject(/\w+/); // false
		 * jokerx04.boolean.isBooleanObject(document.querySelector('body')); // false
		 */
		isBooleanObject: function (object) {
			return (Object.prototype.toString.call(object) === '[object Boolean]');
		},

		/**
		 * 두 객체가 동일한지 여부를 반환한다.
		 * isExactly 파라미터가 true 일 경우 정확히 동일한지 여부를 판단하고, false 일 경우 배열과 JSON 객체에서 순서와 무관하게 포함 여부를 판단한다.
		 * 
		 * jokerx04.boolean.isEquals(null, null); // true
		 * jokerx04.boolean.isEquals(undefined, null); // false
		 * jokerx04.boolean.isEquals(1, 1); // true
		 * jokerx04.boolean.isEquals('123', '12'); // false
		 * jokerx04.boolean.isEquals(true, true); // true
		 * jokerx04.boolean.isEquals(Symbol('123'), Symbol('123')); // false
		 * jokerx04.boolean.isEquals([ 1, 2, 3 ], [ 3, 2, 1 ], true); // false
		 * jokerx04.boolean.isEquals([ 1, 2, 3 ], [ 3, 2, 1 ], false); // true
		 * jokerx04.boolean.isEquals({ "key1": 123, "key2": "value" }, { "key2": "value", "key1": 123 }, true); // false
		 * jokerx04.boolean.isEquals({ "key1": 123, "key2": "value" }, { "key2": "value", "key1": 123 }, false); // true
		 * jokerx04.boolean.isEquals(window, window); // true
		 * jokerx04.boolean.isEquals(function () {}, function () {}); // false
		 * jokerx04.boolean.isEquals(new Date(), new Date()); // false
		 * jokerx04.boolean.isEquals(/\w+/, /\w+/); // false
		 * jokerx04.boolean.isEquals(document.querySelector('body'), document.querySelector('body')); // true
		 */
		isEquals: function (object1, object2, isExactly) {
			if ((isExactly === undefined) ||
					(isExactly === null) ||
					(Object.prototype.toString.call(isExactly) !== '[object Boolean]')) {
				
				isExactly = true;
			}

			var equals = function (object1, object2) {
				if ((Object.prototype.toString.call(object1) === '[object Array]') && (Object.prototype.toString.call(object2) === '[object Array]')) {
					if (isExactly) {
						if (JSON.stringify(object1) !== JSON.stringify(object2)) {
							return false;
						}
					} else {
						if (JSON.stringify(object1.slice().sort()) !== JSON.stringify(object2.slice().sort())) {
							return false;
						}
					}
				} else if ((Object.prototype.toString.call(object1) === '[object Object]') &&
						(object1.toString === Object.prototype.toString) &&
						(Object.prototype.toString.call(object2) === '[object Object]') &&
						(object2.toString === Object.prototype.toString)) {
					
					if (Object.keys(object1).length !== Object.keys(object2).length) {
						return false;
					}

					if (isExactly) {
						if (JSON.stringify(object1) !== JSON.stringify(object2)) {
							return false;
						}
					} else {
						for (var key in object1) {
							if (equals(object1[key], object2[key]) === false) {
								return false;
							}
						}
					}
				} else if ((object1 instanceof HTMLElement) && (object2 instanceof HTMLElement)) {
					if (object1.outerHTML !== object2.outerHTML) {
						return false;
					}
				} else {
					if (object1 !== object2) {
						return false;
					}
				}
			};

			if (equals(object1, object2) === false) {
				return false;
			}

			return true;
		},

		/**
		 * 두 객체가 동일하지 않은지 여부를 반환한다.
		 * isExactly 파라미터가 true 일 경우 정확히 동일한지 여부를 판단하고, false 일 경우 배열과 JSON 객체에서 순서와 무관하게 포함 여부를 판단한다.
		 * 
		 * jokerx04.boolean.isNotEquals(null, null); // false
		 * jokerx04.boolean.isNotEquals(undefined, null); // true
		 * jokerx04.boolean.isNotEquals(1, 1); // false
		 * jokerx04.boolean.isNotEquals('123', '12'); // true
		 * jokerx04.boolean.isNotEquals(true, true); // false
		 * jokerx04.boolean.isNotEquals(Symbol('123'), Symbol('123')); // true
		 * jokerx04.boolean.isNotEquals([ 1, 2, 3 ], [ 3, 2, 1 ], true); // true
		 * jokerx04.boolean.isNotEquals([ 1, 2, 3 ], [ 3, 2, 1 ], false); // false
		 * jokerx04.boolean.isNotEquals({ "key1": 123, "key2": "value" }, { "key2": "value", "key1": 123 }, true); // true
		 * jokerx04.boolean.isNotEquals({ "key1": 123, "key2": "value" }, { "key2": "value", "key1": 123 }, false); // false
		 * jokerx04.boolean.isNotEquals(window, window); // false
		 * jokerx04.boolean.isNotEquals(function () {}, function () {}); // true
		 * jokerx04.boolean.isNotEquals(new Date(), new Date()); // true
		 * jokerx04.boolean.isNotEquals(/\w+/, /\w+/); // true
		 * jokerx04.boolean.isNotEquals(document.querySelector('body'), document.querySelector('body')); // false
		 */
		isNotEquals: function (object1, object2, isExactly) {
			return !jokerx04.boolean.isEquals(object1, object2, isExactly);
		}
		
	};
	
	/**
	 * 숫자 관련 함수 패키지이다.
	 */
	jokerx04.number = {
		/**
		 * 객체 유형이 Number 인지 여부를 반환한다.
		 * 
		 * jokerx04.number.isNumberObject(null); // false
		 * jokerx04.number.isNumberObject(undefined); // false
		 * jokerx04.number.isNumberObject(123); // true
		 * jokerx04.number.isNumberObject('123'); // false
		 * jokerx04.number.isNumberObject(false); // false
		 * jokerx04.number.isNumberObject(Symbol('123')); // false
		 * jokerx04.number.isNumberObject([ 1, 2, 3 ]); // false
		 * jokerx04.number.isNumberObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.number.isNumberObject(window); // false
		 * jokerx04.number.isNumberObject(function () {}); // false
		 * jokerx04.number.isNumberObject(new Date()); // false
		 * jokerx04.number.isNumberObject(/\w+/); // false
		 * jokerx04.number.isNumberObject(document.querySelector('body')); // false
		 */
		isNumberObject: function (object) {
			return jokerx04.boolean.isEquals(Object.prototype.toString.call(object), '[object Number]');
		},

		/**
		 * 숫자 또는 문자열 숫자인지 여부를 반환한다.
		 * 
		 * jokerx04.number.isNumeric(null); // false
		 * jokerx04.number.isNumeric(undefined); // false
		 * jokerx04.number.isNumeric(123); // true
		 * jokerx04.number.isNumeric('123'); // true
		 * jokerx04.number.isNumeric('123,456,789'); // false
		 * jokerx04.number.isNumeric('123,456,789원'); // false
		 * jokerx04.number.isNumeric('123,456.789㎡'); // false
		 * jokerx04.number.isNumeric(false); // false
		 * jokerx04.number.isNumeric(Symbol('123')); // false
		 * jokerx04.number.isNumeric([ 1, 2, 3 ]); // false
		 * jokerx04.number.isNumeric({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.number.isNumeric(window); // false
		 * jokerx04.number.isNumeric(function () {}); // false
		 * jokerx04.number.isNumeric(new Date()); // false
		 * jokerx04.number.isNumeric(/\w+/); // false
		 * jokerx04.number.isNumeric(document.querySelector('body')); // false
		 */
		isNumeric: function (object) {
			return ((jokerx04.number.isNumberObject(object) || jokerx04.string.isStringObject(object)) &&
					!isNaN(object - parseFloat(jokerx04.string.toString(object))));
		},

		/**
		 * 숫자 또는 문자열 숫자에서 숫자만 추출하여 반환한다.
		 * 숫자 또는 문자열 숫자가 아니거나 추출된 숫자가 없을 경우 NaN 을 반환한다.
		 * 
		 * jokerx04.number.toNumber(null); // NaN
		 * jokerx04.number.toNumber(undefined); // NaN
		 * jokerx04.number.toNumber(123); // 123
		 * jokerx04.number.toNumber('123'); // 123
		 * jokerx04.number.toNumber('123,456,789'); // 123456789
		 * jokerx04.number.toNumber('123,456,789원'); // 123456789
		 * jokerx04.number.toNumber('123,456.789㎡'); // 123456.789
		 * jokerx04.number.toNumber(false); // NaN
		 * jokerx04.number.toNumber(Symbol('123')); // NaN
		 * jokerx04.number.toNumber([ 1, 2, 3 ]); // NaN
		 * jokerx04.number.toNumber({ "key1": 123, "key2": "value" }); // NaN
		 * jokerx04.number.toNumber(window); // NaN
		 * jokerx04.number.toNumber(function () {}); // NaN
		 * jokerx04.number.toNumber(new Date()); // NaN
		 * jokerx04.number.toNumber(/\w+/); // NaN
		 * jokerx04.number.toNumber(document.querySelector('body')); // NaN
		 */
		toNumber: function (object) {
			if (!jokerx04.number.isNumberObject(object) && !jokerx04.string.isStringObject(object)) {
				return NaN;
			}

			var returnValue = parseFloat(jokerx04.string.toString(object).replace(/[^0-9.]/g, ''));

			if (isNaN(returnValue)) {
				return NaN;
			}

			return returnValue;
		}
		
	};

	/**
	 * 배열 관련 함수 패키지이다.
	 */
	jokerx04.array = {
		/**
		 * 객체 유형이 Array 인지 여부를 반환한다.
		 * 
		 * jokerx04.array.isArrayObject(null); // false
		 * jokerx04.array.isArrayObject(undefined); // false
		 * jokerx04.array.isArrayObject(123); // false
		 * jokerx04.array.isArrayObject('123'); // false
		 * jokerx04.array.isArrayObject(false); // false
		 * jokerx04.array.isArrayObject(Symbol('123')); // false
		 * jokerx04.array.isArrayObject([ 1, 2, 3 ]); // true
		 * jokerx04.array.isArrayObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.array.isArrayObject(window); // false
		 * jokerx04.array.isArrayObject(function () {}); // false
		 * jokerx04.array.isArrayObject(new Date()); // false
		 * jokerx04.array.isArrayObject(/\w+/); // false
		 * jokerx04.array.isArrayObject(document.querySelector('body')); // false
		 */
		isArrayObject: function (object) {
			if (!Array.isArray) {
				return jokerx04.boolean.isEquals(Object.prototype.toString.call(object), '[object Array]');
			}

			return Array.isArray(object);
		},

	},

	/**
	 * 문자열 관련 함수 패키지이다.
	 */
	jokerx04.string = {
		/**
		 * 객체 유형이 String 인지 여부를 반환한다.
		 * 
		 * jokerx04.string.isStringObject(null); // false
		 * jokerx04.string.isStringObject(undefined); // false
		 * jokerx04.string.isStringObject(123); // false
		 * jokerx04.string.isStringObject('123'); // true
		 * jokerx04.string.isStringObject(false); // false
		 * jokerx04.string.isStringObject(Symbol('123')); // false
		 * jokerx04.string.isStringObject([ 1, 2, 3 ]); // false
		 * jokerx04.string.isStringObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.string.isStringObject(window); // false
		 * jokerx04.string.isStringObject(function () {}); // false
		 * jokerx04.string.isStringObject(new Date()); // false
		 * jokerx04.string.isStringObject(/\w+/); // false
		 * jokerx04.string.isStringObject(document.querySelector('body')); // false
		 */
		isStringObject: function (object) {
			return jokerx04.boolean.isEquals(Object.prototype.toString.call(object), '[object String]');
		},

		/**
		 * 객체를 문자열로 변환하여 반환한다.
		 * 
		 * jokerx04.string.toString(null); // ''
		 * jokerx04.string.toString(undefined); // ''
		 * jokerx04.string.toString(123); // '123'
		 * jokerx04.string.toString('123'); // '123'
		 * jokerx04.string.toString(false); // 'false'
		 * jokerx04.string.toString(Symbol('123')); // 'Symbol(123)'
		 * jokerx04.string.toString([ 1, 2, 3 ]); // '[1,2,3]'
		 * jokerx04.string.toString({ "key1": 123, "key2": "value" }); // '{"key1":123,"key2":"value"}'
		 * jokerx04.string.toString(window); // '[object Window]'
		 * jokerx04.string.toString(function () {}); // 'function () {}'
		 * jokerx04.string.toString(new Date()); // 'Fri Feb 24 2023 11:08:26 GMT+0900 (한국 표준시)'
		 * jokerx04.string.toString(/\w+/); // '/\\w+/'
		 * jokerx04.string.toString(document.querySelector('body')); // [object HTMLBodyElement]
		 */
		toString: function (object) {
			if (jokerx04.common.isUndefined(object)) {
				return '';
			}
			
			if (jokerx04.array.isArrayObject(object) || jokerx04.common.isJSONObject(object)) {
				return JSON.stringify(object);
			}

			return String(object);
		},

		/**
		 * 객체를 문자열로 변환하여 빈 문자열인지 여부를 반환한다.
		 * 
		 * jokerx04.string.isEmpty(null); // true
		 * jokerx04.string.isEmpty(undefined); // true
		 * jokerx04.string.isEmpty(123); // false
		 * jokerx04.string.isEmpty('    '); // false
		 * jokerx04.string.isEmpty('123'); // false
		 * jokerx04.string.isEmpty('  123  '); // false
		 * jokerx04.string.isEmpty(false); // false
		 * jokerx04.string.isEmpty(Symbol('123')); // false
		 * jokerx04.string.isEmpty([ 1, 2, 3 ]); // false
		 * jokerx04.string.isEmpty({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.string.isEmpty(window); // false
		 * jokerx04.string.isEmpty(function () {}); // false
		 * jokerx04.string.isEmpty(new Date()); // false
		 * jokerx04.string.isEmpty(/\w+/); // false
		 * jokerx04.string.isEmpty(document.querySelector('body')); // true
		 */
		isEmpty: function (object) {
			return (jokerx04.common.isUndefined(object) || (jokerx04.boolean.isEquals(jokerx04.string.toString(object).length, 0)));
		},

		/**
		 * 객체를 문자열로 변환하여 빈 문자열 또는 공백 문자열인지 여부를 반환한다.
		 * 
		 * jokerx04.string.isBlank(null); // true
		 * jokerx04.string.isBlank(undefined); // true
		 * jokerx04.string.isBlank(123); // false
		 * jokerx04.string.isBlank('    '); // true
		 * jokerx04.string.isBlank('123'); // false
		 * jokerx04.string.isBlank('  123  '); // false
		 * jokerx04.string.isBlank(false); // false
		 * jokerx04.string.isBlank(Symbol('123')); // false
		 * jokerx04.string.isBlank([ 1, 2, 3 ]); // false
		 * jokerx04.string.isBlank({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.string.isBlank(window); // false
		 * jokerx04.string.isBlank(function () {}); // false
		 * jokerx04.string.isBlank(new Date()); // false
		 * jokerx04.string.isBlank(/\w+/); // false
		 * jokerx04.string.isBlank(document.querySelector('body')); // true
		 */
		isBlank: function (object) {
			return (jokerx04.common.isUndefined(object) || (jokerx04.boolean.isEquals(jokerx04.string.getTrim(object).length, 0)));
		},

		/**
		 * 객체에 검색 문자열이 포함되어 있는지 여부를 반환한다.
		 * 
		 * jokerx04.string.isContains(null, null); // false
		 * jokerx04.string.isContains(undefined, undefined); // false
		 * jokerx04.string.isContains(123, 2); // true
		 * jokerx04.string.isContains('123', 3); // true
		 * jokerx04.string.isContains(false, ''); // true
		 * jokerx04.string.isContains(Symbol('123'), 'ym'); // true
		 * jokerx04.string.isContains([ 1, 2, 3 ], '1,2'); // true
		 * jokerx04.string.isContains({ "key1": 123, "key2": "value" }, 'key'); // true
		 * jokerx04.string.isContains(window, 'window'); // false
		 * jokerx04.string.isContains(function () {}, 'function'); // true
		 * jokerx04.string.isContains(new Date(), 'ate'); // false
		 * jokerx04.string.isContains(/\w+/, '/'); // true
		 * jokerx04.string.isContains(document.querySelector('body'), '<'); // false
		 */
		isContains: function (object, search) {
			return (jokerx04.common.isDefined(object) && (jokerx04.boolean.isNotEquals(jokerx04.string.toString(object).indexOf(jokerx04.string.toString(search)), -1)));
		},
		
		/**
		 * 객체에 검색 문자열들 어떤것이라도 포함되어 있는지 여부를 반환한다.
		 * 
		 * jokerx04.string.isContainsAny(null, null, undefined); // false
		 * jokerx04.string.isContainsAny(undefined, undefined, null); // false
		 * jokerx04.string.isContainsAny(123, 2, 4); // true
		 * jokerx04.string.isContainsAny('123', 4, 5); // false
		 * jokerx04.string.isContainsAny(false, 'a', 'z'); // true
		 * jokerx04.string.isContainsAny(Symbol('123'), 'ym', '1', '2', '3'); // true
		 * jokerx04.string.isContainsAny([ 1, 2, 3 ], '1', '2'); // true
		 * jokerx04.string.isContainsAny({ "key1": 123, "key2": "value" }, 'key'); // true
		 * jokerx04.string.isContainsAny(window, 'window'); // false
		 * jokerx04.string.isContainsAny(function () {}, 'fun', '('); // true
		 * jokerx04.string.isContainsAny(new Date(), 'a', 'n'); // false
		 * jokerx04.string.isContainsAny(/\w+/, '/', '+'); // true
		 * jokerx04.string.isContainsAny(document.querySelector('body'), '<'); // false
		 */
		isContainsAny: function (object, ...search) {
			for (var i = 0; i < search.length; i++) {
				if (jokerx04.common.isDefined(object) && (jokerx04.boolean.isNotEquals(jokerx04.string.toString(object).indexOf(jokerx04.string.toString(search[i])), -1))) {
					return true;
				}
			}

			return false;
		},

		/**
		 * 객체를 문자열로 변환하여 빈 문자열일 경우 디폴트 문자열로 반환한다.
		 * 빈 문자열이 아닐 경우 객체 문자열을 반환한다.
		 * 
		 * jokerx04.string.getDefaultIfEmpty(null, 'null'); // 'null'
		 * jokerx04.string.getDefaultIfEmpty(undefined, 'undefined'); // 'undefined'
		 * jokerx04.string.getDefaultIfEmpty(123, 456); // '123'
		 * jokerx04.string.getDefaultIfEmpty('    ', '123'); // '    '
		 * jokerx04.string.getDefaultIfEmpty('123', '456'); // '123'
		 * jokerx04.string.getDefaultIfEmpty(false, true); // 'false'
		 * jokerx04.string.getDefaultIfEmpty(Symbol('123'), 'Symbol'); // 'Symbol(123)'
		 * jokerx04.string.getDefaultIfEmpty([ 1, 2, 3 ], 'Array'); // '[1,2,3]'
		 * jokerx04.string.getDefaultIfEmpty({ "key1": 123, "key2": "value" }, 'JSON'); // '{"key1":123,"key2":"value"}'
		 * jokerx04.string.getDefaultIfEmpty(window, 'Object'); // '[object Window]'
		 * jokerx04.string.getDefaultIfEmpty(function () {}, 'Object'); // 'function () {}'
		 * jokerx04.string.getDefaultIfEmpty(new Date(), 'Object'); // 'Tue Apr 18 2023 11:34:53 GMT+0900 (한국 표준시)'
		 * jokerx04.string.getDefaultIfEmpty(/\w+/, 'Object'); // '/\\w+/'
		 * jokerx04.string.getDefaultIfEmpty(document.querySelector('body'), 'Object'); // '[object HTMLBodyElement]'
		 */
		getDefaultIfEmpty: function (object, defaultString) {
			return (jokerx04.string.isEmpty(object) ? jokerx04.string.toString(defaultString) : jokerx04.string.toString(object));
		},

		/**
		 * 객체를 문자열로 변환하여 빈 문자열 또는 공백 문자열일 경우 디폴트 문자열로 반환한다.
		 * 빈 문자열 또는 공백 문자열이 아닐 경우 객체 문자열을 반환한다.
		 * 
		 * jokerx04.string.getDefaultIfBlank(null, 'null'); // 'null'
		 * jokerx04.string.getDefaultIfBlank(undefined, 'undefined'); // 'undefined'
		 * jokerx04.string.getDefaultIfBlank(123, 456); // '123'
		 * jokerx04.string.getDefaultIfBlank('    ', '123'); // '123'
		 * jokerx04.string.getDefaultIfBlank('123  ', '456'); // '123  '
		 * jokerx04.string.getDefaultIfBlank('  123  ', '456'); // '  123  '
		 * jokerx04.string.getDefaultIfBlank(false, true); // 'false'
		 * jokerx04.string.getDefaultIfBlank(Symbol('123'), 'Symbol'); // 'Symbol(123)'
		 * jokerx04.string.getDefaultIfBlank([ 1, 2, 3 ], 'Array'); // '[1,2,3]'
		 * jokerx04.string.getDefaultIfBlank({ "key1": 123, "key2": "value" }, 'JSON'); // '{"key1":123,"key2":"value"}'
		 * jokerx04.string.getDefaultIfBlank(window, 'Object'); // '[object Window]'
		 * jokerx04.string.getDefaultIfBlank(function () {}, 'Object'); // 'function () {}'
		 * jokerx04.string.getDefaultIfBlank(new Date(), 'Object'); // 'Tue Apr 18 2023 11:34:53 GMT+0900 (한국 표준시)'
		 * jokerx04.string.getDefaultIfBlank(/\w+/, 'Object'); // '/\\w+/'
		 * jokerx04.string.getDefaultIfBlank(document.querySelector('body'), 'Object'); // '[object HTMLBodyElement]'
		 */
		getDefaultIfBlank: function (object, defaultString) {
			return (jokerx04.string.isBlank(object) ? jokerx04.string.toString(defaultString) : jokerx04.string.toString(object));
		},

		/**
		 * 객체의 좌우 공백을 제거 후 반환한다.
		 * 
		 * jokerx04.string.getTrim(null); // ''
		 * jokerx04.string.getTrim(undefined); // ''
		 * jokerx04.string.getTrim(123); // '123'
		 * jokerx04.string.getTrim('  123'); // '123'
		 * jokerx04.string.getTrim('123  '); // '123'
		 * jokerx04.string.getTrim('  1 2 3  '); // '1 2 3'
		 * jokerx04.string.getTrim(false); // 'false'
		 * jokerx04.string.getTrim(Symbol('123')); // 'Symbol(123)'
		 * jokerx04.string.getTrim([ 1, 2, 3 ]); // '[1,2,3]'
		 * jokerx04.string.getTrim({ "key1": 123, "key2": "value" }); // '{"key1":123,"key2":"value"}'
		 * jokerx04.string.getTrim(window); // '[object Window]'
		 * jokerx04.string.getTrim(function () {}); // 'function () {}'
		 * jokerx04.string.getTrim(new Date()); // 'Fri Feb 24 2023 11:08:26 GMT+0900 (한국 표준시)'
		 * jokerx04.string.getTrim(/\w+/); // '/\\w+/'
		 * jokerx04.string.getTrim(document.querySelector('body')); // [object HTMLBodyElement]
		 */
		getTrim: function (object) {
			return jokerx04.string.toString(object).replace(/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, '$1');
		},

		/**
		 * 객체를 시작/종료 문자열로 검색하여 범위 내 문자열만 추출하여 반환한다.
		 * 
		 * jokerx04.string.getSubstringBetween(null, '', ''); // ''
		 * jokerx04.string.getSubstringBetween(undefined, '', ''); // ''
		 * jokerx04.string.getSubstringBetween(123, null, '3'); // '12'
		 * jokerx04.string.getSubstringBetween('123', '2', undefined); // '3'
		 * jokerx04.string.getSubstringBetween(false, 'a', 's'); // 'l'
		 * jokerx04.string.getSubstringBetween(Symbol('123'), 'y', '2'); // 'mbol(1'
		 * jokerx04.string.getSubstringBetween([ 1, 2, 3 ], '[', ','); // '1'
		 * jokerx04.string.getSubstringBetween({ "key1": 123, "key2": "value" }, 'key', 'key'); // '1":123,"'
		 * jokerx04.string.getSubstringBetween(window, '', 'W'); // '[object '
		 * jokerx04.string.getSubstringBetween(function () {}, '(', ''); // ') {}'
		 * jokerx04.string.getSubstringBetween(new Date(), '(', ')'); // '한국 표준시'
		 * jokerx04.string.getSubstringBetween(/\w+/, '/', '/'); // '\\w+'
		 * jokerx04.string.getSubstringBetween(document.querySelector('body'), '[', ']'); // object HTMLBodyElement
		 */
		getSubstringBetween(object, open, close) {
			var stringObject = jokerx04.string.toString(object);
			var stringOpen = jokerx04.string.toString(open);
			var stringClose = jokerx04.string.toString(close);

			var startIndex = stringObject.indexOf(stringOpen);

			if (jokerx04.boolean.isEquals(startIndex, -1)) {
				startIndex = 0;
			} else {
				startIndex = stringObject.indexOf(stringOpen) + stringOpen.length;
			}

			var endIndex = stringObject.indexOf(stringClose, startIndex);

			if ((jokerx04.boolean.isEquals(endIndex, -1)) || (jokerx04.boolean.isEquals(startIndex, endIndex))) {
				endIndex = stringObject.length;
			}

			return stringObject.substring(startIndex, endIndex);
		},

		/**
		 * 객체의 HTML 특수 문자를 이스케이프 문자로 치환하여 반환한다.
		 * 
		 * jokerx04.string.getEscapeHtml(null); // ''
		 * jokerx04.string.getEscapeHtml(undefined); // ''
		 * jokerx04.string.getEscapeHtml(123); // '123'
		 * jokerx04.string.getEscapeHtml('123'); // '123'
		 * jokerx04.string.getEscapeHtml(false); // 'false'
		 * jokerx04.string.getEscapeHtml(Symbol('123')); // 'Symbol(123)'
		 * jokerx04.string.getEscapeHtml([ 1, 2, 3 ]); // '[1,2,3]'
		 * jokerx04.string.getEscapeHtml({ "key1": 123, "key2": "value" }); // '{&quot;key1&quot;:123,&quot;key2&quot;:&quot;value&quot;}'
		 * jokerx04.string.getEscapeHtml(window); // '[object Window]'
		 * jokerx04.string.getEscapeHtml(function () {}); // 'function () {}'
		 * jokerx04.string.getEscapeHtml(new Date()); // 'Fri Feb 24 2023 11:08:26 GMT+0900 (한국 표준시)'
		 * jokerx04.string.getEscapeHtml(/\w+/); // '/\\w+/'
		 * jokerx04.string.getEscapeHtml('<>&\"\'\n\t'); // '&lt;&gt;&amp;&quot;&#39;&#10;&#9;'
		 * jokerx04.string.getEscapeHtml('<html><body onload="alert(\'jokerx04\');"></body></html>'); // '&lt;html&gt;&lt;body onload=&quot;alert(&#39;jokerx04&#39;);&quot;&gt;&lt;/body&gt;&lt;/html&gt;'
		 */
		getEscapeHtml: function (object) {
			return jokerx04.string.toString(object).replace(/(<|>|&|"|'|\n|\t|)/g, function ($1) {

						switch ($1) {
							case '<': return '&lt;';
							case '>': return '&gt;';
							case '&': return '&amp;';
							case '\"': return '&quot;';
							case '\'': return '&#39;';
							case '\n': return '&#10;';
							case '\t': return '&#9;';
							default: return $1;
						}

					});
		}
	};

	/**
	 * 일자 관련 함수 패키지이다.
	 */
	jokerx04.date = {
		/**
		 * 객체 유형이 Date 인지 여부를 반환한다.
		 * 
		 * jokerx04.date.isDateObject(null); // false
		 * jokerx04.date.isDateObject(undefined); // false
		 * jokerx04.date.isDateObject(123); // false
		 * jokerx04.date.isDateObject('123'); // true
		 * jokerx04.date.isDateObject(false); // false
		 * jokerx04.date.isDateObject(Symbol('123')); // false
		 * jokerx04.date.isDateObject([ 1, 2, 3 ]); // false
		 * jokerx04.date.isDateObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.date.isDateObject(window); // false
		 * jokerx04.date.isDateObject(function () {}); // false
		 * jokerx04.date.isDateObject(new Date()); // true
		 * jokerx04.date.isDateObject(/\w+/); // false
		 * jokerx04.date.isDateObject(document.querySelector('body')); // false
		 */
		isDateObject: function (object) {
			return jokerx04.boolean.isEquals(Object.prototype.toString.call(object), '[object Date]');
		},

		/**
		 * Date 객체를 출력 패턴 형태로 치환하여 반환한다.
		 * dateFormat 를 지정하지 않을 경우 기본 출력 포맷은 'yyyy-MM-dd E HH:mm:ss.SSS' 이며, jokerx04(options); 의 options 에서 설정할 수 있다.
		 * dateFormat 에서 yyyy 는 년도 4자리, MM 은 월 2자리, dd 는 일 2자리, E 는 요일, HH 는 시 2자리, mm 는 분 2자리, ss 는 초 2자리, SSS 는 밀리초 3자리를 표현하는 패턴 문자열이다.
		 * 
		 * jokerx04({
		 * 
		 * 	dateFormat: Date 출력 패턴 문자열
		 * 
		 * });
		 * 
		 * jokerx04.date.getFormatDate(new Date()); // '2023-02-24 금요일 18:32:08.263'
		 * jokerx04.date.getFormatDate(null, 'yyyy-MM-dd E HH:mm:ss.SSS'); // ''
		 * jokerx04.date.getFormatDate(undefined, 'yyyy-MM-dd E HH:mm:ss.SSS'); // ''
		 * jokerx04.date.getFormatDate('123', 'yyyy-MM-dd E HH:mm:ss.SSS'); // '123'
		 * jokerx04.date.getFormatDate(new Date(), 'yyyy-MM-dd'); // '2023-02-24'
		 * jokerx04.date.getFormatDate(new Date(), 'HH:mm:ss'); // '18:32:08'
		 * jokerx04.date.getFormatDate(new Date(), 'yyyy-MM-dd HH:mm:ss'); // '2023-02-24 18:32:08'
		 * jokerx04.date.getFormatDate(new Date(), 'yyyy-MM-dd E HH:mm:ss.SSS'); // '2023-02-24 금요일 18:32:08.263'
		 */
		getFormatDate: function (date, dateFormat) {
			if (!jokerx04.date.isDateObject(date)) {
				return '';
			}

			dateFormat = jokerx04.string.getDefaultIfBlank(jokerx04.string.toString(dateFormat), defaults.dateFormat);

			return dateFormat.replace(/(yyyy|MM|dd|E|HH|mm|ss|SSS)/g, function ($1) {
						switch ($1) {
							case 'yyyy': return date.getFullYear();
							case 'MM': return ('0' + (date.getMonth() + 1)).slice(-2);
							case 'dd': return ('0' + date.getDate()).slice(-2);
							case 'E': return [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ][date.getDay()];
							case 'HH': return ('0' + date.getHours()).slice(-2);
							case 'mm': return ('0' + date.getMinutes()).slice(-2);
							case 'ss': return ('0' + date.getSeconds()).slice(-2);
							case 'SSS': return ('000' + date.getMilliseconds()).slice(-3);
							default: return $1;
						}

					});
		},

		/**
		 * 현재 일시를 출력 패턴 형태로 치환하여 반환한다.
		 * dateFormat 를 지정하지 않을 경우 기본 출력 포맷은 'yyyy-MM-dd E HH:mm:ss.SSS' 이며, jokerx04(options); 의 options 에서 설정할 수 있다.
		 * dateFormat 에서 yyyy 는 년도 4자리, MM 은 월 2자리, dd 는 일 2자리, E 는 요일, HH 는 시 2자리, mm 는 분 2자리, ss 는 초 2자리, SSS 는 밀리초 3자리를 표현하는 패턴 문자열이다.
		 * 
		 * jokerx04({
		 * 
		 * 	dateFormat: Date 출력 패턴 문자열
		 * 
		 * });
		 * 
		 * jokerx04.date.getCurrentDate(); // '2023-02-24 금요일 18:32:08.263'
		 * jokerx04.date.getCurrentDate(null); // '2023-02-24 금요일 18:32:08.263'
		 * jokerx04.date.getCurrentDate(undefined); // '2023-02-24 금요일 18:32:08.263'
		 * jokerx04.date.getCurrentDate('123'); // '123'
		 * jokerx04.date.getCurrentDate('yyyy-MM-dd'); // '2023-02-24'
		 * jokerx04.date.getCurrentDate('HH:mm:ss'); // '18:32:08'
		 * jokerx04.date.getCurrentDate('yyyy-MM-dd HH:mm:ss'); // '2023-02-24 18:32:08'
		 * jokerx04.date.getCurrentDate('yyyy-MM-dd E HH:mm:ss.SSS'); // '2023-02-24 금요일 18:32:08.263'
		 */
		getCurrentDate: function (dateFormat) {
			return jokerx04.date.getFormatDate(new Date(), dateFormat);
		}
	};

	/**
	 * 정규식 관련 함수 패키지이다.
	 */
	jokerx04.regexp = {
		/**
		 * 객체 유형이 RegExp 인지 여부를 반환한다.
		 * 
		 * jokerx04.regexp.isRegExpObject(null); // false
		 * jokerx04.regexp.isRegExpObject(undefined); // false
		 * jokerx04.regexp.isRegExpObject(123); // false
		 * jokerx04.regexp.isRegExpObject('123'); // false
		 * jokerx04.regexp.isRegExpObject(false); // false
		 * jokerx04.regexp.isRegExpObject(Symbol('123')); // false
		 * jokerx04.regexp.isRegExpObject([ 1, 2, 3 ]); // false
		 * jokerx04.regexp.isRegExpObject({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.regexp.isRegExpObject(window); // false
		 * jokerx04.regexp.isRegExpObject(function () {}); // false
		 * jokerx04.regexp.isRegExpObject(new Date()); // false
		 * jokerx04.regexp.isRegExpObject(/\w+/); // true
		 * jokerx04.regexp.isRegExpObject(document.querySelector('body')); // false
		 */
		isRegExpObject: function (object) {
			return jokerx04.boolean.isEquals(Object.prototype.toString.call(object), '[object RegExp]');
		},
	};

	/**
	 * AJAX(Asynchronous JavaScript And XML) 관련 함수 패키지이다.
	 */
	jokerx04.ajax = {
		/**
		 * Promise 객체인지 여부를 반환한다.
		 * 
		 * jokerx04.ajax.isPromise(null); // false
		 * jokerx04.ajax.isPromise(undefined); // false
		 * jokerx04.ajax.isPromise(123); // false
		 * jokerx04.ajax.isPromise('123'); // false
		 * jokerx04.ajax.isPromise(false); // false
		 * jokerx04.ajax.isPromise(Symbol('123')); // false
		 * jokerx04.ajax.isPromise([ 1, 2, 3 ]); // false
		 * jokerx04.ajax.isPromise({ "key1": 123, "key2": "value" }); // false
		 * jokerx04.ajax.isPromise(window); // false
		 * jokerx04.ajax.isPromise(function () {}); // false
		 * jokerx04.ajax.isPromise(new Promise(function (resolve, reject) { resolve(); })); // true
		 * jokerx04.ajax.isPromise(new Date()); // false
		 * jokerx04.ajax.isPromise(/\w+/); // false
		 * jokerx04.ajax.isPromise(document.querySelector('body')); // false
		 */
		isPromise: function (object) {
			return (jokerx04.common.isDefined(object) &&
					jokerx04.boolean.isEquals(typeof object.then, 'function') &&
					jokerx04.boolean.isEquals(typeof object.catch, 'function'));
		},

		/**
		 * URL 을 Cors Anywhere(https://cors-anywhere.herokuapp.com) 서버 API URL 로 변환하여 반환한다.
		 * 
		 * jokerx04.ajax.getCorsAnywhereUrl(null); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(undefined); 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(123); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl('http://openapi.naver.com'); // 'https://cors.jokerx04.com/openapi.naver.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl('http://openapi.naver.com:8080'); // 'https://cors.jokerx04.com/openapi.naver.com:8080/'
		 * jokerx04.ajax.getCorsAnywhereUrl('https://openapi.naver.com'); // 'https://cors.jokerx04.com/openapi.naver.com:443/'
		 * jokerx04.ajax.getCorsAnywhereUrl('https://openapi.naver.com:8081'); // 'https://cors.jokerx04.com/openapi.naver.com:8081/'
		 * jokerx04.ajax.getCorsAnywhereUrl(false); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(Symbol('123')); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl([ 1, 2, 3 ]); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl({ "key1": 123, "key2": "value" }); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(window); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(function () {}); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(new Promise(function (resolve, reject) { resolve(); })); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(new Date()); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(/\w+/); // 'https://cors.jokerx04.com/'
		 * jokerx04.ajax.getCorsAnywhereUrl(document.querySelector('body')); // 'https://cors.jokerx04.com/'
		 */
		getCorsAnywhereUrl: function (object) {
			try {
				var url;
				
				if (jokerx04.string.isContainsAny(jokerx04.string.getTrim(object), 'http://', 'https://')) {
					url = new URL(jokerx04.string.getTrim(object));
				} else {
					url = new URL('http://' + jokerx04.string.getTrim(object));
				}

				if (jokerx04.boolean.isEquals(url.port, '') && jokerx04.boolean.isEquals(url.protocol, 'https:')) {
					return (defaults.corsAnywhereServerUrl + url.host + ':443' + url.pathname + url.search);
				}
	
				return (defaults.corsAnywhereServerUrl + url.host + url.pathname + url.search);
			} catch (e) {
				return defaults.corsAnywhereServerUrl;
			}
		}
	};

	/**
	 * UI(User interface) 관련 함수 패키지이다.
	 */
	jokerx04.ui = {
		/**
		 * Element 객체를 생성하여 반환한다.
		 * 
		 * jokerx04.ui.createDom('span'); // <span></span>
		 * jokerx04.ui.createDom('div', { 'id': 'divId', 'class': 'divClass' }); // <div id="divId" class="divClass"></div>
		 */
		 createDom: function (element, object) {
			var returnValue = document.createElement(jokerx04.string.toString(element));

			for (var key in object) {
				returnValue.setAttribute(key, object[key]);
			}

			return returnValue;
		},

		/**
		 * DOM 또는 CSS 선택자에 해당되는 첫번째 Element 객체를 반환한다.
		 * 해당 Element 객체가 없을 경우 null 을 반환한다.
		 * 
		 * jokerx04.ui.getDom(null); // null
		 * jokerx04.ui.getDom(undefined); // null
		 * jokerx04.ui.getDom(''); // null
		 * jokerx04.ui.getDom('html'); // html Element 객체
		 * jokerx04.ui.getDom('body'); // body Element 객체
		 * 		document.querySelector('body').className = 'bodyClass';
		 * 		jokerx04.ui.getDom('.bodyClass'); // body Element 객체
		 * 		document.querySelector('body').id = 'bodyId';
		 * 		jokerx04.ui.getDom('#bodyId'); // body Element 객체
		 */
		getDom: function (selector) {
			try {
				return document.querySelector(jokerx04.string.toString(selector));
			} catch (e) {
				return null;
			}
		},

		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element NodeList 객체를 반환한다.
		 * 해당 Element 객체가 없을 경우 크기가 0 인 NodeList 객체를 반환한다.
		 * 
		 * jokerx04.ui.getDomList(null); // NodeList [] 객체
		 * jokerx04.ui.getDomList(undefined); // NodeList [] 객체
		 * jokerx04.ui.getDomList(''); // NodeList [] 객체
		 * jokerx04.ui.getDomList('html'); // NodeList [html] 객체
		 * jokerx04.ui.getDomList('body'); // NodeList [body] 객체
		 * 		document.querySelector('body').appendChild(document.createElement('div'));
		 * 		document.querySelector('body').appendChild(document.createElement('div'));
		 * 		document.querySelector('body').appendChild(document.createElement('div'));
		 * 		jokerx04.ui.getDomList('div'); // NodeList [div, div, div] 객체
		 */
		getDomList: function (selector) {
			try {
				return document.querySelectorAll(jokerx04.string.toString(selector));
			} catch (e) {
				return document.querySelectorAll(null);
			}
		},

		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element NodeList 객체의 CSSStyleDeclaration Array 객체를 반환한다.
		 * 속성 키를 지정하여 호출 시 CSSStyleDeclaration 의 해당 속성 값을 Array 객체로 반환한다.
		 * 해당 Element 객체가 없을 경우 크기가 0 인 Array 객체를 반환한다.
		 * 
		 * jokerx04.ui.getDomStyleList(null); // [] 객체
		 * jokerx04.ui.getDomStyleList(undefined); // [] 객체
		 * jokerx04.ui.getDomStyleList(''); // [] 객체
		 * jokerx04.ui.getDomStyleList('div'); // [CSSStyleDeclaration] 객체
		 * jokerx04.ui.getDomStyleList('div', 'width'); // ['auto', '100%', 'auto', 'auto', '300px'] 객체
		 * jokerx04.ui.getDomStyleList('div', 'propertyKey'); // ['', '', '', '', ''] 객체
		 */
		getDomStyleList: function (selector, propertyKey) {
			var returnValue = new Array();

			try {
				var domList = jokerx04.ui.getDomList(selector);
				
				for (var i = 0; i < domList.length; i++) {
					if (jokerx04.common.isDefined(propertyKey)) {
						returnValue.push(window.getComputedStyle(domList[i]).getPropertyValue(jokerx04.string.toString(propertyKey)));
					} else {
						returnValue.push(window.getComputedStyle(domList[i]));
					}
				}
			} catch (e) {
				return [];
			}

			return returnValue;
		},

		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element 에 불투명 레이어를 적용한다.
		 * DOM 또는 CSS 선택자를 지정하지 않거나 해당되는 Element 객체가 없을 경우 body Element 에 불투명 레이어를 적용한다.
		 * 
		 * jokerx04.ui.blockUI();
		 * jokerx04.ui.blockUI('', { 'data-text': '로딩중...' });
		 * jokerx04.ui.blockUI('#divId');
		 * jokerx04.ui.blockUI('#divId', { 'data-text': '조회중입니다.' });
		 */
		blockUI: function (selector, options) {
			var defaultOptions = {
				'data-text': 'Loading...'
			};

			Object.assign(defaultOptions, options);

			if (!jokerx04.ui.getDom('style[title="blockUI"]')) {
				var styleDom = jokerx04.ui.createDom('style', {
					'title': 'blockUI'
				});
	
				styleDom.appendChild(document.createTextNode(`
.blockUI {
	
	cursor: wait;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	z-index: 1000;
	background-color: #000000;
	opacity: 0.5;
	transition: opacity 0.25s;

}

.blockUI:before {
	
	content: "";
	display: block;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border-width: 10px;
	border-style: solid;
	border-color: #ffffff #72c02c #72c02c #72c02c;
	position: absolute;
	top: calc(50% - 110px);
	left: calc(50% - 110px);
	will-change: transform;
	animation: blockUISpin 2s infinite ease-in-out;

}

.blockUI:after {
	
	content: attr(data-text);
	display: block;
	max-width: 125px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	color: #ffffff;
	text-align: center;

}

@keyframes blockUISpin {

	0% { transform: translateZ(0) rotate(0deg); }
	100% { transform: translateZ(0) rotate(360deg); }

}
				`));
	
				jokerx04.ui.getDom('head').appendChild(styleDom);
			}
			
			var parentDom = jokerx04.ui.getDom(selector) || document.body;

			if ((jokerx04.boolean.isNotEquals(parentDom.tagName, 'BODY')) && jokerx04.string.isBlank(parentDom.style.position)) {
				parentDom.style.position = 'relative';
			}
			
			parentDom.appendChild(jokerx04.ui.createDom('div', {
				'class': 'blockUI',
				'style': (jokerx04.boolean.isEquals(parentDom.tagName, 'BODY')) ? 'position: fixed' : 'position: absolute',
				'data-text': defaultOptions['data-text']
			}));

		},

		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element 의 불투명 레이어를 제거한다.
		 * DOM 또는 CSS 선택자를 지정하지 않거나 해당되는 Element 객체가 없을 경우 불투명 레이어 모두를 제거한다.
		 * 
		 * jokerx04.ui.unblockUI();
		 * jokerx04.ui.unblockUI('');
		 * jokerx04.ui.unblockUI('#divId');
		 */
		unblockUI: function (selector) {
			try {
				if (jokerx04.string.isBlank(selector)) {
					throw new Error();
				} else {
					jokerx04.ui.getDom(selector).removeChild(jokerx04.ui.getDom(jokerx04.string.toString(selector) + ' .blockUI'));
				}
			} catch (e) {
				var domList = jokerx04.ui.getDomList('.blockUI');
				
				for (var i = 0; i < domList.length; i++) {
					domList[i].remove();
				}
			}
		}
	};

	/**
	 * jQuery, jQuery UI 관련 함수 패키지이다.
	 * 
	 * jokerx04.jQuery 패키지 사용 시 jQuery(https://jquery.com) 라이브러리가 필요하다.
	 * jokerx04.jQuery.ui 패키지 사용 시 jQuery(https://jquery.com), jQuery UI(https://jqueryui.com) 라이브러리가 필요하다.
	 */
	(function ($) {
		if ($) {
			$(document).ajaxStart(function () {

				

			});
			
			$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {
				if (ajaxOptions.global && ajaxOptions.async) {
					if (Pace) {
						jokerx04.Pace.restart();
					} else {
						jqXHR.timeoutId = setTimeout(function () {
							if (jokerx04.boolean.isEquals($('.blockUI').length, 0)) {
								jokerx04.ui.blockUI();
							}
						}, 500);
					}
				}
			});
			
			$(document).ajaxComplete(function (event, jqXHR, ajaxOptions) {
				if (jqXHR.timeoutId) {
					clearTimeout(jqXHR.timeoutId);
				}
			});
			
			$(document).ajaxStop(function () {
				if (!Pace) {
					jokerx04.ui.unblockUI();
				}
			});
		} else {
			console.warn(jokerx04.name + '.jQuery 패키지는 jQuery(https://jquery.com) 라이브러리가 필요합니다.');
		}
		
		jokerx04.jQuery = {
			/**
			 * jQuery 버전을 반환한다.
			 * 
			 * jokerx04.jQuery.getVersion(); // '3.6.3'
			 */
			getVersion: function () {
				return $().jquery;
			},

			/**
			 * jQuery Ajax 를 실행한다.
			 * 
			 * jokerx04.jQuery.ajax({
			 * 		global: false,
			 * 		isCorsUrl: false,
			 * 		url: 'https://cdn.jsdelivr.net/gh/jokerx04/jokerx04.com/json/menu.json',
			 * 		method: 'GET',
			 * 		type: 'GET'
			 * }); // menu.json 비동기 요청 후 결과 JSON 을 Console 출력
			 */
			ajax: function (options) {
				var defaults = {
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
						jokerx04.common.console('log', data);
						jokerx04.common.console('log', textStatus);
						jokerx04.common.console('log', jqXHR);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						switch (jqXHR.readyState) {
							case 0:
								jokerx04.common.console('error', 'readyState : ' + jqXHR.readyState + '(UNSENT)');

								break;

							case 1:
								jokerx04.common.console('error', 'readyState : ' + jqXHR.readyState + '(OPENED)');

								break;

							case 2:
								jokerx04.common.console('error', 'readyState : ' + jqXHR.readyState + '(HEADERS_RECEIVED)');

								break;

							case 3:
								jokerx04.common.console('error', 'readyState : ' + jqXHR.readyState + '(LOADING)');

								break;

							case 4:
								jokerx04.common.console('error', 'readyState : ' + jqXHR.readyState + '(DONE)');

								break;

							default:
								jokerx04.common.console('error', 'readyState : ' + jqXHR.readyState);
						}

						jokerx04.common.console('error', 'status : ' + jqXHR.status);
						jokerx04.common.console('error', 'statusText : ' + jqXHR.statusText);
						jokerx04.common.console('error', 'textStatus : ' + textStatus);
						jokerx04.common.console('error', 'errorThrown : ' + errorThrown);
						jokerx04.common.console('error', 'responseText : ' + jqXHR.responseText);
					},
					complete: function (jqXHR, textStatus) {

					},
					isCorsUrl: true

				};

				$.extend(defaults, options);

				if (defaults.crossDomain && jQuery.support.cors && defaults.isCorsUrl) {
					defaults.url = jokerx04.ajax.getCorsAnywhereUrl(defaults.url);
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
		}

		if ($ && !$.ui) {
			console.warn(jokerx04.name + '.jQuery.ui 패키지는 jQuery UI(https://jqueryui.com) 라이브러리가 필요합니다.');
		}

		jokerx04.jQuery.ui = {
			/**
			 * jQuery UI 버전을 반환한다.
			 * 
			 * jokerx04.jQuery.ui.getVersion(); // '1.12.1'
			 */
			getVersion: function () {
				return $.ui.version;
			}
		}
	})(window.jQuery);

	/**
	 * UAParser.js 관련 함수 패키지이다.
	 * 
	 * jokerx04.UAParser 패키지 사용 시 UAParser.js(https://github.com/faisalman/ua-parser-js) 라이브러리가 필요하다.
	 */
	(function (UAParser) {
		var uaParser;

		if (UAParser) {
			uaParser = new UAParser();
		} else {
			console.warn(jokerx04.name + '.UAParser 패키지는 UAParser.js(https://github.com/faisalman/ua-parser-js) 라이브러리가 필요합니다.');
		}
		
		jokerx04.UAParser = {
			/**
			 * 사용자 브라우저명을 반환한다.
			 * 
			 * jokerx04.UAParser.getBrowserName(); // 'Chrome'
			 */
			 getBrowserName: function () {
				return uaParser.getBrowser().name;
			},

			/**
			 * 사용자 브라우저 버전을 반환한다.
			 * 
			 * jokerx04.UAParser.getBrowserVersion(); // '110.0.0.0'
			 */
			 getBrowserVersion: function () {
				return uaParser.getBrowser().version;
			},

			/**
			 * 사용자 브라우저 주요 버전을 반환한다.
			 * 
			 * jokerx04.UAParser.getBrowserMajorVersion(); // '110'
			 */
			 getBrowserMajorVersion: function () {
				return uaParser.getBrowser().version;
			},

			/**
			 * 사용자 기기 구분명을 반환한다.
			 * 
			 * jokerx04.UAParser.getDeviceType(); // 'mobile'
			 */
			 getDeviceType: function () {
				return uaParser.getDevice().type;
			},

			/**
			 * 사용자 기기 공급업체명을 반환한다.
			 * 
			 * jokerx04.UAParser.getDeviceVendor(); // 'LG'
			 */
			 getDeviceVendor: function () {
				return uaParser.getDevice().vendor;
			},

			/**
			 * 사용자 기기 모델명을 반환한다.
			 * 
			 * jokerx04.UAParser.getDeviceModel(); // 'Nexus 5'
			 */
			 getDeviceModel: function () {
				return uaParser.getDevice().model;
			},

			/**
			 * 사용자 브라우저 엔진명을 반환한다.
			 * 
			 * jokerx04.UAParser.getEngineName(); // 'Blink'
			 */
			 getEngineName: function () {
				return uaParser.getEngine().name;
			},

			/**
			 * 사용자 브라우저 엔진 버전을 반환한다.
			 * 
			 * jokerx04.UAParser.getEngineVersion(); // '110.0.0.0'
			 */
			 getEngineVersion: function () {
				return uaParser.getEngine().version;
			},

			/**
			 * 사용자 OS 명을 반환한다.
			 * 
			 * jokerx04.UAParser.getOSName(); // 'Linux'
			 */
			 getOSName: function () {
				return uaParser.getOS().name;
			},

			/**
			 * 사용자 OS 버전을 반환한다.
			 * 
			 * jokerx04.UAParser.getOSVersion(); // 'x86_64'
			 */
			 getOSVersion: function () {
				return uaParser.getOS().version;
			},

			/**
			 * 사용자의 CPU 아키텍처명을 반환한다.
			 * 
			 * jokerx04.UAParser.getCPUArchitecture(); // 'amd64'
			 */
			 getCPUArchitecture: function () {
				return uaParser.getCPU().architecture;
			},

			/**
			 * User Agent 를 반환한다.
			 * 
			 * jokerx04.UAParser.getUserAgent(); // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
			 */
			 getUserAgent: function () {
				return uaParser.getUA();
			},

			/**
			 * User Agent 를 설정한다.
			 * 
			 * jokerx04.UAParser.getUserAgent(); // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
			 * 		jokerx04.UAParser.getBrowserName(); // 'Chrome'
			 * 		jokerx04.UAParser.setUserAgent('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537');
			 * 		jokerx04.UAParser.getUserAgent(); // 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537'
			 * 		jokerx04.UAParser.getBrowserName(); // 'IEMobile'
			 */
			 setUserAgent: function (object) {
				return uaParser.setUA(jokerx04.string.toString(object));
			}
		}
	})(window.UAParser);

	/**
	 * PACE 관련 함수 패키지이다.
	 * 
	 * jokerx04.Pace 패키지 사용 시 PACE(https://codebyzach.github.io/pace) 라이브러리가 필요하다.
	 */
	(function (Pace) {
		var defaultOptions = {
			ajax: {
				trackMethods: [
					'GET',
					'HEAD',
					'POST',
					'PUT',
					'DELETE',
					'CONNECT',
					'OPTIONS',
					'TRACE',
					'PATCH'
				],
				trackWebSockets: true,
				ignoreURLs: []
			}
		};

		if (Pace) {
			var styleDom = jokerx04.ui.createDom('style');

			styleDom.appendChild(document.createTextNode(`
.loadingBar.pace-running:before {
	
	content: "";
	position: absolute;
	cursor: wait;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	z-index: 1000;
	background-color: #000000;
	opacity: 0.5;
	transition: opacity 0.25s;

}

.loadingBar .pace {

	-webkit-pointer-events: none;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	border-radius: 10px;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding;
	background-clip: padding-box;
	z-index: 2000;
	position: fixed;
	margin: auto;
	top: 12px;
	left: 0;
	right: 0;
	bottom: 0;
	width: 200px;
	height: 50px;
	overflow: hidden;

}

.loadingBar .pace .pace-progress {

	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding;
	background-clip: padding-box;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	display: block;
	position: absolute;
	right: 100%;
	margin-right: -10px;
	width: 93%;
	top: 7px;
	height: 14px;
	font-size: 14px;
	background: #72c02c;
	color: #72c02c;
	line-height: 60px;
	font-weight: bold;
	-webkit-box-shadow: 120px 0 #ffffff, 240px 0 #ffffff;
	-ms-box-shadow: 120px 0 #ffffff, 240px 0 #ffffff;
	box-shadow: 120px 0 #ffffff, 240px 0 #ffffff;

}

.loadingBar .pace .pace-progress:after {

	content: attr(data-progress-text);
	display: inline-block;
	position: fixed;
	width: 45px;
	text-align: right;
	right: 0;
	padding-right: 16px;
	top: 4px;
	color: #ffffff;

}

.loadingBar .pace .pace-progress[data-progress-text="0%"]:after { right: -200px }
.loadingBar .pace .pace-progress[data-progress-text="1%"]:after { right: -198.14px }
.loadingBar .pace .pace-progress[data-progress-text="2%"]:after { right: -196.28px }
.loadingBar .pace .pace-progress[data-progress-text="3%"]:after { right: -194.42px }
.loadingBar .pace .pace-progress[data-progress-text="4%"]:after { right: -192.56px }
.loadingBar .pace .pace-progress[data-progress-text="5%"]:after { right: -190.7px }
.loadingBar .pace .pace-progress[data-progress-text="6%"]:after { right: -188.84px }
.loadingBar .pace .pace-progress[data-progress-text="7%"]:after { right: -186.98px }
.loadingBar .pace .pace-progress[data-progress-text="8%"]:after { right: -185.12px }
.loadingBar .pace .pace-progress[data-progress-text="9%"]:after { right: -183.26px }
.loadingBar .pace .pace-progress[data-progress-text="10%"]:after { right: -181.4px }
.loadingBar .pace .pace-progress[data-progress-text="11%"]:after { right: -179.54px }
.loadingBar .pace .pace-progress[data-progress-text="12%"]:after { right: -177.68px }
.loadingBar .pace .pace-progress[data-progress-text="13%"]:after { right: -175.82px }
.loadingBar .pace .pace-progress[data-progress-text="14%"]:after { right: -173.96px }
.loadingBar .pace .pace-progress[data-progress-text="15%"]:after { right: -172.1px }
.loadingBar .pace .pace-progress[data-progress-text="16%"]:after { right: -170.24px }
.loadingBar .pace .pace-progress[data-progress-text="17%"]:after { right: -168.38px }
.loadingBar .pace .pace-progress[data-progress-text="18%"]:after { right: -166.52px }
.loadingBar .pace .pace-progress[data-progress-text="19%"]:after { right: -164.66px }
.loadingBar .pace .pace-progress[data-progress-text="20%"]:after { right: -162.8px }
.loadingBar .pace .pace-progress[data-progress-text="21%"]:after { right: -160.94px }
.loadingBar .pace .pace-progress[data-progress-text="22%"]:after { right: -159.08px }
.loadingBar .pace .pace-progress[data-progress-text="23%"]:after { right: -157.22px }
.loadingBar .pace .pace-progress[data-progress-text="24%"]:after { right: -155.36px }
.loadingBar .pace .pace-progress[data-progress-text="25%"]:after { right: -153.5px }
.loadingBar .pace .pace-progress[data-progress-text="26%"]:after { right: -151.64px }
.loadingBar .pace .pace-progress[data-progress-text="27%"]:after { right: -149.78px }
.loadingBar .pace .pace-progress[data-progress-text="28%"]:after { right: -147.92px }
.loadingBar .pace .pace-progress[data-progress-text="29%"]:after { right: -146.06px }
.loadingBar .pace .pace-progress[data-progress-text="30%"]:after { right: -144.2px }
.loadingBar .pace .pace-progress[data-progress-text="31%"]:after { right: -142.34px }
.loadingBar .pace .pace-progress[data-progress-text="32%"]:after { right: -140.48px }
.loadingBar .pace .pace-progress[data-progress-text="33%"]:after { right: -138.62px }
.loadingBar .pace .pace-progress[data-progress-text="34%"]:after { right: -136.76px }
.loadingBar .pace .pace-progress[data-progress-text="35%"]:after { right: -134.9px }
.loadingBar .pace .pace-progress[data-progress-text="36%"]:after { right: -133.04px }
.loadingBar .pace .pace-progress[data-progress-text="37%"]:after { right: -131.18px }
.loadingBar .pace .pace-progress[data-progress-text="38%"]:after { right: -129.32px }
.loadingBar .pace .pace-progress[data-progress-text="39%"]:after { right: -127.46px }
.loadingBar .pace .pace-progress[data-progress-text="40%"]:after { right: -125.6px }
.loadingBar .pace .pace-progress[data-progress-text="41%"]:after { right: -123.74px }
.loadingBar .pace .pace-progress[data-progress-text="42%"]:after { right: -121.88px }
.loadingBar .pace .pace-progress[data-progress-text="43%"]:after { right: -120.02px }
.loadingBar .pace .pace-progress[data-progress-text="44%"]:after { right: -118.16px }
.loadingBar .pace .pace-progress[data-progress-text="45%"]:after { right: -116.3px }
.loadingBar .pace .pace-progress[data-progress-text="46%"]:after { right: -114.44px }
.loadingBar .pace .pace-progress[data-progress-text="47%"]:after { right: -112.58px }
.loadingBar .pace .pace-progress[data-progress-text="48%"]:after { right: -110.72px }
.loadingBar .pace .pace-progress[data-progress-text="49%"]:after { right: -108.86px }
.loadingBar .pace .pace-progress[data-progress-text="50%"]:after { right: -107px }
.loadingBar .pace .pace-progress[data-progress-text="51%"]:after { right: -105.14px }
.loadingBar .pace .pace-progress[data-progress-text="52%"]:after { right: -103.28px }
.loadingBar .pace .pace-progress[data-progress-text="53%"]:after { right: -101.42px }
.loadingBar .pace .pace-progress[data-progress-text="54%"]:after { right: -99.56px }
.loadingBar .pace .pace-progress[data-progress-text="55%"]:after { right: -97.7px }
.loadingBar .pace .pace-progress[data-progress-text="56%"]:after { right: -95.84px }
.loadingBar .pace .pace-progress[data-progress-text="57%"]:after { right: -93.98px }
.loadingBar .pace .pace-progress[data-progress-text="58%"]:after { right: -92.12px }
.loadingBar .pace .pace-progress[data-progress-text="59%"]:after { right: -90.26px }
.loadingBar .pace .pace-progress[data-progress-text="60%"]:after { right: -88.4px }
.loadingBar .pace .pace-progress[data-progress-text="61%"]:after { right: -86.53999999999999px }
.loadingBar .pace .pace-progress[data-progress-text="62%"]:after { right: -84.68px }
.loadingBar .pace .pace-progress[data-progress-text="63%"]:after { right: -82.82px }
.loadingBar .pace .pace-progress[data-progress-text="64%"]:after { right: -80.96000000000001px }
.loadingBar .pace .pace-progress[data-progress-text="65%"]:after { right: -79.1px }
.loadingBar .pace .pace-progress[data-progress-text="66%"]:after { right: -77.24px }
.loadingBar .pace .pace-progress[data-progress-text="67%"]:after { right: -75.38px }
.loadingBar .pace .pace-progress[data-progress-text="68%"]:after { right: -73.52px }
.loadingBar .pace .pace-progress[data-progress-text="69%"]:after { right: -71.66px }
.loadingBar .pace .pace-progress[data-progress-text="70%"]:after { right: -69.8px }
.loadingBar .pace .pace-progress[data-progress-text="71%"]:after { right: -67.94px }
.loadingBar .pace .pace-progress[data-progress-text="72%"]:after { right: -66.08px }
.loadingBar .pace .pace-progress[data-progress-text="73%"]:after { right: -64.22px }
.loadingBar .pace .pace-progress[data-progress-text="74%"]:after { right: -62.36px }
.loadingBar .pace .pace-progress[data-progress-text="75%"]:after { right: -60.5px }
.loadingBar .pace .pace-progress[data-progress-text="76%"]:after { right: -58.64px }
.loadingBar .pace .pace-progress[data-progress-text="77%"]:after { right: -56.78px }
.loadingBar .pace .pace-progress[data-progress-text="78%"]:after { right: -54.92px }
.loadingBar .pace .pace-progress[data-progress-text="79%"]:after { right: -53.06px }
.loadingBar .pace .pace-progress[data-progress-text="80%"]:after { right: -51.2px }
.loadingBar .pace .pace-progress[data-progress-text="81%"]:after { right: -49.34px }
.loadingBar .pace .pace-progress[data-progress-text="82%"]:after { right: -47.480000000000004px }
.loadingBar .pace .pace-progress[data-progress-text="83%"]:after { right: -45.62px }
.loadingBar .pace .pace-progress[data-progress-text="84%"]:after { right: -43.76px }
.loadingBar .pace .pace-progress[data-progress-text="85%"]:after { right: -41.9px }
.loadingBar .pace .pace-progress[data-progress-text="86%"]:after { right: -40.04px }
.loadingBar .pace .pace-progress[data-progress-text="87%"]:after { right: -38.18px }
.loadingBar .pace .pace-progress[data-progress-text="88%"]:after { right: -36.32px }
.loadingBar .pace .pace-progress[data-progress-text="89%"]:after { right: -34.46px }
.loadingBar .pace .pace-progress[data-progress-text="90%"]:after { right: -32.6px }
.loadingBar .pace .pace-progress[data-progress-text="91%"]:after { right: -30.740000000000002px }
.loadingBar .pace .pace-progress[data-progress-text="92%"]:after { right: -28.880000000000003px }
.loadingBar .pace .pace-progress[data-progress-text="93%"]:after { right: -27.02px }
.loadingBar .pace .pace-progress[data-progress-text="94%"]:after { right: -25.16px }
.loadingBar .pace .pace-progress[data-progress-text="95%"]:after { right: -23.3px }
.loadingBar .pace .pace-progress[data-progress-text="96%"]:after { right: -21.439999999999998px }
.loadingBar .pace .pace-progress[data-progress-text="97%"]:after { right: -19.58px }
.loadingBar .pace .pace-progress[data-progress-text="98%"]:after { right: -17.72px }
.loadingBar .pace .pace-progress[data-progress-text="99%"]:after { right: -15.86px }
.loadingBar .pace .pace-progress[data-progress-text="100%"]:after { right: -14px }

.loadingBar .pace .pace-activity {

	position: absolute;
	width: 100%;
	height: 28px;
	z-index: 2001;
	box-shadow: inset 0 0 0 2px #72c02c, inset 0 0 0 7px #ffffff;
	border-radius: 10px;

}

.loadingBar .pace.pace-inactive {

	display: none;

}
			`));

			jokerx04.ui.getDom('head').appendChild(styleDom);

			Pace.on('hide', function () {
				
				jokerx04.ui.getDom('body').classList.remove('loadingBar');
				
				jokerx04.ui.getDom('body').classList.add('loadingBar');

			});
		} else {
			console.warn(jokerx04.name + '.Pace 패키지는 PACE(https://codebyzach.github.io/pace) 라이브러리가 필요합니다.');
		}
		
		jokerx04.Pace = {
			/**
			 * Pace 를 재시작한다.
			 * 
			 * jokerx04.Pace.restart();
			 */
			 restart: function (options) {
				if (jokerx04.common.isJSONObject(options)) {
					Object.assign(defaultOptions, options);
				}

				Pace.trigger('restart');

				Pace.stop();

				return Pace.start(defaultOptions);
			}
		}
	})(window.Pace);
	
	return jokerx04;
}));

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
			if (jokerx04.boolean.isNotEquals(jqXHR.status, 200)) {
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

				if (jokerx04.boolean.isEquals($(selector).length, 0)) {
					continue;
				}

				for (var k = 0; k < categories.length; k++) {
					categoriesDepth = categories[k].depth;
					categoriesType = categories[k].type;
					categoriesTitle = categories[k].title;
					categoriesHref = categories[k].href;
					categoriesTarget = categories[k].target;

					if (jokerx04.boolean.isNotEquals(k, 0)) {
						preCategoriesDepth = categories[k - 1].depth;
					}  else {
						preCategoriesDepth = -1;
					}
					
					if (jokerx04.boolean.isNotEquals(k + 1, categories.length)) {
						nextCategoriesDepth = categories[k + 1].depth;
					}  else {
						nextCategoriesDepth = -1;
					}
					
					if (jokerx04.boolean.isEquals(categoriesDepth, 1)) {
						idCount++;
						
						if (jokerx04.boolean.isEquals(nextCategoriesDepth, categoriesDepth) || jokerx04.boolean.isEquals(nextCategoriesDepth, -1)) {
							categoriesTag += '<li class="dropdown-item">';
						} else {
							categoriesTag += '<li class="dropdown-item hs-has-sub-menu">';
						}

						categoriesTag += '		<a id="nav-link--' + id + idCount + '" class="nav-link g-color-primary--hover" href="' + categoriesHref + '" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu--' + id + idCount + '">' + categoriesTitle + '</a>';
					}
					
					if (jokerx04.boolean.isEquals(categoriesDepth, 2)) {
						if (jokerx04.boolean.isNotEquals(preCategoriesDepth, categoriesDepth)) {
							categoriesTag += '		<ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2" id="nav-submenu--' + id + idCount + '" aria-labelledby="nav-link--' + id + idCount + '">';
						}
					
						if (jokerx04.boolean.isEquals(categoriesType, 'link')) {
							categoriesTag += '			<li class="dropdown-item">';
							categoriesTag += '				<a class="nav-link g-color-primary--hover" href="' + categoriesHref + '" ' + (jokerx04.boolean.isEquals(categoriesTarget, 'blank') ? 'target="_blank"' : '') + '>' + categoriesTitle + '</a>';
							categoriesTag += '			</li>';
						}
						
						if (jokerx04.boolean.isEquals(categoriesType, 'div')) {
							categoriesTag += '			<li class="dropdown-divider"></li>';
						}
						
						if (jokerx04.boolean.isNotEquals(nextCategoriesDepth, categoriesDepth)) {
							categoriesTag += '		</ul>';
						}
					}
					
					if (jokerx04.boolean.isEquals(categoriesDepth, 1)) {
						if (jokerx04.boolean.isEquals(nextCategoriesDepth, categoriesDepth)) {
							categoriesTag += '</li>';
						}
					}
				}

				categoriesTag += '</li>';
				
				$(selector).append(categoriesTag);
			}

		},
		complete: function (jqXHR, textStatus) {
			if (jokerx04.boolean.isEquals(window.location.host, 'jokerx04.com')) {
				$('#navBar').find('a[href="' + window.location.protocol + '//' + window.location.host + '"]').addClass('active');
			}

			if (jokerx04.boolean.isEquals(window.location.host, 'lab.jokerx04.com')) {
				$('#navBar').find('a[href="' + window.location.protocol + '//' + window.location.host + '"]').addClass('active');
			}

			if (jokerx04.boolean.isEquals(window.location.host, 'blog.jokerx04.com')) {
				var breadcrumbsTitle = $('.breadcrumbsTitle').eq(0).text();

				if (jokerx04.string.isContains(breadcrumbsTitle, '(')) {
					breadcrumbsTitle = breadcrumbsTitle.substring(0, breadcrumbsTitle.lastIndexOf('('));
				}
				
				if (jokerx04.string.isContains(window.location.pathname, '/tag/')) {
					breadcrumbsTitle = '#' + breadcrumbsTitle;
				}
				
				$('#navBar #nav-link-blog').parent().find('a').each(function (index, element) {
					if (jokerx04.boolean.isEquals($(this).text(), breadcrumbsTitle) &&
							jokerx04.boolean.isNotEquals($(this).closest('ul').closest('li').find('a:nth(0)').text(), '') &&
							jokerx04.boolean.isNotEquals($(this).closest('ul').closest('li').find('a:nth(0)').attr('id'), 'nav-link-blog')) {
						
						breadcrumbsTitle = $(this).closest('ul').closest('li').find('a:nth(0)').text() + '/' + breadcrumbsTitle;

						return false;
					}
				});

				breadcrumbsTitle = '블로그/' + breadcrumbsTitle;

				var breadcrumbsTitleSplitIndex = 0;

				var navBarAText = '';

				$('#navBar #nav-link-blog').parent().find('a').each(function (index, element) {
					navBarAText = $(this).text();

					if (jokerx04.string.isContains(navBarAText, '(')) {
						navBarAText = navBarAText.substring(0, navBarAText.lastIndexOf('('));
					}

					if (jokerx04.boolean.isEquals(navBarAText, breadcrumbsTitle.split('/')[breadcrumbsTitleSplitIndex])) {
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
			if (jokerx04.boolean.isNotEquals(jqXHR.status, 200)) {
				return;
			}
			
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
			
			$('#footerTitle').html(data.footerTitle);
			$('#footerDesc').html(data.footerDesc);
			$('#footerBlogTitle').html(data.footerBlogTitle);
			$('#footerSkinTitle').html(data.footerSkinTitle);
			
			for (var i = 0; i < footerBlogLink.length; i++) {
				footerBlogLinkTitle = footerBlogLink[i].title;
				footerBlogLinkHref = footerBlogLink[i].href;
				footerBlogLinkTarget = footerBlogLink[i].target;

				footerBlogLinkTag = '';
				
				if (jokerx04.boolean.isEquals(i + 1, footerBlogLink.length)) {
					footerBlogLinkTag += '<li class="g-pos-rel g-py-10">';
				} else {
					footerBlogLinkTag += '<li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">';
				}
				
				footerBlogLinkTag += '	<h4 class="h6 g-pr-20 mb-0">';
				footerBlogLinkTag += '		<a class="g-color-white-opacity-0_8 g-color-white--hover" href="' + footerBlogLinkHref + '" ' + (jokerx04.boolean.isEquals(footerBlogLinkTarget, 'blank') ? 'target="_blank"' : '') + '>' + footerBlogLinkTitle + '</a>';
				
				if (jokerx04.boolean.isEquals(footerBlogLinkTarget, 'blank')) {
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
				
				if (jokerx04.boolean.isEquals(i + 1, footerSkinLink.length)) {
					footerSkinLinkTag += '<li class="g-pos-rel g-py-10">';
				} else {
					footerSkinLinkTag += '<li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">';
				}
				
				footerSkinLinkTag += '	<h4 class="h6 g-pr-20 mb-0">';
				footerSkinLinkTag += '		<a class="g-color-white-opacity-0_8 g-color-white--hover" href="' + footerSkinLinkHref + '" ' + (jokerx04.boolean.isEquals(footerSkinLinkTarget, 'blank') ? 'target="_blank"' : '') + '>' + footerSkinLinkTitle + '</a>';
				
				if (jokerx04.boolean.isEquals(footerSkinLinkTarget, 'blank')) {
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
				
				footerContactTag += '<a class="g-color-white-opacity-0_8 g-color-white--hover" href="' + footerContactHref + '" ' + (jokerx04.boolean.isEquals(footerContactTarget, 'blank') ? 'target="_blank"' : '') + '>' + footerContactTitle + '</a>';
				
				if (jokerx04.boolean.isNotEquals(i + 1, footerContact.length)) {
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
