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
    func requestAd(_ settingsMap:NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        print("settingsFromRequest",settingsMap)
        let data = json(from: settingsMap)!
        let decoder = JSONDecoder()
        if let settings = try? decoder.decode(TeadsAdRequestSettings.self, from: data) {
            RNTeadsInReadAdInstanceManager.shared.placement?.delegate = self
            if let id = RNTeadsInReadAdInstanceManager.shared.placement?.requestAd(requestSettings: settings) {
                print("ID", id.uuidString)
                resolve(id.uuidString)
            } else {
                let error = NSError(domain: "", code: 200, userInfo: nil)
                reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement request ad", error)
            }
        }else {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_TeadsInReadAdPlacement", "Error on TeadsInReadAdPlacement decoding", error)
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
        RNTeadsInReadAdInstanceManager.shared.new(instance: RNInReadAdInstanceMap(teadsAd: ad, adRatio: adRatio))
        //supp adRatio
        
        print("DIDRECEIVEDAD")
    }
    
    func didUpdateRatio(ad: TeadsInReadAd, adRatio: TeadsAdRatio) {
        //channel.invokeMethod("didUpdateRatio", arguments: [ad.requestIdentifier.uuidString])
    }
    func didLogMessage(message: String) {
        print(message)
    }
    
}
