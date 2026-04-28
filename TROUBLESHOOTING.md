# Troubleshooting Teads Widgets Not Appearing

## Problem
- TeadsAdPlacementFeed and TeadsAdPlacementMedia are not visible in the app
- No logs from native code in Xcode
- No JavaScript errors

## Diagnostic Steps

### 1. Check if Native Modules are Registered

The debug code added to `src/Article.tsx` will log:
```
=== TEADS DEBUG START ===
Available Native Modules: [...]
TeadsEventModule available? true/false
All Teads-related modules: [...]
=== TEADS DEBUG END ===
```

**Expected Output:**
- `TeadsEventModule available?` should be `true`
- You should see `TeadsEventModule` in the Teads-related modules list

**If TeadsEventModule is missing:**
- The native module failed to register
- Check Xcode build logs for compilation errors

### 2. Check Xcode Build Output

In Xcode:
1. Press Cmd+9 to open the Report Navigator
2. Select the most recent build
3. Search for errors related to:
   - `TeadsSDK`
   - `TeadsReactNative-Swift.h`  
   - Swift compilation errors
   - Module 'TeadsSDK' not found

**Common Issues:**
- TeadsSDK pod not properly installed
- Swift bridging header not generated
- Module map issues

### 3. Clean and Rebuild

```bash
cd /Users/odedre/work/teads/QA-temp-dir/TestProject

# Clean Metro bundler cache
rm -rf node_modules/.cache
watchman watch-del-all

# Clean iOS build
cd ios
xcodebuild clean
rm -rf ~/Library/Developer/Xcode/DerivedData/*
rm -rf build/
rm -rf Pods/
rm Podfile.lock

# Reinstall pods
pod install

cd ..
```

Then rebuild in Xcode (Cmd+Shift+K to clean, then Cmd+B to build).

### 4. Verify TeadsSDK is Linked

In Xcode:
1. Select the TestProject target
2. Go to "Build Phases"
3. Expand "Link Binary With Libraries"
4. Verify `TeadsSDK.framework` is listed

Also check:
1. "Build Settings" → Search for "Framework Search Paths"
2. Should include `$(PODS_ROOT)/TeadsSDK` or similar

### 5. Check Swift Bridging Header

In Xcode Build Settings, search for:
- "Objective-C Bridging Header"
- Should point to the generated bridging header

### 6. Verify New Architecture

Check if your app is using React Native's New Architecture (Fabric):

In `ios/Podfile`, look for:
```ruby
use_frameworks! :linkage => :static
```

The teads-react-native library uses the new architecture, so this should be present.

### 7. Enable Debug Logging

Add this to AppDelegate to see more logs:

In `ios/TestProject/AppDelegate.mm`, add before `@implementation`:
```objc
// Enable React Native debug logging
extern "C" void RCTSetLogThreshold(RCTLogLevel level);
```

Then in `didFinishLaunchingWithOptions:`, add:
```objc
RCTSetLogThreshold(RCTLogLevelTrace);
```

### 8. Check Metro Bundler Output

When you run the app, check Metro bundler terminal for:
- Module resolution errors
- Native module loading issues
- Any warnings about teads-react-native

### 9. Test Native Module Availability

The console should show:
```
=== TEADS DEBUG START ===
```

If you see this but TeadsEventModule is missing, the native code didn't compile or register.

### 10. Verify Pod Installation

```bash
cd ios
pod list | grep -i teads
```

**Expected output:**
```
- TeadsSDK (6.0.5)
- teads-react-native (6.0.6)
```

## Common Solutions

### Solution 1: Clean Everything and Rebuild

```bash
cd /Users/odedre/work/teads/QA-temp-dir/TestProject

# Clean JavaScript
rm -rf node_modules
yarn install

# Clean iOS
cd ios
rm -rf Pods Podfile.lock build ~/Library/Developer/Xcode/DerivedData/*
pod install
cd ..

# Clean Metro
watchman watch-del-all
rm -rf $TMPDIR/react-*

# Restart Metro
yarn start --reset-cache
```

Then rebuild in Xcode.

### Solution 2: Check for Swift Version Mismatch

In Xcode Build Settings, search for "Swift Language Version":
- Should be Swift 5 or later
- Make sure it matches TeadsSDK's requirements

### Solution 3: Verify Module Registration

Check that the native modules are being exported. In Xcode, set a breakpoint in:
- `TeadsEventModule.mm` line 15 (RCT_EXPORT_MODULE)
- `RCTTeadsAdPlacementMedia.mm` line 31 (init)

If these breakpoints never hit, the modules aren't being loaded.

### Solution 4: Check for Missing Swift Libraries

In Xcode Build Settings:
1. Search for "Always Embed Swift Standard Libraries"
2. Set to "Yes"

### Solution 5: Verify Info.plist Configuration

Check `ios/TestProject/Info.plist` for any required TeadsSDK keys or permissions.

## What the Debug Changes Show

The modified `Article.tsx` now:
1. **Logs all available native modules** - Shows if TeadsEventModule registered
2. **Visual indicators** - Red dashed boxes show where widgets should appear
3. **Labels** - Text shows what widget should be in each container

Even if the widgets have height 0, you should see the red boxes and labels.

## Next Steps

1. Run the app and check Metro console for the DEBUG logs
2. Share the Metro console output
3. Share any Xcode build warnings/errors
4. Check if you see the red dashed boxes (even without widgets)

This will help narrow down if it's a:
- Native module registration issue
- Native SDK linking issue  
- Event communication issue
- View rendering issue
