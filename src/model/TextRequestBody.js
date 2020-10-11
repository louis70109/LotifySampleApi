/**
 * lotifySampleApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TextRequestBody model module.
 * @module model/TextRequestBody
 * @version 0.0.1
 */
class TextRequestBody {
    /**
     * Constructs a new <code>TextRequestBody</code>.
     * @alias module:model/TextRequestBody
     * @param token {String} 
     * @param message {String} 
     */
    constructor(token, message) { 
        
        TextRequestBody.initialize(this, token, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token, message) { 
        obj['token'] = token;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>TextRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextRequestBody} obj Optional instance to populate.
     * @return {module:model/TextRequestBody} The populated <code>TextRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextRequestBody();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
TextRequestBody.prototype['token'] = undefined;

/**
 * @member {String} message
 */
TextRequestBody.prototype['message'] = undefined;






export default TextRequestBody;

