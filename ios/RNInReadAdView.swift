//
//  RNInReadAdView.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 12/01/2023.
//

import TeadsSDK
import UIKit

@objc(RNInReadAdView)
final class RNInReadAdView: UIView {
    private let inReadAdView = TeadsInReadAdView()
    private var requestIdentifier: String = ""
    
    @objc var adId : String? {
        didSet {
            guard let adId = adId else {
                return
            }
            do {
                let teadsAd: TeadsInReadAd = try RNTeadsInstanceManager.shared.instance(for: adId)
                teadsAd.delegate = self
                teadsAd.playbackDelegate = self
                inReadAdView.bind(teadsAd)
                self.requestIdentifier = adId
                self.inReadAdView.bind(teadsAd)
                inReadAdView.translatesAutoresizingMaskIntoConstraints = false
                self.addSubview(inReadAdView)
                NSLayoutConstraint.activate([
                    leadingAnchor.constraint(equalTo: inReadAdView.leadingAnchor),
                    trailingAnchor.constraint(equalTo: inReadAdView.trailingAnchor),
                    topAnchor.constraint(equalTo: inReadAdView.topAnchor),
                    bottomAnchor.constraint(equalTo: inReadAdView.bottomAnchor)
                ])
            } catch {
                return
            }
        }
    }
    
}


