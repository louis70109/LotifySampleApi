"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotifyResponse = _interopRequireDefault(require("../model/NotifyResponse"));

var _TextRequestBody = _interopRequireDefault(require("../model/TextRequestBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Text service.
* @module api/TextApi
* @version 0.0.1
*/
var TextApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TextApi. 
  * @alias module:api/TextApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TextApi(apiClient) {
    _classCallCheck(this, TextApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the sendText operation.
   * @callback module:api/TextApi~sendTextCallback
   * @param {String} error Error message, if any.
   * @param {module:model/NotifyResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Send LINE Noitfy text message
   * @param {module:model/TextRequestBody} body Send LINE Noitfy text message
   * @param {module:api/TextApi~sendTextCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/NotifyResponse}
   */


  _createClass(TextApi, [{
    key: "sendText",
    value: function sendText(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendText");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _NotifyResponse["default"];
      return this.apiClient.callApi('/notify/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TextApi;
}();

exports["default"] = TextApi;