package com.reactnativeteadssdkmodule

import tv.teads.sdk.InReadAdPlacement
import tv.teads.sdk.loader.AdPlacement
import tv.teads.sdk.renderer.InReadAdView


class RNAdInstanceManager {
  class AdInstanceMap constructor(val inReadAdView: InReadAdView, val id: String)
  class AdPlacementMap constructor(val inReadAdPlacement: InReadAdPlacement, val id: Int)

  private var placementList: MutableList<AdPlacementMap> = mutableListOf()
  private var adViewInstancesMapList: MutableList<AdInstanceMap> = mutableListOf()

  //AD
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

  //PLACEMENT
  fun new(placement: AdPlacementMap) {
    placementList.add(placement)
  }

  @Throws()
  fun instance(pid: Int) : AdPlacementMap {
    val placement = placementList.firstOrNull { it.id == pid }
    if (placement != null) {
      return placement
    } else {
      throw Exception()
    }
  }

  companion object {
    val shared: RNAdInstanceManager = RNAdInstanceManager()
  }
}
