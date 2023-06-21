//
//  RNAdRatio.m
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 30/03/2023.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNAdRatio, NSObject)


RCT_EXTERN_METHOD(
                  calculateHeight:(float)width
                  requestIdentifier:(NSString)requestIdentifier
                  resolve: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )


+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

@end
