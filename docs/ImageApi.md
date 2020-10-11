# LotifySampleApi.ImageApi

All URIs are relative to *https://mopcon-demo.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendImageFile**](ImageApi.md#sendImageFile) | **POST** /notify/file | 
[**sendImageUrl**](ImageApi.md#sendImageUrl) | **POST** /notify/url | 



## sendImageFile

> NotifyResponse sendImageFile(file, message, token)



Send LINE Noitfy text message with file

### Example

```javascript
import LotifySampleApi from 'lotify_sample_api';

let apiInstance = new LotifySampleApi.ImageApi();
let file = "/path/to/file"; // File | Upload file
let message = "message_example"; // String | Send LINE Noitfy text message
let token = "token_example"; // String | LINE Notify access token
apiInstance.sendImageFile(file, message, token, (error, data, response) => {
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
 **file** | **File**| Upload file | 
 **message** | **String**| Send LINE Noitfy text message | 
 **token** | **String**| LINE Notify access token | 

### Return type

[**NotifyResponse**](NotifyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: */*, application/json


## sendImageUrl

> NotifyResponse sendImageUrl(body)



Send LINE Noitfy text message with image url

### Example

```javascript
import LotifySampleApi from 'lotify_sample_api';

let apiInstance = new LotifySampleApi.ImageApi();
let body = new LotifySampleApi.ImageUrlRequestBody(); // ImageUrlRequestBody | Send LINE Noitfy text message with image url
apiInstance.sendImageUrl(body, (error, data, response) => {
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
 **body** | [**ImageUrlRequestBody**](ImageUrlRequestBody.md)| Send LINE Noitfy text message with image url | 

### Return type

[**NotifyResponse**](NotifyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

