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
        fatalError("toto")
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
    func sendEvent(_ event: String) {
        eventEmitter?.sendEvent(withName: event, body: ["adId": adId])
    }
    
}

extension RNInReadAdView: TeadsAdDelegate {
    func willPresentModalView(ad: TeadsSDK.TeadsAd) -> UIViewController? {
        return nil
    }
    func didCatchError(ad: TeadsSDK.TeadsAd){
        sendEvent("didCatchError")
    }
    
    func didRecordImpression(ad: TeadsSDK.TeadsAd){
        sendEvent("didRecordImpression")
    }
    func didRecordClick(ad: TeadsSDK.TeadsAd){
        sendEvent("didRecordClick")
    }
    func didExpandedToFullscreen(ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("didExpandedToFullscreen",adId: ad.requestIdentifier.uuidString)
    }
    func didCollapsedFromFullscreen(ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("didCollapsedFromFullscreen",adId: ad.requestIdentifier.uuidString)
    }
    
}


extension RNInReadAdView : TeadsPlaybackDelegate{
    func adStartPlayingAudio(_ ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("adStartPlayingAudio",adId: ad.requestIdentifier.uuidString)
    }
    func adStopPlayingAudio(_ ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("adStopPlayingAudio",adId: ad.requestIdentifier.uuidString)
    }
    func didPlay(_ ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("didPlay",adId: ad.requestIdentifier.uuidString)
    }
    func didPause(_ ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("didPause",adId: ad.requestIdentifier.uuidString)
    }
    func didComplete(_ ad: TeadsSDK.TeadsAd){
        swiftBridge?.sendDataToJS("didComplete",adId: ad.requestIdentifier.uuidString)
    }
}


