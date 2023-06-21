//
//  RNTeads.m
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 21/12/2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNTeads, NSObject)

RCT_EXTERN_METHOD(
                  createInReadPlacement:(float)pid
                  settingsMap: (NSDictionary *)settingsMap
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject: (RCTPromiseRejectBlock)reject
                  )

//to be done native part
RCT_EXTERN_METHOD(
                  createNative:(NSString)urlString
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
