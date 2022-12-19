//
//  RNTeads.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//

import Foundation
import TeadsSDK
import UIKit

@objc(RNTeads)
class RNTeads: NSObject {
    
    @objc
    func createInReadAdPlacement(_ pid:Float, settingsMap:NSArray, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        
        if let data = try? JSONSerialization.data(withJSONObject: settingsMap, options: .prettyPrinted){
            let decoder = JSONDecoder()
            if let settings = try? decoder.decode(TeadsAdPlacementSettings.self, from: data) {
                RNTeadsInReadAdInstanceManager.shared.placement = Teads.createInReadPlacement(pid: Int(pid), settings: settings)
                resolve(nil)
            }
        } else {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_RNTeads", "Error on RNTeads", error)
        }
    }
}
