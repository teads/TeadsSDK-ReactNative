//
//  RNAdPlacementSettings.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 02/11/2022.
//

import Foundation
import TeadsSDK
import React

@objc(RNAdPlacementSettings)
class RNAdPlacementSettings: NSObject {
    
    let placementSettings: TeadsAdPlacementSettings = {
        let settings = TeadsAdPlacementSettings()
        settings.addExtras(TeadsAdPlacementSettings.pluginReactNative, for: TeadsAdPlacementSettings.pluginKey)
        if let major  = React.RCTGetReactNativeVersion()[React.RCTVersionMajor], let minor  = React.RCTGetReactNativeVersion()[React.RCTVersionMinor], let patch  = React.RCTGetReactNativeVersion()[React.RCTVersionPatch]
        {
        settings.addExtras("\(major).\(minor).\(patch)", for: TeadsAdPlacementSettings.pluginVersionKey)
        } else {
            settings.addExtras("unknown", for: TeadsAdPlacementSettings.pluginVersionKey)
        }
        return settings
    }()
    
    func raiseError(rejecter reject: RCTPromiseRejectBlock,functionName: String = #function) {
        let error = NSError(domain: "Teads", code: 200, userInfo: nil)
        reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
    }
    
    
    @objc
    func disableCrashMonitoring(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        if (placementSettings.isEqual(nil)) {
            raiseError(rejecter: reject)
        } else {
            placementSettings.disableCrashMonitoring()
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    @objc
    func disableTeadsAudioSessionManagement(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        
        if (placementSettings.isEqual(nil)) {
            raiseError(rejecter: reject)
        } else {
            placementSettings.disableTeadsAudioSessionManagement()
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    
    @objc
    func enableDebug(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        
        if (placementSettings.isEqual(nil)) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
            placementSettings.enableDebug()
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    @objc
    func userConsent(
        //args multiple
        _ subjectToGDPR:String,
        consent:String,
        tcfVersion:Float,
        cmpSdkID:Float,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        print(tcfVersion)
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
            print(Int(tcfVersion))
            //VOIR PK IL VEUT PAS FAIRE DE TCF VERSION
            print(TCFVersion.init(rawValue: Int(tcfVersion)))
            print(TCFVersion(rawValue: Int(tcfVersion)))
            let tcfVersionreturn = TCFVersion.init(rawValue: Int(tcfVersion))
            print(tcfVersionreturn as Any)
            if (tcfVersionreturn != nil) {
                placementSettings.userConsent(subjectToGDPR: subjectToGDPR, consent: consent, tcfVersion:tcfVersionreturn!, cmpSdkID: Int(cmpSdkID))
                resolve(try? placementSettings.asDictionary())
            }
        }
    }
    
    @objc
    func setUsPrivacy(
        _ consent:String,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        print(consent)
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
            placementSettings.setUsPrivacy(consent: consent)
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    @objc
    func addExtras( _ value: String,
                    key: String,
                    resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
            placementSettings.addExtras(value, for: key)
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    
    @objc
    func enableLocation(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      // Android only
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
       
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    @objc
    func useLightEndScreen(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      // Android only
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
       
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    @objc
    func hideBrowserUrl(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      // Android only
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
       
            resolve(try? placementSettings.asDictionary())
        }
    }
    
    @objc
    func toolBarBackgroundColor(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      // Android only
        if (placementSettings.isEqual(nil) ) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings", error)
        } else {
       
            resolve(try? placementSettings.asDictionary())
        }
    }

}
