//
//  RNInReadAdViewManager.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 12/01/2023.
//

import Foundation

@objc(RNInReadAdViewManager)
class RNInReadAdViewanager: RCTViewManager {
    override func view() -> UIView! {
        return RNInReadAdView()
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
