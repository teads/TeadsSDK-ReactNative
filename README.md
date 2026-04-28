# Integrating teads-react-native into Your React Native App

This guide provides the mandatory steps to integrate the `teads-react-native` library into your React Native application.

## Quick Start - 4 Simple Steps

1. **Install the package**: `yarn add teads-react-native`
2. **Install peer dependencies**: `yarn add react-native-gesture-handler react-native-inappbrowser-reborn react-native-safe-area-context`
3. **iOS**: Run `cd ios && pod install && cd ..`
4. **Android**: Add Teads Maven repository to `android/build.gradle` or `android/settings.gradle`

That's it! The library uses React Native autolinking and requires no manual linking or configuration.

## Prerequisites

- **React Native**: >= 0.78.0 with New Architecture (Fabric) enabled
- **Node.js**: >= 20.19.0
- **iOS**: >= 13.0, CocoaPods installed
- **Android**: minSdkVersion >= 21, Android Studio configured

## Detailed Installation Steps

### Step 1: Install the Package

Add the teads-react-native library to your project:

```bash
yarn add teads-react-native
```

or with npm:

```bash
npm install teads-react-native
```

### Step 2: Install Peer Dependencies

The library requires the following peer dependencies:

```bash
yarn add react-native-gesture-handler react-native-inappbrowser-reborn react-native-safe-area-context
```

### Step 3: iOS Setup

Navigate to the iOS directory and install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

The library will be automatically linked via React Native autolinking. This will install:
- **TeadsSDK** (native iOS SDK)
- All required React Native Fabric components

**No additional iOS configuration is required.** The library works with standard CocoaPods and requires no custom Podfile modifications.

### Step 4: Android Setup

**Add Teads Maven Repository**

In your **project-level** `android/build.gradle` file, add the Teads SDK repository:

```gradle
allprojects {
    repositories {
        // ... other repositories (google(), mavenCentral(), etc.)
        maven { url "https://teads.jfrog.io/artifactory/SDKAndroid-maven-prod" }
        maven {
            // Mandatory for Huawei device compatibility
            url "https://developer.huawei.com/repo/"
        }
    }
}
```

**For React Native 0.71+** using `android/settings.gradle`, add repositories in the `dependencyResolutionManagement` block:

```gradle
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    repositories {
        // ... other repositories
        maven { url "https://teads.jfrog.io/artifactory/SDKAndroid-maven-prod" }
        maven { url "https://developer.huawei.com/repo/" }
    }
}
```

**No additional Android configuration is required.** The library will be automatically linked via React Native autolinking and registered as a Fabric component.

## Important Notes

✅ **No Manual Linking Required** - The library uses React Native autolinking. Both iOS and Android will automatically detect and link the library.

✅ **No Podfile Modifications** - The library works with the standard React Native Podfile. No custom post_install hooks or build settings are needed.

✅ **No MainApplication Changes** - The library automatically registers with React Native. No manual package registration is needed in `MainApplication.kt`/`MainApplication.java`.

✅ **Fabric/New Architecture** - The library is built for React Native's New Architecture and uses Fabric components natively.

### 5. Verify Installation

Check that the import path in your entry file (`index.js`) is correct:

```javascript
import {AppRegistry} from 'react-native';
import App from './src/App';  // Ensure correct path with ./
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

### Step 5: Import and Use the Library

The library provides two components:

#### TeadsAdPlacementFeed - For Feed Widgets

```typescript
import { TeadsAdPlacementFeed } from 'teads-react-native';

<TeadsAdPlacementFeed
  widgetId="your-widget-id"
  widgetIndex={0}
  articleUrl="https://your-article-url.com"
  partnerKey="your-partner-key"
  darkMode={false}
  extId="optional-external-id"
  extSecondaryId="optional-secondary-id"
  userId="optional-user-id"
  pubImpId="optional-publisher-impression-id"
/>
```

#### TeadsAdPlacementMedia - For Media/Video Widgets

```typescript
import { TeadsAdPlacementMedia } from 'teads-react-native';

<TeadsAdPlacementMedia
  pid="your-placement-id"
  url="https://your-article-url.com"
  installationKey="your-installation-key"
/>
```

## Running Your App

### Start Metro Bundler

```bash
yarn start
```

### Run on iOS

```bash
yarn ios
```

or open `ios/TestProject.xcworkspace` in Xcode and run from there.

### Run on Android

```bash
yarn android
```

## Troubleshooting

### Components Not Rendering

**Symptom:** The Teads ad components render but no widgets appear.

**Solution:** Verify that:
1. You've completed all installation steps, including `pod install` for iOS
2. The peer dependencies are installed
3. For Android, the Teads Maven repository is added to your gradle configuration
4. You've rebuilt the app after installation

### iOS Build Issues

**Error:** `'TeadsSDK/TeadsSDK-Swift.h' file not found`

**Solution:** Ensure you've run `pod install` after installing the library:
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

### Android Build Issues

**Error:** `Could not resolve tv.teads.sdk:sdk`

**Solution:** Ensure the Teads Maven repository is added to your gradle configuration (see Step 4).

### Peer Dependencies Warnings

**Warning:** `warning "teads-react-native" has unmet peer dependency`

**Solution:** Install the required peer dependencies:
```bash
yarn add react-native-gesture-handler react-native-inappbrowser-reborn react-native-safe-area-context
```

## Project Structure

```
TestProject/
├── android/              # Android native code
├── ios/                  # iOS native code
│   ├── Pods/            # CocoaPods dependencies (including TeadsSDK)
│   └── TestProject.xcworkspace  # Open this in Xcode, not .xcodeproj
├── node_modules/         # JavaScript dependencies
├── src/                  # Your React Native source code
│   ├── App.tsx          # Main app component
│   ├── Article.tsx
│   ├── ConfigScreen.tsx
│   └── ...
├── index.js              # App entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Required Dependencies

### Core Package
- `teads-react-native` - Teads advertising SDK for React Native

### Peer Dependencies (Required)
- `react-native-gesture-handler` - Required for gesture handling in ad interactions
- `react-native-inappbrowser-reborn` - Required for in-app browser functionality
- `react-native-safe-area-context` - Required for proper layout in safe areas

### Native SDKs (Automatically Installed)
- **iOS**: `TeadsSDK` (~> 6.0.5) - Installed via CocoaPods
- **Android**: `tv.teads.sdk:sdk` - Installed via Gradle from Teads Maven repository

## Compatibility

- **React Native**: >= 0.78.0 (New Architecture/Fabric required)
- **React**: Compatible with React 19.0.0+
- **iOS**: >= 13.0
- **Android**: minSdkVersion >= 21
- **Node.js**: >= 20.19.0

## Development Commands

```bash
# Install dependencies
yarn install

# Start Metro bundler
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android

# Lint code
yarn lint

# Run tests
yarn test

# iOS pod install
cd ios && pod install && cd ..
```

## Additional Resources

- [Teads SDK Documentation](https://support.teads.tv/support/solutions)
- [React Native Documentation](https://reactnative.dev/)
- [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting)
- [CocoaPods Getting Started](https://guides.cocoapods.org/using/getting-started.html)

## Support

For issues specific to the teads-react-native library, please refer to:
- Library repository issues
- Teads technical support

For React Native setup issues, consult:
- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [React Native Community](https://github.com/react-native-community)

---

**Note:** This test project was created to validate the teads-react-native@6.0.6-alpha.3 release in a clean React Native 0.78.2 environment.
