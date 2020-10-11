"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotifyResponse = _interopRequireDefault(require("../model/NotifyResponse"));

var _StickerRequestBody = _interopRequireDefault(require("../model/StickerRequestBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Sticker service.
* @module api/StickerApi
* @version 0.0.1
*/
var StickerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StickerApi. 
  * @alias module:api/StickerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StickerApi(apiClient) {
    _classCallCheck(this, StickerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the sendSticker operation.
   * @callback module:api/StickerApi~sendStickerCallback
   * @param {String} error Error message, if any.
   * @param {module:model/NotifyResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Send LINE Noitfy text message with sticker
   * @param {module:model/StickerRequestBody} body Send LINE Noitfy text message with sticker
   * @param {module:api/StickerApi~sendStickerCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/NotifyResponse}
   */


  _createClass(StickerApi, [{
    key: "sendSticker",
    value: function sendSticker(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendSticker");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _NotifyResponse["default"];
      return this.apiClient.callApi('/notify/sticker', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return StickerApi;
}();

exports["default"] = StickerApi;