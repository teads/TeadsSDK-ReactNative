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
final class RNTeads: NSObject {
    
    @objc
    func createInReadPlacement(_ pid : Float, settingsMap : NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        do {
            let data = try json(from: settingsMap)
            let decoder = JSONDecoder()
            do {
                let settings = try decoder.decode(TeadsAdPlacementSettings.self, from: data)
                let pid = Int(pid)
                guard let placement = Teads.createInReadPlacement(pid: pid, settings: settings) else {
                    throw RNTeadsError.noAdPlacement.error
                }
                RNTeadsInstanceManager.shared.new(placement: placement, pid: placement.pid)
                resolve(pid)
            } catch {
                reject("E_RNTeads", "Error on RNTeads", error)
            }
        }
        catch {
            reject("E_RNTeads", "Error on RNTeads", error)
        }
    }
    
    private func json(from object:Any) throws -> Data {
        return try JSONSerialization.data(withJSONObject: object, options: [])
    }
}
