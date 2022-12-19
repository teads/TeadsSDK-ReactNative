//
//  RNAdRequestSettings.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//

import Foundation
import TeadsSDK


@objc(RNAdRequestSettings)
class RNAdRequestSettings: NSObject {

    let adRequestSettings = TeadsAdRequestSettings()
    
    @objc
    func enableValidationMode(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        
        if (adRequestSettings.isEqual(nil)) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdRequestSettings", "Error on AdRequestSettings", error)
        } else {
            adRequestSettings.enableValidationMode()
            resolve(try? adRequestSettings.asDictionary())
        }
    }
    
    @objc
    func pageUrl(
        _ urlString: String,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        
        if (adRequestSettings.isEqual(nil)) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdRequestSettings", "Error on AdRequestSettings", error)
        } else {
            adRequestSettings.pageUrl(urlString)
            resolve(try?  adRequestSettings.asDictionary())
        }
    }
    
    @objc
    func addExtras( _ value: String,
                    key: String,
                    resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        if (adRequestSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdRequestSettings", "Error on AdRequestSettings", error)
        } else {
            adRequestSettings.addExtras(value, for: key)
            resolve(try? adRequestSettings.asDictionary())
        }
    }
    
}
