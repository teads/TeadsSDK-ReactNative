package com.reactnativeteadssdkmodule

import com.facebook.react.bridge.*

import com.reactnativeteadssdkmodule.ArrayUtil.toWritableArray
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import java.util.HashMap

/*
  MapUtil exposes a set of helper methods for working with
  ReadableMap (by React Native), Map<String, Object>, and JSONObject.
  MIT License
  Copyright (c) 2020 Marc Mendiola
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
 */



object MapUtil {

  fun toWritableMap(map: MutableMap<String?, Any?>): WritableMap {
    val writableMap = Arguments.createMap()
    val iterator: MutableIterator<*> = map.entries.iterator()
    while (iterator.hasNext()) {
      val (key, value) = iterator.next() as Map.Entry<*, *>
      if (value == null) {
        writableMap.putNull((key as String?)!!)
      } else if (value is Boolean) {
        writableMap.putBoolean((key as String?)!!, (value as Boolean?)!!)
      } else if (value is Double) {
        writableMap.putDouble((key as String?)!!, (value as Double?)!!)
      } else if (value is Int) {
        writableMap.putInt((key as String?)!!, (value as Int?)!!)
      } else if (value is String) {
        writableMap.putString((key as String?)!!, value as String?)
      } else if (value is Map<*, *>) {
        writableMap.putMap((key as String?)!!, toWritableMap(value as MutableMap<String?, Any?>))
      } else if (value.javaClass != null && value.javaClass.isArray) {
        writableMap.putArray((key as String?)!!, toWritableArray(value as Array<Any?>?))
      }
      iterator.remove()
    }
    return writableMap
  }
}
