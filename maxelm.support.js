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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1heGVsbS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImZhbHp5IiwicmF6ZSIsInN0cmluZ2UiLCJtYXhlbG0iLCJhcnJheSIsImNvbmRpdGlvbiIsIkFTX0FSUkFZIiwiRXJyb3IiLCJwcmV2aW91cyIsIm5leHQiLCJNYXRoIiwibWF4IiwibWF4aW11bSIsInJlZHVjZSIsInRvU3RyaW5nIiwidmFsdWVPZiIsImNvbXBhcmUiLCJ2YWx1ZSIsImVycm9yIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksU0FBUyxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF3QkMsU0FBeEIsRUFBbUM7QUFDakQ7Ozs7Ozs7OztBQVNBLEtBQUksQ0FBQ1AsTUFBT00sS0FBUCxFQUFjRSxRQUFkLENBQUwsRUFBK0I7QUFDOUIsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVAsTUFBT0ssU0FBUCxDQUFKLEVBQXdCO0FBQ3ZCQSxjQUFZLG1CQUFFRyxRQUFGLEVBQVlDLElBQVosRUFBc0I7QUFDakMsT0FBSSxPQUFPRCxRQUFQLElBQW1CLFFBQW5CLElBQStCLE9BQU9DLElBQVAsSUFBZSxRQUFsRCxFQUE0RDtBQUMzRCxXQUFPQyxLQUFLQyxHQUFMLENBQVVILFFBQVYsRUFBb0JDLElBQXBCLENBQVA7QUFDQTs7QUFFRCxTQUFNLElBQUlGLEtBQUosdUJBQWdDQyxRQUFoQyxVQUErQ0MsSUFBL0MsQ0FBTjtBQUNBLEdBTkQ7QUFPQTs7QUFFRCxLQUFJLE9BQU9KLFNBQVAsSUFBb0IsVUFBeEIsRUFBb0M7QUFDbkMsUUFBTSxJQUFJRSxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUc7QUFDRixNQUFJSyxVQUFVWCxLQUFNRyxLQUFOLEVBQWNTLE1BQWQsQ0FBc0IsVUFBRUwsUUFBRixFQUFZQyxJQUFaLFVBQXNCSixVQUFXRyxRQUFYLEVBQXFCQyxJQUFyQixDQUF0QixFQUF0QixDQUFkOztBQUVBLFNBQU87QUFDTixlQUFZLFNBQVNLLFFBQVQsR0FBb0I7QUFDL0IsV0FBT1osUUFBU1UsT0FBVCxDQUFQO0FBQ0EsSUFISzs7QUFLTixjQUFXLFNBQVNHLE9BQVQsR0FBbUI7QUFDN0IsV0FBT0gsT0FBUDtBQUNBLElBUEs7O0FBU047Ozs7Ozs7QUFPQSxjQUFXLFNBQVNJLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ25DLFFBQUc7QUFDRixZQUFPWixVQUFXTyxPQUFYLEVBQW9CSyxLQUFwQixNQUFnQ0EsS0FBdkM7O0FBRUEsS0FIRCxDQUdDLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU0sSUFBSVgsS0FBSixvQ0FBNkNVLEtBQTdDLFVBQXlEQyxNQUFNQyxLQUEvRCxDQUFOO0FBQ0E7QUFDRCxJQXZCSyxFQUFQOzs7QUEwQkEsRUE3QkQsQ0E2QkMsT0FBT0QsS0FBUCxFQUFjO0FBQ2QsUUFBTSxJQUFJWCxLQUFKLG9EQUE2RFcsTUFBTUMsS0FBbkUsQ0FBTjtBQUNBO0FBQ0QsQ0E1REQ7O0FBOERBQyxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoibWF4ZWxtLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibWF4ZWxtXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIm1heGVsbS9tYXhlbG0uanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibWF4ZWxtLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwibWF4ZWxtXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL21heGVsbS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwibWF4ZWxtLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UmV0dXJucyB0aGUgbWF4aW11bSBlbGVtZW50IG9mIHRoZSBhcnJheSBiYXNlZCBvbiB0aGUgY29uZGl0aW9uLlxyXG5cclxuXHRcdERlZmF1bHQgY29uZGl0aW9uIHRlc3QgbnVtYmVycy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XHJcblxyXG5jb25zdCBtYXhlbG0gPSBmdW5jdGlvbiBtYXhlbG0oIGFycmF5LCBjb25kaXRpb24gKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFwiWypdXCIsXHJcblx0XHRcdFx0XCJjb25kaXRpb25cIjogXCJmdW5jdGlvblwiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoICFkb3VidCggYXJyYXksIEFTX0FSUkFZICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggY29uZGl0aW9uICkgKXtcclxuXHRcdGNvbmRpdGlvbiA9ICggcHJldmlvdXMsIG5leHQgKSA9PiB7XHJcblx0XHRcdGlmKCB0eXBlb2YgcHJldmlvdXMgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgbmV4dCA9PSBcIm51bWJlclwiICl7XHJcblx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KCBwcmV2aW91cywgbmV4dCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBpbnZhbGlkIGVsZW1lbnQsICR7IHByZXZpb3VzIH0sICR7IG5leHQgfWAgKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIGNvbmRpdGlvbiAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvblwiICk7XHJcblx0fVxyXG5cclxuXHR0cnl7XHJcblx0XHRsZXQgbWF4aW11bSA9IHJhemUoIGFycmF5ICkucmVkdWNlKCAoIHByZXZpb3VzLCBuZXh0ICkgPT4gY29uZGl0aW9uKCBwcmV2aW91cywgbmV4dCApICk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0XCJ0b1N0cmluZ1wiOiBmdW5jdGlvbiB0b1N0cmluZyggKXtcclxuXHRcdFx0XHRyZXR1cm4gc3RyaW5nZSggbWF4aW11bSApO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0XCJ2YWx1ZU9mXCI6IGZ1bmN0aW9uIHZhbHVlT2YoICl7XHJcblx0XHRcdFx0cmV0dXJuIG1heGltdW07XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKjtcclxuXHRcdFx0XHRAbm90ZTpcclxuXHRcdFx0XHRcdElmIHRoZSBjb25kaXRpb24gcmV0dXJucyB0aGUgdmFsdWUgbWVhbnMgdGhhdCB0aGUgdmFsdWUgaXMgZ3JlYXRlciB0aGFuXHJcblx0XHRcdFx0XHRcdHRoZSBjdXJyZW50IG1heGltdW0gdmFsdWUgZnJvbSB0aGUgYXJyYXksIG90aGVyd2lzZSBpdCBjb3VsZCBiZVxyXG5cdFx0XHRcdFx0XHRlcXVhbCBvciBsZXNzIHRoYW4uXHJcblx0XHRcdFx0QGVuZC1ub3RlXHJcblx0XHRcdCovXHJcblx0XHRcdFwiY29tcGFyZVwiOiBmdW5jdGlvbiBjb21wYXJlKCB2YWx1ZSApe1xyXG5cdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdHJldHVybiBjb25kaXRpb24oIG1heGltdW0sIHZhbHVlICkgPT09IHZhbHVlO1xyXG5cclxuXHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgY29tcGFyZSBpbnZhbGlkIHZhbHVlLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IGdldCBtYXhpbXVtIGVsZW1lbnQsIGNvbmRpdGlvbiBmYWlsZWQsICR7IGVycm9yLnN0YWNrIH1gICk7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtYXhlbG07XHJcbiJdfQ==
//# sourceMappingURL=maxelm.support.js.map
