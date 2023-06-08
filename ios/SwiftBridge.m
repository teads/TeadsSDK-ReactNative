//
//  SwiftBridge.m
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 08/06/2023.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(SwiftBridge, NSObject)
RCT_EXTERN_METHOD(sendDataToJS:(NSString *)data)
@end
