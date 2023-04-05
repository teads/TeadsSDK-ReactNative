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

final class RNTeadsInReadAdInstanceManager {
    static let shared = RNTeadsInReadAdInstanceManager()
    private var adListwithRatio = [RNInReadAdInstanceMap]()
    private var placementList = [Int: TeadsAdPlacement]()
    
    // MARK: Placement
    func placement<T: TeadsAdPlacement>(for pid: Float) throws -> T {
        if let placement = placementList[Int(pid)] as? T {
            return placement
        } else {
            throw noAdPlacement
        }
    }
    
    func new<T: TeadsAdPlacement>(placement: T, pid: Int) {
        placementList [pid] = placement
    }
    
    // MARK: LIST AD WITH RATIO
    func new(instance: RNInReadAdInstanceMap) {
        adListwithRatio.append(instance)
    }
    
    func instance(for requestIdentifier: String) throws -> RNInReadAdInstanceMap {
        if let instance = adListwithRatio.first(where: { $0.teadsAd.requestIdentifier.uuidString == requestIdentifier }) {
            return instance
        } else {
            throw NSError()
        }
    }
    
    func clean(with requestIdentifier: String) {
        adListwithRatio.removeAll { $0.teadsAd.requestIdentifier.uuidString == requestIdentifier }
    }
    
}

final class RNTeadsNativeAdInstanceManager {
    static let shared = RNTeadsNativeAdInstanceManager()
    var placement: TeadsNativeAdPlacement?
    private var adList = [TeadsNativeAd]()
    
    func new(ad: TeadsNativeAd) {
        adList.append(ad)
    }
    
    func ad(for requestIdentifier: String) throws -> TeadsNativeAd {
        if let ad = adList.first(where: { $0.requestIdentifier.uuidString == requestIdentifier }) {
            return ad
        } else {
            throw noAdInstance
        }
    }
}
