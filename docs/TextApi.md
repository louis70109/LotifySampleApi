# LotifySampleApi.TextApi

All URIs are relative to *https://mopcon-demo.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendText**](TextApi.md#sendText) | **POST** /notify/send | 



## sendText

> NotifyResponse sendText(body)



Send LINE Noitfy text message

### Example

```javascript
import LotifySampleApi from 'lotify_sample_api';

let apiInstance = new LotifySampleApi.TextApi();
let body = new LotifySampleApi.TextRequestBody(); // TextRequestBody | Send LINE Noitfy text message
apiInstance.sendText(body, (error, data, response) => {
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
 **body** | [**TextRequestBody**](TextRequestBody.md)| Send LINE Noitfy text message | 

### Return type

[**NotifyResponse**](NotifyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

