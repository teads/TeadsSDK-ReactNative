//
//  RNTeadsAdInstanceManager.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//
import TeadsSDK

final class RNTeadsInstanceManager {
    static let shared = RNTeadsInstanceManager()
    private var adList = [TeadsAd]()
    private var placementList = [Int: TeadsAdPlacement]()
    private let concurrentQueue = DispatchQueue(label: "RNTeadsInstanceManagerQueue", attributes: .concurrent)
    
    private init() {}
    
    // MARK: Placement
    func placement<T: TeadsAdPlacement>(for pid: Float) throws -> T {
        try concurrentQueue.sync {
            if let placement = placementList[Int(pid)] as? T {
                return placement
            } else {
                throw RNTeadsError.noAdPlacement.error
            }
        }
    }
    
    func new<T: TeadsAdPlacement>(placement: T, pid: Int) {
        concurrentQueue.async(flags: .barrier) { [weak self] in
            self?.placementList[pid] = placement
        }
    }
    
    // MARK: LIST AD WITH RATIO
    func new<T: TeadsAd>(instance: T) {
        concurrentQueue.async(flags: .barrier) { [weak self] in
            self?.adList.append(instance)
        }
    }
    
    func instance<T: TeadsAd>(for requestIdentifier: String) throws -> T {
        try concurrentQueue.sync {
            if let instance = adList.first(where: { $0.requestIdentifier.uuidString == requestIdentifier }) as? T {
                return instance
            } else {
                throw RNTeadsError.noAdInstance.error
            }
        }
    }
    
    func clean(with requestIdentifier: String) {
        concurrentQueue.async(flags: .barrier) { [weak self] in
            self?.adList.removeAll { $0.requestIdentifier.uuidString == requestIdentifier }
        }
    }
    
}

