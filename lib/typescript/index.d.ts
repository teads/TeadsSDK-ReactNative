export declare function multiply(a: number, b: number): Promise<number>
export declare function disableCrashMonitoring(): Promise<Map<String, any>>
export declare function disableBatteryMonitoring(): Promise<Map<String, any>>
export declare function disableTeadsAudioSessionManagement(): Promise<Map<String, any>>
export declare function enableDebug(): Promise<Map<String, any>>
export declare function setUsPrivacy(consent: String): Promise<Map<String, any>>
export declare function addExtras(key: String, value: String): Promise<Map<String, any>>
export declare function enableLocation(): Promise<Map<String, any>>
export declare function useLightEndScreen(): Promise<Map<String, any>>
export declare function hideBrowserUrl(): Promise<Map<String, any>>
export declare function toolBarBackgroundColor(color: number): Promise<Map<String, any>>
export declare function userConsent(
  subjectToGDPR: String,
  consent: String,
  tcfVersion: number,
  cmpSdkId: number
): Promise<Map<String, any>>
export declare function enableValidationMode(): Promise<Map<String, any>>
export declare function pageUrl(urlString: String): Promise<Map<String, any>>
export declare function addExtraSetting(key: String, value: String): Promise<Map<String, any>>
export declare function createInReadPlacement(pid: number, settingsMap: Map<String, any>): Promise<void>
export declare function delegate(): Promise<void>
export declare function playback(): Promise<void>
export declare function bind(requestIdentifier: String): Promise<void>
export declare function requestAd(settingsMap: Map<String, any>): Promise<String>
