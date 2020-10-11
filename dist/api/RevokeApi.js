"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotifyResponse = _interopRequireDefault(require("../model/NotifyResponse"));

var _RevokeRequestBody = _interopRequireDefault(require("../model/RevokeRequestBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Revoke service.
* @module api/RevokeApi
* @version 0.0.1
*/
var RevokeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RevokeApi. 
  * @alias module:api/RevokeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RevokeApi(apiClient) {
    _classCallCheck(this, RevokeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the revokeToken operation.
   * @callback module:api/RevokeApi~revokeTokenCallback
   * @param {String} error Error message, if any.
   * @param {module:model/NotifyResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Revoke token
   * @param {module:model/RevokeRequestBody} body Revoke token
   * @param {module:api/RevokeApi~revokeTokenCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/NotifyResponse}
   */


  _createClass(RevokeApi, [{
    key: "revokeToken",
    value: function revokeToken(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling revokeToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _NotifyResponse["default"];
      return this.apiClient.callApi('/notify/revoke', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RevokeApi;
}();

exports["default"] = RevokeApi;