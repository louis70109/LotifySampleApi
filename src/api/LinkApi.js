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


import ApiClient from "../ApiClient";
import LinkRequestBody from '../model/LinkRequestBody';
import LinkResponse from '../model/LinkResponse';

/**
* Link service.
* @module api/LinkApi
* @version 0.0.1
*/
export default class LinkApi {

    /**
    * Constructs a new LinkApi. 
    * @alias module:api/LinkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    getLink(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getLink");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*', 'application/json'];
      let returnType = LinkResponse;
      return this.apiClient.callApi(
        '/notify/link', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
