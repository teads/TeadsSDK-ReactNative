#!/bin/bash
echo "Waiting for you to build in Xcode..."
echo "Press ENTER after the Xcode build completes..."
read

echo ""
echo "=== Checking Build Results ==="
echo ""

echo "1. Looking for TeadsReactNative-Swift.h..."
SWIFT_HEADER=$(find ios/build -name "TeadsReactNative-Swift.h" 2>/dev/null | head -1)
if [ -n "$SWIFT_HEADER" ]; then
    echo "✅ FOUND: $SWIFT_HEADER"
    echo "   File size: $(ls -lh "$SWIFT_HEADER" | awk '{print $5}')"
else
    echo "❌ NOT FOUND - Swift bridging header missing"
    echo ""
    echo "Possible issues:"
    echo "- Swift compilation failed"
    echo "- Check Xcode build log for Swift errors"
fi

echo ""
echo "2. Checking if teads-react-native was built as a framework..."
if [ -d "ios/Pods/../../build/Build/Products/Debug-iphonesimulator/teads-react-native" ]; then
    echo "✅ teads-react-native framework exists"
else
    echo "⚠️  Framework not found in expected location"
fi

echo ""
echo "3. Next: Run the app and check Xcode console for:"
echo "   - 'TeadsAdContainer:' logs (from Swift)"
echo "   - 'TeadsAdContainer .heightUpdated:' logs"
echo ""
echo "If you see those logs, the widgets should now appear!"
