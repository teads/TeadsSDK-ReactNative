//
//  RNAd.m
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 10/11/2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNAd, NSObject)

RCT_EXTERN_METHOD(
                  delegate:(NSString)requestIdentifier
                  resolve:(RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end
