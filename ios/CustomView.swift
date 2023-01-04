//
//  CustomView.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 04/01/2023.
//
import TeadsSDK
import UIKit

@objc(CustomView)
class CustomView: UIView {
    private var inReadAdView: TeadsInReadAdView
    private var requestIdentifier: String = ""
    
    @objc var adId = "" {
        didSet {
            print(adId)
            self.setupView()
        }
    }
    
    override init(frame: CGRect) {
        inReadAdView = TeadsInReadAdView()
        super.init(frame: frame)
        setupView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        inReadAdView = TeadsInReadAdView()
        super.init(coder: aDecoder)
        setupView()
    }
    
    private func setupView() {
        // in here you can configure your view

        if let instance = try? RNTeadsInReadAdInstanceManager.shared.instance(for: adId) {
            self.requestIdentifier = adId
            self.inReadAdView.bind(instance.teadsAd)
        }
        
        
    }
    
}
