//
//  RNInReadAdView.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 12/01/2023.
//

import TeadsSDK
import UIKit

@objc(RNInReadAdView)
final class RNInReadAdView: UIView{
    private let inReadAdView = TeadsInReadAdView()
    
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
    
}

extension RNInReadAdView: TeadsAdDelegate {
    func willPresentModalView(ad: TeadsSDK.TeadsAd) -> UIViewController? {
        return nil
    }
    func didCatchError(ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didCatchError",adId: ad.requestIdentifier.uuidString)
    }
    func didRecordImpression(ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didRecordImpression",adId: ad.requestIdentifier.uuidString)
    }
    func didRecordClick(ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didRecordClick",adId: ad.requestIdentifier.uuidString)
    }
    func didExpandedToFullscreen(ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didExpandedToFullscreen",adId: ad.requestIdentifier.uuidString)
    }
    func didCollapsedFromFullscreen(ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didCollapsedFromFullscreen",adId: ad.requestIdentifier.uuidString)
    }
    
}


extension RNInReadAdView : TeadsPlaybackDelegate{
    func adStartPlayingAudio(_ ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("adStartPlayingAudio",adId: ad.requestIdentifier.uuidString)
    }
    func adStopPlayingAudio(_ ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("adStopPlayingAudio",adId: ad.requestIdentifier.uuidString)
    }
    func didPlay(_ ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didPlay",adId: ad.requestIdentifier.uuidString)
    }
    func didPause(_ ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didPause",adId: ad.requestIdentifier.uuidString)
    }
    func didComplete(_ ad: TeadsSDK.TeadsAd){
        let swiftBridge = SwiftBridge()
        swiftBridge.sendDataToJS("didComplete",adId: ad.requestIdentifier.uuidString)
    }
}


