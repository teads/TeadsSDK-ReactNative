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
    func requestAd(_ pid: Float, settingsMap:NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let decoder = JSONDecoder()
        if let data = json(from: settingsMap) {
            do {
                let settings = try decoder.decode(TeadsAdRequestSettings.self, from: data)
                let placement: TeadsInReadAdPlacement = try RNTeadsInstanceManager.shared.placement(for: pid)
                placement.delegate = self
                let id = placement.requestAd(requestSettings: settings)
                resolve(id.uuidString)
            } catch {
                reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement requestAd", error)
            }
        } else {
            reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement requestAd", RCTErrorWithMessage("BAD_ARGS: Wrong argument types"))
        }
    }
    
    func json(from object:Any) -> Data? {
        guard let data = try? JSONSerialization.data(withJSONObject: object, options: .prettyPrinted) else {   return nil
        }
        return data
    }
    
    func didFailToReceiveAd(reason: AdFailReason) {
        print("didFailToReceiveAd")
    }
    
    func adOpportunityTrackerView(trackerView: TeadsAdOpportunityTrackerView) {
        //nothing
    }
    
}



extension RNInReadAdPlacement: TeadsInReadAdPlacementDelegate {
    func didReceiveAd(ad: TeadsInReadAd, adRatio _: TeadsAdRatio) {
        RNTeadsInstanceManager.shared.new(instance: ad)
    }
    
    func didUpdateRatio(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
    }
    
    func didLogMessage(message: String) {
        // Intended print to follow SDK lifecycle
        print(message)
    }
    
}
