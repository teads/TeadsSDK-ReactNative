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
    private var list = [String: TeadsAd]()
    private var placementList = [Int: TeadsAdPlacement]()
    
    // MARK: Placement
    func placement<T: TeadsAdPlacement>(for pid: Float) throws -> T {
        if let placement = placementList[Int(pid)] as? T {
            return placement
        } else {
            throw NSError()
        }
    }
    
    func new<T: TeadsAdPlacement>(placement: T, pid: Int) {
        placementList [pid] = placement
    }
    
    // MARK: Ad
    func new<T: TeadsAd>(instance: T) {
        list [instance.requestIdentifier.uuidString] = instance
    }
    
    func instance<T: TeadsAd>(for requestIdentifier: String) throws -> T {
        if let instance = list[requestIdentifier] as? T {
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
