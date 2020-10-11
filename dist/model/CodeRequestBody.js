"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CodeRequestBody model module.
 * @module model/CodeRequestBody
 * @version 0.0.1
 */
var CodeRequestBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CodeRequestBody</code>.
   * @alias module:model/CodeRequestBody
   * @param clientId {String} 
   * @param clientSecret {String} 
   * @param redirectUri {String} 
   * @param code {String} 
   */
  function CodeRequestBody(clientId, clientSecret, redirectUri, code) {
    _classCallCheck(this, CodeRequestBody);

    CodeRequestBody.initialize(this, clientId, clientSecret, redirectUri, code);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CodeRequestBody, null, [{
    key: "initialize",
    value: function initialize(obj, clientId, clientSecret, redirectUri, code) {
      obj['client_id'] = clientId;
      obj['client_secret'] = clientSecret;
      obj['redirect_uri'] = redirectUri;
      obj['code'] = code;
    }
    /**
     * Constructs a <code>CodeRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeRequestBody} obj Optional instance to populate.
     * @return {module:model/CodeRequestBody} The populated <code>CodeRequestBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CodeRequestBody();

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('redirect_uri')) {
          obj['redirect_uri'] = _ApiClient["default"].convertToType(data['redirect_uri'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CodeRequestBody;
}();
/**
 * @member {String} client_id
 */


CodeRequestBody.prototype['client_id'] = undefined;
/**
 * @member {String} client_secret
 */

CodeRequestBody.prototype['client_secret'] = undefined;
/**
 * @member {String} redirect_uri
 */

CodeRequestBody.prototype['redirect_uri'] = undefined;
/**
 * @member {String} code
 */

CodeRequestBody.prototype['code'] = undefined;
var _default = CodeRequestBody;
exports["default"] = _default;