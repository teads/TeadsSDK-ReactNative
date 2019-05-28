//
//  DPTeadsEvent.swift
//  MobileAdsTeads
//
//  Created by Gaëtan De Brucker on 11/02/19.
//  Copyright © 2019 Persgroep. All rights reserved.
//

import UIKit

public enum DPTeadsEvent: String {
    case adDisplayed = "AD_DISPLAYED"
    case adClicked = "AD_CLICKED"
    case adClosed = "AD_CLOSED"
    case adBrowserOpened = "AD_BROWSER_OPENED"
    case adBrowserClosed = "AD_BROWSER_CLOSED"
    case adLeftApplication = "AD_LEFT_APPLICATION"
    case adPlaybackChange = "AD_PLAYBACK_CHANGE"
    case adVolumeChange = "AD_VOLUME_CHANGE"
    case adRatioReceived = "AD_RATIO_RECEIVED"
    case adFullscreenOpened = "AD_FULLSCREEN_OPENED"
    case adFullscreenClosed = "AD_FULLSCREEN_CLOSED"
}

public enum DPTeadsVolumeEvent: String {
    case adMuted = "AD_MUTED"
    case adUnmuted = "AD_UNMUTED"
}
