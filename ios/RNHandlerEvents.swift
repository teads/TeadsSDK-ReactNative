//
//  RNHandlerEventss.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 07/06/2023.
//

import Foundation
import React

@objc(RNHandlerEvents)
class RNHandlerEvents: RCTEventEmitter {
    
    override init() {
        super.init()
        // Initialize any setup required for your module
    }
    
    override func supportedEvents() -> [String]! {
        return ["didCatchError","didRecordImpression","didRecordClick","didExpandedToFullscreen","didCollapsedFromFullscreen","adStartPlayingAudio","adStopPlayingAudio","didPlay","didPause","didComplete"] //  names of the events your module will emit
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true // Ensure the module initialization occurs on the main thread
    }
}




