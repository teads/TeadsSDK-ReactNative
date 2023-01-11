//
//  RNTeadsAdInstanceManager.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//

import Foundation
import TeadsSDK


class RNTeadsInReadAdInstanceManager {
    static let shared = RNTeadsInReadAdInstanceManager()
    var placement: TeadsInReadAdPlacement?
    private var list = [String: TeadsInReadAd]()
    
    func new(instance: TeadsInReadAd) {
        list [instance.requestIdentifier.uuidString] = instance
    }
    
    func instance(for requestIdentifier: String) throws -> TeadsInReadAd {
        if let instance = list[requestIdentifier] {
            return instance
        } else {
            throw NSError()
        }
    }
    
    func removeInstance(for requestIdentifier: String) {
        list.removeValue(forKey: requestIdentifier)
    }
    
    
}

class RNTeadsNativeAdInstanceManager {
    static let shared = RNTeadsNativeAdInstanceManager()
    var placement: TeadsNativeAdPlacement?
    private var list = [TeadsNativeAd]()
    
    func new(ad: TeadsNativeAd) {
        list.append(ad)
    }
    
    func ad(for requestIdentifier: String) throws -> TeadsNativeAd {
        if let ad = list.first(where: { $0.requestIdentifier.uuidString == requestIdentifier }) {
            return ad
        } else {
            throw NSError()
        }
    }
}
