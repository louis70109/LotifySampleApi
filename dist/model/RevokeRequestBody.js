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
 * The RevokeRequestBody model module.
 * @module model/RevokeRequestBody
 * @version 0.0.1
 */
var RevokeRequestBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RevokeRequestBody</code>.
   * @alias module:model/RevokeRequestBody
   * @param token {String} 
   */
  function RevokeRequestBody(token) {
    _classCallCheck(this, RevokeRequestBody);

    RevokeRequestBody.initialize(this, token);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevokeRequestBody, null, [{
    key: "initialize",
    value: function initialize(obj, token) {
      obj['token'] = token;
    }
    /**
     * Constructs a <code>RevokeRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeRequestBody} obj Optional instance to populate.
     * @return {module:model/RevokeRequestBody} The populated <code>RevokeRequestBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevokeRequestBody();

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RevokeRequestBody;
}();
/**
 * @member {String} token
 */


RevokeRequestBody.prototype['token'] = undefined;
var _default = RevokeRequestBody;
exports["default"] = _default;