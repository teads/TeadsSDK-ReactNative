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
        print("settingsFromTeads",settingsMap)
        let data = json(from: settingsMap)!
        let decoder = JSONDecoder()
        do {
            let settings = try decoder.decode(TeadsAdPlacementSettings.self, from: data)
            let pid = Int(pid)
            guard let placement = Teads.createInReadPlacement(pid: pid, settings: settings) else {
                throw NSError()
            }
            RNTeadsInReadAdInstanceManager.shared.new(placement: placement, pid: pid)
            resolve(nil)
        } catch {
            reject("E_RNTeads", "Error on RNTeads", error)
        }
    }
    
    func json(from object:Any) -> Data? {
        guard let data = try? JSONSerialization.data(withJSONObject: object, options: []) else {
            return nil
        }
        return data
    }
}
