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
        throw RNTeadsError.badArguments.error
    }
    return dictionary
  }
}

enum RNTeadsError {
    case noAdInstance
    case badArguments
    case noAdPlacement
    var error: Error {
        switch self{
        case .noAdInstance:
            return RCTErrorWithMessage("NO_AD_INSTANCE: Unable to find an ad instance")
        case .badArguments:
            return RCTErrorWithMessage("BAD_ARGS: Wrong argument types")
        case .noAdPlacement:
            return RCTErrorWithMessage("NO_AD_PLACEMENT: Unable to find a ad placement")
        }
    }
    
}
