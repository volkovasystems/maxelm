"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "maxelm",
              			"path": "maxelm/maxelm.js",
              			"file": "maxelm.js",
              			"module": "maxelm",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/maxelm.git",
              			"test": "maxelm-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Returns the maximum element of the array based on the condition.
              
              		Default condition test numbers.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"raze": "raze",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var doubt = require("doubt");
var falzy = require("falzy");
var raze = require("raze");
var stringe = require("stringe");

var maxelm = function maxelm(array, condition) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"array:required": "[*]",
                                                			"condition": "function"
                                                		}
                                                	@end-meta-configuration
                                                */

	if (!doubt(array, AS_ARRAY)) {
		throw new Error("invalid array");
	}

	if (falzy(condition)) {
		condition = function condition(previous, next) {
			if (typeof previous == "number" && typeof next == "number") {
				return Math.max(previous, next);
			}

			throw new Error("invalid element, " + previous + ", " + next);
		};
	}

	if (typeof condition != "function") {
		throw new Error("invalid condition");
	}

	try {
		var maximum = raze(array).reduce(function (previous, next) {return condition(previous, next);});

		return {
			"toString": function toString() {
				return stringe(maximum);
			},

			"valueOf": function valueOf() {
				return maximum;
			},

			/*;
      	@note:
      		If the condition returns the value means that the value is greater than
      			the current maximum value from the array, otherwise it could be
      			equal or less than.
      	@end-note
      */
			"compare": function compare(value) {
				try {
					return condition(maximum, value) === value;

				} catch (error) {
					throw new Error("cannot compare invalid value, " + value + ", " + error.stack);
				}
			} };


	} catch (error) {
		throw new Error("cannot get maximum element, condition failed, " + error.stack);
	}
};

module.exports = maxelm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heGVsbS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImZhbHp5IiwicmF6ZSIsInN0cmluZ2UiLCJtYXhlbG0iLCJhcnJheSIsImNvbmRpdGlvbiIsIkFTX0FSUkFZIiwiRXJyb3IiLCJwcmV2aW91cyIsIm5leHQiLCJNYXRoIiwibWF4IiwibWF4aW11bSIsInJlZHVjZSIsInRvU3RyaW5nIiwidmFsdWVPZiIsImNvbXBhcmUiLCJ2YWx1ZSIsImVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksU0FBUyxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF3QkMsU0FBeEIsRUFBbUM7QUFDakQ7Ozs7Ozs7OztBQVNBLEtBQUksQ0FBQ1AsTUFBT00sS0FBUCxFQUFjRSxRQUFkLENBQUwsRUFBK0I7QUFDOUIsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVAsTUFBT0ssU0FBUCxDQUFKLEVBQXdCO0FBQ3ZCQSxjQUFZLG1CQUFFRyxRQUFGLEVBQVlDLElBQVosRUFBc0I7QUFDakMsT0FBSSxPQUFPRCxRQUFQLElBQW1CLFFBQW5CLElBQStCLE9BQU9DLElBQVAsSUFBZSxRQUFsRCxFQUE0RDtBQUMzRCxXQUFPQyxLQUFLQyxHQUFMLENBQVVILFFBQVYsRUFBb0JDLElBQXBCLENBQVA7QUFDQTs7QUFFRCxTQUFNLElBQUlGLEtBQUosdUJBQWdDQyxRQUFoQyxVQUErQ0MsSUFBL0MsQ0FBTjtBQUNBLEdBTkQ7QUFPQTs7QUFFRCxLQUFJLE9BQU9KLFNBQVAsSUFBb0IsVUFBeEIsRUFBb0M7QUFDbkMsUUFBTSxJQUFJRSxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUc7QUFDRixNQUFJSyxVQUFVWCxLQUFNRyxLQUFOLEVBQWNTLE1BQWQsQ0FBc0IsVUFBRUwsUUFBRixFQUFZQyxJQUFaLFVBQXNCSixVQUFXRyxRQUFYLEVBQXFCQyxJQUFyQixDQUF0QixFQUF0QixDQUFkOztBQUVBLFNBQU87QUFDTixlQUFZLFNBQVNLLFFBQVQsR0FBb0I7QUFDL0IsV0FBT1osUUFBU1UsT0FBVCxDQUFQO0FBQ0EsSUFISzs7QUFLTixjQUFXLFNBQVNHLE9BQVQsR0FBbUI7QUFDN0IsV0FBT0gsT0FBUDtBQUNBLElBUEs7O0FBU047Ozs7Ozs7QUFPQSxjQUFXLFNBQVNJLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ25DLFFBQUc7QUFDRixZQUFPWixVQUFXTyxPQUFYLEVBQW9CSyxLQUFwQixNQUFnQ0EsS0FBdkM7O0FBRUEsS0FIRCxDQUdDLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU0sSUFBSVgsS0FBSixvQ0FBNkNVLEtBQTdDLFVBQXlEQyxNQUFNQyxLQUEvRCxDQUFOO0FBQ0E7QUFDRCxJQXZCSyxFQUFQOzs7QUEwQkEsRUE3QkQsQ0E2QkMsT0FBT0QsS0FBUCxFQUFjO0FBQ2QsUUFBTSxJQUFJWCxLQUFKLG9EQUE2RFcsTUFBTUMsS0FBbkUsQ0FBTjtBQUNBO0FBQ0QsQ0E1REQ7O0FBOERBQyxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoibWF4ZWxtLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm1heGVsbVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibWF4ZWxtL21heGVsbS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibWF4ZWxtLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm1heGVsbVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbWF4ZWxtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibWF4ZWxtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UmV0dXJucyB0aGUgbWF4aW11bSBlbGVtZW50IG9mIHRoZSBhcnJheSBiYXNlZCBvbiB0aGUgY29uZGl0aW9uLlxuXG5cdFx0RGVmYXVsdCBjb25kaXRpb24gdGVzdCBudW1iZXJzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5cbmNvbnN0IG1heGVsbSA9IGZ1bmN0aW9uIG1heGVsbSggYXJyYXksIGNvbmRpdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFwiWypdXCIsXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFkb3VidCggYXJyYXksIEFTX0FSUkFZICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGNvbmRpdGlvbiApICl7XG5cdFx0Y29uZGl0aW9uID0gKCBwcmV2aW91cywgbmV4dCApID0+IHtcblx0XHRcdGlmKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgbmV4dCA9PSBcIm51bWJlclwiICl7XG5cdFx0XHRcdHJldHVybiBNYXRoLm1heCggcHJldmlvdXMsIG5leHQgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgaW52YWxpZCBlbGVtZW50LCAkeyBwcmV2aW91cyB9LCAkeyBuZXh0IH1gICk7XG5cdFx0fTtcblx0fVxuXG5cdGlmKCB0eXBlb2YgY29uZGl0aW9uICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvblwiICk7XG5cdH1cblxuXHR0cnl7XG5cdFx0bGV0IG1heGltdW0gPSByYXplKCBhcnJheSApLnJlZHVjZSggKCBwcmV2aW91cywgbmV4dCApID0+IGNvbmRpdGlvbiggcHJldmlvdXMsIG5leHQgKSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdFwidG9TdHJpbmdcIjogZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdFx0XHRcdHJldHVybiBzdHJpbmdlKCBtYXhpbXVtICk7XG5cdFx0XHR9LFxuXG5cdFx0XHRcInZhbHVlT2ZcIjogZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0XHRcdFx0cmV0dXJuIG1heGltdW07XG5cdFx0XHR9LFxuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIGNvbmRpdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBpcyBncmVhdGVyIHRoYW5cblx0XHRcdFx0XHRcdHRoZSBjdXJyZW50IG1heGltdW0gdmFsdWUgZnJvbSB0aGUgYXJyYXksIG90aGVyd2lzZSBpdCBjb3VsZCBiZVxuXHRcdFx0XHRcdFx0ZXF1YWwgb3IgbGVzcyB0aGFuLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRcImNvbXBhcmVcIjogZnVuY3Rpb24gY29tcGFyZSggdmFsdWUgKXtcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdHJldHVybiBjb25kaXRpb24oIG1heGltdW0sIHZhbHVlICkgPT09IHZhbHVlO1xuXG5cdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgY29tcGFyZSBpbnZhbGlkIHZhbHVlLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGdldCBtYXhpbXVtIGVsZW1lbnQsIGNvbmRpdGlvbiBmYWlsZWQsICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWF4ZWxtO1xuIl19
//# sourceMappingURL=maxelm.support.js.map
