//
//  DPTeadsAd.swift
//  MobileAdsTeads
//
//  Created by Gaëtan De Brucker on 11/02/19.
//  Copyright © 2019 Persgroep. All rights reserved.
//

import UIKit

public class DPTeadsAd {
    
    public let pid: Int
    public let size: CGSize
    public let gdprConsent: String
    public let pageUrl: String?
    
    public init(pid: Int,
                size: CGSize,
                gdprConsent: String,
                pageUrl: String? = nil) {
        self.pid = pid
        self.size = size
        self.gdprConsent = gdprConsent
        self.pageUrl = pageUrl
    }
}
