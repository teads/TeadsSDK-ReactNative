//
//  SwiftBridge.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 08/06/2023.
//

import Foundation
import React

@objc(SwiftBridge)
class SwiftBridge: NSObject, RCTBridgeModule {
    private func requiresMainQueueSetup() -> Bool {
        return true // Ensure the module initialization occurs on the main thread
    }
    
    static func moduleName() -> String? {
        return "SwiftBridge" // The name used to reference this module in JavaScript
    }
    
    // Implement methods to send data from Swift to JavaScript
    @objc func sendDataToJS(_ name:String, data: String) {
        // Retrieve the RCTBridge instance
        guard let bridge = RCTBridge.current() else {
            print("RCTBridge instance not found")
            return
        }
        // Send data to JavaScript
        let eventEmitter = bridge.module(for: RNHandlerEvents.self) as! RCTEventEmitter
        eventEmitter.sendEvent(withName: name, body: ["data": data])
    }
    
}

