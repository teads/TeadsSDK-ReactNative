//
//  TeadsAdView.m
//  teads-sdk-v4-react-native-sample
//
//  Created by Hugo Gresse on 16/04/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <TeadsSDK/TeadsSDK.h>
#import <React/RCTViewManager.h>

@interface RNTeadsManager : RCTViewManager<TFAAdDelegate>
@end

@implementation RNTeadsManager

RCT_EXPORT_MODULE(TFACustomAdView)
RCT_EXPORT_VIEW_PROPERTY(debugEnable, BOOL)

- (UIView *)view
{
    TeadsAdSettings *adSettings = [[TeadsAdSettings alloc]initWithBuild:^(TeadsAdSettings * setting) {
        [setting disableLocation];
        [setting enableDebug];
    }];
    TFACustomAdView *adView = [[TFACustomAdView alloc] initWithPid:84242 andDelegate:self];
    [adView loadWithTeadsAdSettings:adSettings];
    return adView;
}

- (void)adClose:(TFAAdView * _Nonnull)ad userAction:(BOOL)userAction {
    
}

- (void)adError:(TFAAdView * _Nonnull)ad errorMessage:(NSString * _Nonnull)errorMessage {
    
}

- (void)didFailToReceiveAd:(TFAAdView * _Nonnull)ad adFailReason:(AdFailReason * _Nonnull)adFailReason {
    
}

- (void)didReceiveAd:(TFAAdView * _Nonnull)ad adRatio:(CGFloat)adRatio {
    ad.frame = CGRectMake(0, 0, ad.superview.frame.size.width, ad.superview.frame.size.width / adRatio);
    
}

@end
