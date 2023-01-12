# react-native-teads-sdk-module

inplementation of teads sdk in react native

## Installation on an another app

````sh
npm i
npm install react-native-teads-sdk-module```

## Usage

```js
import { teadsExample } from "react-native-teads-sdk-module";

// ...

const result = await teadsExample();
````

## launch the example here

yarn
yarn example android
(for ios simulator)
yarn example ios

OR

directly from Xcode with

cd thisRepo/example/ios
rm -rf Pods/ Podfile.lock TeadsSdkModuleExample.xcworkspace/
pod install
open TeadsSdkModuleExample.xcworkspace/

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
