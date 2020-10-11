"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CodeRequestBody = _interopRequireDefault(require("../model/CodeRequestBody"));

var _CodeResponse = _interopRequireDefault(require("../model/CodeResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Code service.
* @module api/CodeApi
* @version 0.0.1
*/
var CodeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CodeApi. 
  * @alias module:api/CodeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CodeApi(apiClient) {
    _classCallCheck(this, CodeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the codeChangeToken operation.
   * @callback module:api/CodeApi~codeChangeTokenCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CodeResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Change token
   * @param {module:model/CodeRequestBody} body Code
   * @param {module:api/CodeApi~codeChangeTokenCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CodeResponse}
   */


  _createClass(CodeApi, [{
    key: "codeChangeToken",
    value: function codeChangeToken(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling codeChangeToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _CodeResponse["default"];
      return this.apiClient.callApi('/notify/change', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CodeApi;
}();

exports["default"] = CodeApi;