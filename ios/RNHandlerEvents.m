#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(RNHandlerEvents, RCTEventEmitter)
RCT_EXTERN_METHOD(sendCustomEvent:(NSDictionary *)data)
@end

