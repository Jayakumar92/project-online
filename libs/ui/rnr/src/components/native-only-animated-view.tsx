import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import { ComponentProps, Fragment, ReactNode, RefAttributes } from 'react';
function NativeOnlyAnimatedView(
  props: ComponentProps<typeof Animated.View> & RefAttributes<Animated.View>,
) {
  const { children } = props;
  if (Platform.OS === 'web') {
    return <Fragment>{children as ReactNode}</Fragment>;
  }
  return <Animated.View {...props} />;
}

export { NativeOnlyAnimatedView };
