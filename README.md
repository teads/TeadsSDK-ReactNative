# react-native-teads-sdk-module

implementation of teads sdk in react native

## Installation on an another app

not implemented yet

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
```

OR

```sh
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
with metro launched on the side

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
