<p align="center">
    <a href="https://teads.com/" target="_blank">
        <img width="75%" src="https://raw.githubusercontent.com/teads/TeadsSDK-flutter/main/ReadmeResources/teads_logo.png" alt="Teads logo">
    </a>
</p>

---

# 🚀 TeadsSDK on React Native with react-native-teads-sdk-module

Teads allows you to integrate a single SDK into your app, and serve premium branded "outstream" video ads from Teads SSP ad server.
This sample app shows you how to use our official TeadsSDK with React Native.

# 🔜 Installation our npm package on your app

not available yet

```sh
npm install react-native-teads-sdk-module
```

# ⚙️ Usage of react-native-teads-sdk-module

```js
import { TeadsModule } from 'react-native-teads-sdk-module';

// ...

const result = await TeadsModule();
```

## 🚲 Launch the example App

```sh
yarn
yarn example android
```

OR

```sh
yarn
yarn example ios
```

with IDE

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
with metro launched on the side

## 🎓 Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## ✅ License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
