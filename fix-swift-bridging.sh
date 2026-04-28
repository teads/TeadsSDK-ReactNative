#!/bin/bash

echo "=== Fixing Swift Bridging for teads-react-native ==="
echo ""

cd ios

# Clean everything
echo "1. Cleaning build artifacts..."
rm -rf build/
rm -rf ~/Library/Developer/Xcode/DerivedData/TestProject-*
rm -rf Pods/
rm -f Podfile.lock

echo "✅ Cleaned"
echo ""

# Reinstall pods
echo "2. Reinstalling CocoaPods..."
pod install

echo "✅ Pods installed"
echo ""

echo "3. Build settings to verify in Xcode:"
echo "   - Open TestProject.xcworkspace (NOT .xcodeproj!)"
echo "   - Select 'Pods-TestProject' target"
echo "   - Go to Build Settings"
echo "   - Search for 'Defines Module'"
echo "   - Ensure 'Defines Module' = YES"
echo ""
echo "   - Search for 'Swift Compiler - General'"
echo "   - Ensure 'Install Objective-C Compatibility Header' = YES"
echo ""

cd ..

echo "=== Next Steps ==="
echo "1. Open ios/TestProject.xcworkspace in Xcode"
echo "2. Clean Build Folder (Cmd+Shift+K)"
echo "3. Build (Cmd+B)"
echo "4. Check for 'TeadsReactNative-Swift.h' in build output"
echo "5. Run the app"
