//
//  RNTeads.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 21/12/2022.
//

import Foundation
import TeadsSDK
import UIKit

@objc(RNTeads)
class RNTeads: NSObject {
    
    @objc
    func createInReadPlacement(_ pid : Float, settingsMap : NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        print("settings",settingsMap)
        if settingsMap != nil {
            //RNTeadsInReadAdInstanceManager.shared.placement = Teads.createInReadPlacement(pid: Int(pid), settings: settingsMap)
                resolve(nil)
            }
         else {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_RNTeads", "Error on RNTeads", error)
        }
    }

}
