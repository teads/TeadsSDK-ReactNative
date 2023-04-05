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
final class RNAdPlacementSettings: NSObject {
    
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
    
    
    @objc
    func disableCrashMonitoring(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            placementSettings.disableCrashMonitoring()
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("RNAdPlacementSettings", "Error on RNAdPlacementSettings disableCrashMonitoring", error)
        }
    }
    
    @objc
    func disableTeadsAudioSessionManagement(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            placementSettings.disableTeadsAudioSessionManagement()
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("RNAdPlacementSettings", "Error on RNAdPlacementSettings disableTeadsAudioSessionManagement", error)
        }
    }
    
    
    @objc
    func enableDebug(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            placementSettings.enableDebug()
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings enableDebug", error)        }
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
        do {
            if let tcfVersionreturn = TCFVersion(rawValue: Int(tcfVersion)) {
                placementSettings.userConsent(subjectToGDPR: subjectToGDPR, consent: consent, tcfVersion:tcfVersionreturn, cmpSdkID: Int(cmpSdkID))
                resolve(try placementSettings.asDictionary())
            } else {
                resolve(try placementSettings.asDictionary())
            }
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings userConsent", error)
        }
    }
    
    @objc
    func setUsPrivacy(
        _ consent:String,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            placementSettings.setUsPrivacy(consent: consent)
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings setUsPrivacy", error)
        }
    }
    
    @objc
    func addExtras( _ value: String,
                    key: String,
                    resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            placementSettings.addExtras(value, for: key)
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings addExtras", error)
        }
    }
    
    
    @objc
    func enableLocation(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        // Android only
        do {
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings enableLocation", error)
        }
    }
    
    @objc
    func useLightEndScreen(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        // Android only
        do {
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings useLightEndScreen", error)
        }
    }
    
    @objc
    func hideBrowserUrl(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        // Android only
        do {
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings hideBrowserUrl", error)
        }
    }
    
    @objc
    func toolBarBackgroundColor(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        // Android only
        do {
            resolve(try placementSettings.asDictionary())
        } catch {
            reject("E_AdPlacementSettings", "Error on AdPlacementsSettings toolBarBackgroundColor", error)
        }
    }
    
}
