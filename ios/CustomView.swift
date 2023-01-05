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
    private var inReadAdView: TeadsInReadAdView = TeadsInReadAdView()
    private var requestIdentifier: String = ""
    
    @objc var adId = "" {
        didSet {
            if adId == "testid" || adId == requestIdentifier{
                self.backgroundColor = UIColor.black.withAlphaComponent(0.1)
            }
            else {
                self.backgroundColor = UIColor.blue.withAlphaComponent(0.1)
                print("ID received by the view",adId)
                do {
                    let data = try RNTeadsInReadAdInstanceManager.shared.instance(for: adId)
                    print("AD FOUND",data.teadsAd)
                    self.requestIdentifier = adId
                    self.inReadAdView.bind(data.teadsAd)
                    print("AD LINKED",data.teadsAd.requestIdentifier)
                    self.addSubview(inReadAdView)
                } catch {
                    print("NO AD FOR  ID",adId)
                }
                
            }
            self.setupView()
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.backgroundColor = UIColor.red.withAlphaComponent(0.1)
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setupView()
    }
    
    private func setupView() {
        // in here you can configure your view
        print("view setup done",adId)
        self.addSubview(inReadAdView)
        
    }
}
