//
//  RNInReadAdView.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 12/01/2023.
//

import TeadsSDK
import UIKit
import React

@objc(RNInReadAdView)
final class RNInReadAdView: UIView{
    private let inReadAdView = TeadsInReadAdView()
    var swiftBridge : SwiftBridge?
    let eventEmitter : RCTEventEmitter?
    override init(frame: CGRect) {
        eventEmitter = RCTBridge.current().module(for: TeadsAdLifecycleEvents.self) as? RCTEventEmitter
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    @objc var adId : String? {
        didSet {
            guard let adId = adId else {
                return
            }
            do {
                let teadsAd: TeadsInReadAd = try RNTeadsInstanceManager.shared.instance(for: adId)
                teadsAd.delegate = self
                teadsAd.playbackDelegate = self
                inReadAdView.bind(teadsAd)
                self.inReadAdView.bind(teadsAd)
                inReadAdView.translatesAutoresizingMaskIntoConstraints = false
                self.addSubview(inReadAdView)
                NSLayoutConstraint.activate([
                    leadingAnchor.constraint(equalTo: inReadAdView.leadingAnchor),
                    trailingAnchor.constraint(equalTo: inReadAdView.trailingAnchor),
                    topAnchor.constraint(equalTo: inReadAdView.topAnchor),
                    bottomAnchor.constraint(equalTo: inReadAdView.bottomAnchor)
                ])
            } catch {
                return
            }
        }
    }
    func sendEventWithError(_ event: String,  error: Error) {
        eventEmitter?.sendEvent(withName: event, body: ["adId": adId , "error": error])
    }
    func sendEvent(_ event: String) {
        eventEmitter?.sendEvent(withName: event, body: ["adId": adId ])
    }
}

extension RNInReadAdView: TeadsAdDelegate {
    func willPresentModalView(ad: TeadsSDK.TeadsAd) -> UIViewController? {
        return nil
    }
    func didCatchError(ad: TeadsSDK.TeadsAd, error: Error){
        sendEventWithError("didCatchError", error: error)
    }
    
    func didRecordImpression(ad: TeadsSDK.TeadsAd){
        sendEvent("didRecordImpression")
    }
    func didRecordClick(ad: TeadsSDK.TeadsAd){
        sendEvent("didRecordClick")
    }
    func didExpandedToFullscreen(ad: TeadsSDK.TeadsAd){
        sendEvent("didExpandedToFullscreen")
    }
    func didCollapsedFromFullscreen(ad: TeadsSDK.TeadsAd){
        sendEvent("didCollapsedFromFullscreen")
    }
    func didFailToReceiveAd(reason: TeadsSDK.AdFailReason){
        sendEvent("didFailToReceiveAd")
    }
    func adOpportunityTrackerView(trackerView: TeadsSDK.TeadsAdOpportunityTrackerView){
        sendEvent("adOpportunityTrackerView")
    }
    
}


extension RNInReadAdView : TeadsPlaybackDelegate{
    func adStartPlayingAudio(_ ad: TeadsSDK.TeadsAd){
        sendEvent("adStartPlayingAudio")
    }
    func adStopPlayingAudio(_ ad: TeadsSDK.TeadsAd){
        sendEvent("adStopPlayingAudio")
    }
    func didPlay(_ ad: TeadsSDK.TeadsAd){
        sendEvent("didPlay")
    }
    func didPause(_ ad: TeadsSDK.TeadsAd){
        sendEvent("didPause")
    }
    func didComplete(_ ad: TeadsSDK.TeadsAd){
        sendEvent("didComplete")
    }
}


