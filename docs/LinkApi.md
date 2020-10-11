# LotifySampleApi.LinkApi

All URIs are relative to *https://mopcon-demo.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLink**](LinkApi.md#getLink) | **POST** /notify/link | 



## getLink

> LinkResponse getLink(body)



Get link

### Example

```javascript
import LotifySampleApi from 'lotify_sample_api';

let apiInstance = new LotifySampleApi.LinkApi();
let body = new LotifySampleApi.LinkRequestBody(); // LinkRequestBody | get link
apiInstance.getLink(body, (error, data, response) => {
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
 **body** | [**LinkRequestBody**](LinkRequestBody.md)| get link | 

### Return type

[**LinkResponse**](LinkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

