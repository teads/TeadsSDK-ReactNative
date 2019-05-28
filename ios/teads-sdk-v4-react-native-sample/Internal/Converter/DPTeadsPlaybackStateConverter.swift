//
//  TeadsPlaybackEventConverter.swift
//  MobileAdsTeads
//
//  Created by Gaëtan De Brucker on 12/02/19.
//  Copyright © 2019 Persgroep. All rights reserved.
//

import UIKit
import TeadsSDK

class DPTeadsPlaybackStateConverter {

    public static func convert(_ playbackEvent: TFACustomAdView.TeadsAdPlaybackState) -> String {
        switch playbackEvent {
        case .playbackStateStarted:
            return "STARTED"
        case .playbackStatePaused:
            return "PAUSED"
        case .playbackStateCompleted:
            return "COMPLETE"
        }
    }
}
