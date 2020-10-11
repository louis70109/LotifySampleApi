# LotifySampleApi.StickerApi

All URIs are relative to *https://mopcon-demo.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendSticker**](StickerApi.md#sendSticker) | **POST** /notify/sticker | 



## sendSticker

> NotifyResponse sendSticker(body)



Send LINE Noitfy text message with sticker

### Example

```javascript
import LotifySampleApi from 'lotify_sample_api';

let apiInstance = new LotifySampleApi.StickerApi();
let body = new LotifySampleApi.StickerRequestBody(); // StickerRequestBody | Send LINE Noitfy text message with sticker
apiInstance.sendSticker(body, (error, data, response) => {
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
 **body** | [**StickerRequestBody**](StickerRequestBody.md)| Send LINE Noitfy text message with sticker | 

### Return type

[**NotifyResponse**](NotifyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*, application/json

