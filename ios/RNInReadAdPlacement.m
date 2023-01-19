//
//  RNInReadAdPlacement.m
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 10/11/2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNInReadAdPlacement, NSObject)

RCT_EXTERN_METHOD(
                  requestAd:(float)pid
                    settingsMap:(NSDictionary *)settingsMap
                    resolve:(RCTPromiseResolveBlock)resolve
                    reject: (RCTPromiseRejectBlock)reject
                  )

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end

