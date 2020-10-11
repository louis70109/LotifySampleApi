"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ImageUrlRequestBody = _interopRequireDefault(require("../model/ImageUrlRequestBody"));

var _NotifyResponse = _interopRequireDefault(require("../model/NotifyResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Image service.
* @module api/ImageApi
* @version 0.0.1
*/
var ImageApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ImageApi. 
  * @alias module:api/ImageApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ImageApi(apiClient) {
    _classCallCheck(this, ImageApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the sendImageFile operation.
   * @callback module:api/ImageApi~sendImageFileCallback
   * @param {String} error Error message, if any.
   * @param {module:model/NotifyResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Send LINE Noitfy text message with file
   * @param {File} file Upload file
   * @param {String} message Send LINE Noitfy text message
   * @param {String} token LINE Notify access token
   * @param {module:api/ImageApi~sendImageFileCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/NotifyResponse}
   */


  _createClass(ImageApi, [{
    key: "sendImageFile",
    value: function sendImageFile(file, message, token, callback) {
      var postBody = null; // verify the required parameter 'file' is set

      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling sendImageFile");
      } // verify the required parameter 'message' is set


      if (message === undefined || message === null) {
        throw new Error("Missing the required parameter 'message' when calling sendImageFile");
      } // verify the required parameter 'token' is set


      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling sendImageFile");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': file,
        'message': message,
        'token': token
      };
      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['*/*', 'application/json'];
      var returnType = _NotifyResponse["default"];
      return this.apiClient.callApi('/notify/file', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sendImageUrl operation.
     * @callback module:api/ImageApi~sendImageUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotifyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send LINE Noitfy text message with image url
     * @param {module:model/ImageUrlRequestBody} body Send LINE Noitfy text message with image url
     * @param {module:api/ImageApi~sendImageUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotifyResponse}
     */

  }, {
    key: "sendImageUrl",
    value: function sendImageUrl(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendImageUrl");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _NotifyResponse["default"];
      return this.apiClient.callApi('/notify/url', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ImageApi;
}();

exports["default"] = ImageApi;