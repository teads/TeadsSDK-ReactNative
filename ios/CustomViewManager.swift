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
        return CustomView.init(frame: CGRect(x: 0, y: 0, width: 100, height: 100))
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
