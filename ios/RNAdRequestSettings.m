//
//  RNAdRequestSettings.m
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNAdRequestSettings, NSObject)


RCT_EXTERN_METHOD(
                  enableValidationMode: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )

RCT_EXTERN_METHOD(
                  pageUrl:(NSString)urlString
                  resolve:(RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )

RCT_EXTERN_METHOD(
                  addExtras:(NSString)value
                  key:(NSString)key
                  resolve: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )



+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end

