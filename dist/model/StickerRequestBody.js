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
 * The StickerRequestBody model module.
 * @module model/StickerRequestBody
 * @version 0.0.1
 */
var StickerRequestBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StickerRequestBody</code>.
   * @alias module:model/StickerRequestBody
   * @param token {String} 
   * @param message {String} 
   * @param stickerId {Number} 
   * @param packageId {Number} 
   */
  function StickerRequestBody(token, message, stickerId, packageId) {
    _classCallCheck(this, StickerRequestBody);

    StickerRequestBody.initialize(this, token, message, stickerId, packageId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StickerRequestBody, null, [{
    key: "initialize",
    value: function initialize(obj, token, message, stickerId, packageId) {
      obj['token'] = token;
      obj['message'] = message;
      obj['sticker_id'] = stickerId;
      obj['package_id'] = packageId;
    }
    /**
     * Constructs a <code>StickerRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StickerRequestBody} obj Optional instance to populate.
     * @return {module:model/StickerRequestBody} The populated <code>StickerRequestBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StickerRequestBody();

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('sticker_id')) {
          obj['sticker_id'] = _ApiClient["default"].convertToType(data['sticker_id'], 'Number');
        }

        if (data.hasOwnProperty('package_id')) {
          obj['package_id'] = _ApiClient["default"].convertToType(data['package_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return StickerRequestBody;
}();
/**
 * @member {String} token
 */


StickerRequestBody.prototype['token'] = undefined;
/**
 * @member {String} message
 */

StickerRequestBody.prototype['message'] = undefined;
/**
 * @member {Number} sticker_id
 */

StickerRequestBody.prototype['sticker_id'] = undefined;
/**
 * @member {Number} package_id
 */

StickerRequestBody.prototype['package_id'] = undefined;
var _default = StickerRequestBody;
exports["default"] = _default;