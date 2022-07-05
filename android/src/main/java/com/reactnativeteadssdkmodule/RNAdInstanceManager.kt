package com.reactnativeteadssdkmodule

import tv.teads.sdk.InReadAdPlacement
import tv.teads.sdk.renderer.InReadAdView


class RNAdInstanceManager {
  class AdInstanceMap constructor(val inReadAdView: InReadAdView, val id: String)
  //placé ici a voir si c'est ok

  var placement: InReadAdPlacement? = null

  private var adViewInstancesMapList: MutableList<AdInstanceMap> = mutableListOf()

  fun new(instance: AdInstanceMap) {
    adViewInstancesMapList.add(instance)
  }

  @Throws()
  fun instance(requestIdentifier: String) : AdInstanceMap {
    val instance = adViewInstancesMapList.firstOrNull { it.id == requestIdentifier }
    if (instance != null) {
      return instance
    } else {
      throw Exception()
    }
  }

  companion object {
    val shared: RNAdInstanceManager = RNAdInstanceManager()
  }
}
