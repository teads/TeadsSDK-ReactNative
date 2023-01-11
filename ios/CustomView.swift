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
            if adId == "testid" {
                self.backgroundColor = UIColor.red.withAlphaComponent(0.1)
            }
            else {
                self.backgroundColor = UIColor.blue.withAlphaComponent(0.1)
                print("ID received by the view",adId)
                do {
                    let data = try RNTeadsInReadAdInstanceManager.shared.instance(for: adId)
                    self.inReadAdView = TeadsInReadAdView(bind: data.teadsAd);
                    print("AD FOUND",data.teadsAd)
                    self.requestIdentifier = adId
                    self.inReadAdView.bind(data.teadsAd)
                    print("AD LINKED",data.teadsAd.requestIdentifier)
                  
                    self.addSubview(inReadAdView)
                    inReadAdView.frame = frame
                } catch {
                    print("NO AD FOR  ID",adId)
                }
                
            }
            self.setupView()
        }
    }
    
    override init(frame: CGRect) {
        self.inReadAdView = TeadsInReadAdView(frame: frame)
        super.init(frame: frame)
        self.backgroundColor = UIColor.red.withAlphaComponent(0.1)
        }
    
    required init?(coder aDecoder: NSCoder) {
        self.inReadAdView = TeadsInReadAdView();
        super.init(coder: aDecoder)
        setupView()
    }
    
    private func setupView() {
        // in here you can configure your view
        print("view setup done",adId)
        
    }
}
