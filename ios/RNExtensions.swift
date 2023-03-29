//
//  RNExtensions.swift
//  react-native-teads-sdk-module
//
//  Created by Numa Maurin on 09/11/2022.
//

import Foundation

extension Encodable {
  func asDictionary() throws -> [String: Any] {
    let data = try JSONEncoder().encode(self)
    guard let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments) as? [String: Any] else {
        throw badArguments
    }
    return dictionary
  }
}

public let noAdInstance = RCTErrorWithMessage("NO_AD_INSTANCE: Unable to find an ad instance")
public let badArguments = RCTErrorWithMessage("BAD_ARGS: Wrong argument types")
public let noAdPlacement = RCTErrorWithMessage("NO_AD_PLACEMENT: Unable to find a ad placement")
