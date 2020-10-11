"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinkRequestBody = _interopRequireDefault(require("../model/LinkRequestBody"));

var _LinkResponse = _interopRequireDefault(require("../model/LinkResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Link service.
* @module api/LinkApi
* @version 0.0.1
*/
var LinkApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LinkApi. 
  * @alias module:api/LinkApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LinkApi(apiClient) {
    _classCallCheck(this, LinkApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getLink operation.
   * @callback module:api/LinkApi~getLinkCallback
   * @param {String} error Error message, if any.
   * @param {module:model/LinkResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get link
   * @param {module:model/LinkRequestBody} body get link
   * @param {module:api/LinkApi~getLinkCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/LinkResponse}
   */


  _createClass(LinkApi, [{
    key: "getLink",
    value: function getLink(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getLink");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*', 'application/json'];
      var returnType = _LinkResponse["default"];
      return this.apiClient.callApi('/notify/link', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LinkApi;
}();

exports["default"] = LinkApi;