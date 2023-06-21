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
        do {
            adRequestSettings.enableValidationMode()
            resolve(try adRequestSettings.asDictionary())
        } catch {
            reject("E_AdRequestSettings", "Error on AdRequestSettings enableValidationMode", error)
        }
    }
    
    @objc
    func pageUrl(
        _ urlString: String,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            adRequestSettings.pageUrl(urlString)
            resolve(try  adRequestSettings.asDictionary())
        } catch  {
            reject("E_AdRequestSettings", "Error on AdRequestSettings pageUrl", error)
        }
    }
    
    @objc
    func addExtras( _ value: String,
                    key: String,
                    resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            adRequestSettings.addExtras(value, for: key)
            resolve(try adRequestSettings.asDictionary())
        } catch  {
            reject("E_AdRequestSettings", "Error on AdRequestSettings addExtras", error)
            
        }
    }
    
}
