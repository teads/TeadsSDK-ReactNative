import React, { useEffect, useRef } from 'react';
import { PixelRatio, UIManager, findNodeHandle } from 'react-native';

import { MyViewManager } from './my-view-manager';

const createFragment = (viewId: number | null) =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    1,
    [viewId]
  );

export const MyView = () => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, []);

  return <MyViewManager ref={ref} />;
};
