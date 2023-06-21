package com.reactnativeteadssdkmodule

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableType
import com.facebook.react.bridge.WritableArray
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject

/*
  ArrayUtil exposes a set of helper methods for working with
  ReadableArray (by React Native), Object[], and JSONArray.
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



object ArrayUtil {

  fun toWritableArray(array: Array<Any?>?): WritableArray {
    val writableArray = Arguments.createArray()
    for (i in array!!.indices) {
      val value = array[i]
      if (value == null) {
        writableArray.pushNull()
      }
      if (value is Boolean) {
        writableArray.pushBoolean((value as Boolean?)!!)
      }
      if (value is Double) {
        writableArray.pushDouble((value as Double?)!!)
      }
      if (value is Int) {
        writableArray.pushInt((value as Int?)!!)
      }
      if (value is String) {
        writableArray.pushString(value as String?)
      }
      if (value is Map<*, *>) {
        writableArray.pushMap(MapUtil.toWritableMap(value as MutableMap<String?, Any?>))
      }
      if (value!!.javaClass.isArray) {
        writableArray.pushArray(toWritableArray(value as Array<Any?>?))
      }
    }
    return writableArray
  }
}
