//
//  CustomViewManager.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 04/01/2023.
//

import Foundation

@objc(CustomViewManager)
class CustomViewManager: RCTViewManager {
    override func view() -> UIView! {
        return CustomView()
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
