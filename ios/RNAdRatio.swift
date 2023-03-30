//
//  RNAdRatio.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 30/03/2023.
//

import Foundation
import TeadsSDK
import React

@objc(RNAdRatio)
class RNAdRatio: NSObject {
    
    @objc
    func calculateHeight(
        _ width: Float,
        requestIdentifier: String,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do {
            var height = try RNTeadsInReadAdInstanceManager.shared.instance(for: requestIdentifier).adRatio.calculateHeight(for: CGFloat(width))
            print("width",width)
            print("height",height)
            
            resolve(height)
            
        } catch  {
            reject("E_AdRatio", "Error on E_AdRatio calculateHeight", error)
        }
    }
    
}
