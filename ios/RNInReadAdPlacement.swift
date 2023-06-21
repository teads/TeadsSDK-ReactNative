//
//  RNInReadAdPlacement.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 10/11/2022.
//
import Foundation
import TeadsSDK
import React

@objc(RNInReadAdPlacement)
final class RNInReadAdPlacement: NSObject {
    
    var promiseBlock = [UUID: (resolve: RCTPromiseResolveBlock,reject: RCTPromiseRejectBlock)]()
    @objc
    func requestAd(_ pid: Float, settingsMap:NSDictionary, resolve:@escaping RCTPromiseResolveBlock,reject:@escaping RCTPromiseRejectBlock) -> Void {
        let decoder = JSONDecoder()
        if let data = json(from: settingsMap) {
            do {
                let settings = try decoder.decode(TeadsAdRequestSettings.self, from: data)
                let placement: TeadsInReadAdPlacement = try RNTeadsInstanceManager.shared.placement(for: pid)
                placement.delegate = self
                let id = placement.requestAd(requestSettings: settings)
                promiseBlock[id] = (resolve: resolve, reject: reject)
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
    
    
    func adOpportunityTrackerView(trackerView: TeadsAdOpportunityTrackerView) {
        //nothing
    }
    
}



extension RNInReadAdPlacement: TeadsInReadAdPlacementDelegate {
    
    func didFailToReceiveAd(reason: TeadsSDK.AdFailReason) {
        let promiseClosure = promiseBlock[reason.requestIdentifier]
        promiseClosure?.reject("E_TeadsInReadAdPlacement", #function, reason)
        promiseBlock[reason.requestIdentifier] = nil
    }
    
    func didReceiveAd(ad: TeadsInReadAd, adRatio _: TeadsAdRatio) {
        RNTeadsInstanceManager.shared.new(instance: ad)
        let promiseClosure = promiseBlock[ad.requestIdentifier]
        promiseClosure?.resolve(ad.requestIdentifier.uuidString)
        promiseBlock[ad.requestIdentifier] = nil
    }
    
    func didUpdateRatio(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
        // Implemented into RNAdRatio
    }
    
    func didLogMessage(message: String) {
        // Intended print to follow SDK lifecycle
        print(message)
    }
    
}




