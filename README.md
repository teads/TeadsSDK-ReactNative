<<<<<<< HEAD
# Teads SDK for React Native

This is a sample with the basic implementation of Teads ads within a React Native application. Teads does not provide an offical React Native component.

[Teads SDK Documentation for Android & iOS](https://support.teads.tv/support/solutions/articles/36000165909)

# Setup

Install Expo, then

```
npm install
```

# Run

```
npm start
```

# Run Android

open your favorite android emulator
click A key to open your app in Expo Go
(this will run your app without your native modules, so without the sdk)

# Run iOS

open an ios simulator
click I key to open your app in Expo Go
(this will run your app without your native modules, so without the sdk)

# Run Android with the natives modules

```
npm start
```

build the android app, and lauch it via Android Studio

# Run iOS with the natives modules

```
npm start
```

build the iOS app, and lauch with :

```
npm run ios
```
=======
# react-native-teads-sdk-module

implementation of teads sdk in react native

## Installation on an another app

```sh
npm i
npm install react-native-teads-sdk-module
```

## Usage

```js
import { TeadsModule } from 'react-native-teads-sdk-module';

// ...

const result = await TeadsModule();
```

## launch the example here

```sh
yarn
yarn example android

OR

yarn example ios
```

OR

directly from Xcode with

```sh
cd YourRepository/example/ios
rm -rf Pods/ Podfile.lock TeadsSdkModuleExample.xcworkspace/
pod install
open TeadsSdkModuleExample.xcworkspace/
```

then build and run

OR

directly from Android studio

open project and run it
with metro launch on the side

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
>>>>>>> a8c1c56 (chore: initial commit)
