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
        print("settingsFromRequest",settingsMap)
        let data = json(from: settingsMap)!
        let decoder = JSONDecoder()
        do {
            let settings = try decoder.decode(TeadsAdRequestSettings.self, from: data)
            let placement: TeadsInReadAdPlacement = try RNTeadsInReadAdInstanceManager.shared.placement(for: pid)
            placement.delegate = self
            let id = placement.requestAd(requestSettings: settings)
            print("ID", id.uuidString)
            resolve(id.uuidString)
        } catch {
            reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement requestAd", error)
        }
    }
    
    func json(from object:Any) -> Data? {
        guard let data = try? JSONSerialization.data(withJSONObject: object, options: []) else {
            return nil
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
    func didReceiveAd(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
        RNTeadsInReadAdInstanceManager.shared.new(instance: ad)
        print("DIDRECEIVEDAD")
    }
    
    func didUpdateRatio(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
    }
    
    func didLogMessage(message: String) {
        print(message)
    }
    
}
