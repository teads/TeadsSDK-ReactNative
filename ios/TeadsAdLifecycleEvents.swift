//
//  TeadsAdLifecycleEventss.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 07/06/2023.
//

import Foundation
import React

@objc(TeadsAdLifecycleEvents)
class TeadsAdLifecycleEvents: RCTEventEmitter {
    
    override init() {
        super.init()
        // Initialize any setup required for your module
    }
    
    override func supportedEvents() -> [String]! {
        return ["didCatchError","didRecordImpression","didRecordClick","didExpandedToFullscreen","didCollapsedFromFullscreen","adStartPlayingAudio","adStopPlayingAudio","didPlay","didPause","didComplete","didFailToReceiveAd","adOpportunityTrackerView"] //  names of the events your module will emit
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return false // Ensure the module initialization occurs on the main thread
    }
}




