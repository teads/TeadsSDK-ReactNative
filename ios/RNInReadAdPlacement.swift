//
//  RNInReadAdPlacement.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 10/11/2022.
//
import Foundation
import TeadsSDK

@objc(RNInReadAdPlacement)
class RNInReadAdPlacement: NSObject {
    
    @objc
    func requestAd(_ settingsMap:NSArray, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        if let data = try? JSONSerialization.data(withJSONObject: settingsMap, options: .prettyPrinted) {
            let decoder = JSONDecoder()
            if let settings = try? decoder.decode(TeadsAdRequestSettings.self, from: data) {
                //RNTeadsInReadAdInstanceManager.shared.placement? = self
                if let id = RNTeadsInReadAdInstanceManager.shared.placement?.requestAd(requestSettings: settings) {
                    resolve(id.uuidString)
                } else {
                    let error = NSError(domain: "", code: 200, userInfo: nil)
                    reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement", error)
                }
            }
        }
        else {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement", error)
        }
    }
}

extension RNInReadAdPlacement: TeadsAdPlacementDelegate {
    func didFailToReceiveAd(reason: AdFailReason) {
        print("didFailToReceiveAd")
    }
    
    func adOpportunityTrackerView(trackerView: TeadsAdOpportunityTrackerView) {
        print("adOpportunityTrackerView")
    }
    
    
    func didReceiveAd(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
        RNTeadsInReadAdInstanceManager.shared.new(instance: RNInReadAdInstanceMap(teadsAd: ad, adRatio: adRatio))
        //channel.invokeMethod("didReceiveAd", arguments: [ad.requestIdentifier.uuidString])
    }
    
    func didUpdateRatio(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
        //channel.invokeMethod("didUpdateRatio", arguments: [ad.requestIdentifier.uuidString])
    }
    
}
