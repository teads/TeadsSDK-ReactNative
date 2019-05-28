//
//  TeadsAdView.h
//  teads-sdk-v4-react-native-sample
//
//  Created by Hugo Gresse on 17/04/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

#import <TeadsSDK/TeadsSDK.h>
#import <React/RCTComponent.h>

@interface TeadsAdView: TFACustomAdView

@property (nonatomic, copy) RCTBubblingEventBlock onTeadsAdLoaded;

@end
