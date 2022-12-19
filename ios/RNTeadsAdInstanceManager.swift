//
//  RNTeadsAdInstanceManager.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//

import Foundation
import TeadsSDK

struct RNInReadAdInstanceMap {
  let teadsAd: TeadsInReadAd
  let adRatio: TeadsAdRatio
}

class RNTeadsInReadAdInstanceManager {
    static let shared = RNTeadsInReadAdInstanceManager()
    var placement: TeadsInReadAdPlacement?
    private var list = [RNInReadAdInstanceMap]()
    
    func new(instance: RNInReadAdInstanceMap) {
        list.append(instance)
    }
    
    func instance(for requestIdentifier: String) throws -> RNInReadAdInstanceMap {
        if let instance = list.first(where: { $0.teadsAd.requestIdentifier.uuidString == requestIdentifier }) {
            return instance
        } else {
            throw NSError()
        }
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
