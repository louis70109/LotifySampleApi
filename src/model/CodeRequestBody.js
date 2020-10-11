/**
 * lotify_sample_api
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
 * The CodeRequestBody model module.
 * @module model/CodeRequestBody
 * @version 0.0.1
 */
class CodeRequestBody {
    /**
     * Constructs a new <code>CodeRequestBody</code>.
     * @alias module:model/CodeRequestBody
     * @param clientId {String} 
     * @param clientSecret {String} 
     * @param redirectUri {String} 
     * @param code {String} 
     */
    constructor(clientId, clientSecret, redirectUri, code) { 
        
        CodeRequestBody.initialize(this, clientId, clientSecret, redirectUri, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, clientSecret, redirectUri, code) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeRequestBody();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('redirect_uri')) {
                obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

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






export default CodeRequestBody;

