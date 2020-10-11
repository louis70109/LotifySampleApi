# LotifySampleApi.CodeApi

All URIs are relative to *https://mopcon-demo.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeChangeToken**](CodeApi.md#codeChangeToken) | **POST** /notify/change | 



## codeChangeToken

> CodeResponse codeChangeToken(body)



Change token

### Example

```javascript
import LotifySampleApi from 'lotify_sample_api';

let apiInstance = new LotifySampleApi.CodeApi();
let body = new LotifySampleApi.CodeRequestBody(); // CodeRequestBody | Code
apiInstance.codeChangeToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CodeRequestBody**](CodeRequestBody.md)| Code | 

### Return type

[**CodeResponse**](CodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

