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
final class RNAdRatio: NSObject {
    
    @objc
    func calculateHeight(
        _ width: Float,
        requestIdentifier: String,
        resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        do{
            let ad: TeadsInReadAd = try RNTeadsInstanceManager.shared.instance(for: requestIdentifier)
            let height = ad.adRatio.calculateHeight(for: CGFloat(width))
            resolve(height)
        } catch  {
            reject("E_AdRatio", "Error on E_AdRatio calculateHeight", error)
        }
    }
    
}
