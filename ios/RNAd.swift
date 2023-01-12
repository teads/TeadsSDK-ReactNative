//
//  RNAd.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 10/11/2022.
//

import Foundation
import TeadsSDK
//
//@objc(RNAd)
//class RNAd: NSObject {
//    
//    @objc
//    func delegate(_ requestIdentifier:String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
//        do {
//            try RNTeadsInReadAdInstanceManager.shared.instance(for: requestIdentifier).delegate = self
//            resolve(nil)
//        } catch {
//            let error = NSError(domain: "", code: 200, userInfo: nil)
//            reject("E_TeadsAd", "Error on TeadsAdDelegate", error)
//        }
//    }
//}
//extension RNAd: TeadsAdDelegate {
//    public func willPresentModalView(ad: TeadsAd) -> UIViewController? {
//        print("willPresentModalView")
//        return(UIViewController.init())
//    }
//    
//    public func didCatchError(ad: TeadsAd, error: Error) {
//        print("didCatchError", error)
//    }
//    
//    public func didClose(ad: TeadsAd) {
//        print("didClose")
//    }
//    
//    public func didRecordImpression(ad: TeadsAd) {
//        print("didRecordImpression")
//    }
//    
//    public func didRecordClick(ad: TeadsAd) {
//        print("didRecordClick")
//    }
//    
//    public func didExpandedToFullscreen(ad: TeadsAd) {
//        print("didExpandedToFullscreen")
//    }
//    
//    public func didCollapsedFromFullscreen(ad: TeadsAd) {
//        print("didCollapsedFromFullscreen")
//    }
//}
//    
