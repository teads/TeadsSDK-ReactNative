//
//  DPVideoAdvertising.swift
//  MobileAdsTeads
//
//  Created by Gaëtan De Brucker on 11/02/19.
//  Copyright © 2019 Persgroep. All rights reserved.
//

import MobileAdsBase
import UIKit
import TeadsSDK

public class DPVideoAdvertising: DPAdManager {
    
    public let model: DPTeadsAd
    public var callback: DPAdResponse?
    // FIXME: Try to mock the view and have this as a private property
    let teadsAdView: TFACustomAdView
    
    public init(teadsAd: DPTeadsAd, callback: DPAdResponse? = nil) {
        self.model = teadsAd
        self.callback = callback

        self.teadsAdView = TFACustomAdView(withPid: teadsAd.pid)
        self.teadsAdView.frame = CGRect(x: 0, y: 0, width: self.model.size.width, height: self.model.size.height)
        self.teadsAdView.delegate = self
        
    }
    
    public func load() {
        let teadsAdSettings = TeadsAdSettings(build: { (settings) in
            settings.enableDebug()
            settings.userConsent(subjectToGDPR: "1", consent: model.gdprConsent)
            if let pageUrl = model.pageUrl {
                settings.pageUrl(pageUrl)
            }
        })
        teadsAdView.load(teadsAdSettings: teadsAdSettings)
    }
}

extension DPVideoAdvertising: TFAAdDelegate {
    public func didReceiveAd(_ ad: TFAAdView, adRatio: CGFloat) {
        let adHeight = self.teadsAdView.frame.width / adRatio
        self.teadsAdView.frame = CGRect(x: 0, y: 0, width: self.teadsAdView.frame.width, height: adHeight)

        callback?.onSuccess(ad)
        callback?.onEvent?(DPTeadsEvent.adRatioReceived.rawValue, adRatio)
    }
    
    public func didFailToReceiveAd(_ ad: TFAAdView, adFailReason: AdFailReason) {
        callback?.onFailure?(NSError(
            domain: "Teads Error",
            code: adFailReason.errorCode.rawValue,
            userInfo: ["message": adFailReason.errorMessage]))
    }
    
    public func adBrowserDidOpen(_ ad: TFAAdView) {
        callback?.onEvent?(DPTeadsEvent.adBrowserOpened.rawValue, ad)
    }
    
    public func adBrowserDidClose(_ ad: TFAAdView) {
        callback?.onEvent?(DPTeadsEvent.adBrowserClosed.rawValue, ad)
    }
    
    public func adDidOpenFullscreen(_ ad: TFAAdView) {
        callback?.onEvent?(DPTeadsEvent.adFullscreenOpened.rawValue, ad)
    }
    
    public func adDidCloseFullscreen(_ ad: TFAAdView) {
        callback?.onEvent?(DPTeadsEvent.adFullscreenClosed.rawValue, ad)
    }
    
    public func adClose(_ ad: TFAAdView, userAction: Bool) {
        callback?.onEvent?(DPTeadsEvent.adClosed.rawValue, ad)
    }
    
    public func adError(_ ad: TFAAdView, errorMessage: String) {
        callback?.onFailure?(NSError(
            domain: "Teads Error Event",
            code: 999,
            userInfo: ["message": errorMessage]))
    }
    
    public func adDidChangeVolume(_ ad: TFAAdView, muted: Bool) {
        callback?.onEvent?(
            DPTeadsEvent.adVolumeChange.rawValue,
            muted ? DPTeadsVolumeEvent.adMuted.rawValue : DPTeadsVolumeEvent.adUnmuted.rawValue)
    }
    
    public func adPlaybackChange(_ ad: TFAAdView, state: TFACustomAdView.TeadsAdPlaybackState) {
        callback?.onEvent?(DPTeadsEvent.adPlaybackChange.rawValue, DPTeadsPlaybackStateConverter.convert(state))
    }
}
