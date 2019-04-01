import React from 'react';
import { Text, StyleSheet } from 'react-native';
import layout from '../utils/layout';

export default props => {
  const style = [props.style];
  if (props.shadow) {
    style.push(styles.shadow);
  }
  if (props.bold) {
    style.push(layout.bold);
  }

  return (
    <Text {...props} style={style}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -0, height: 2 },
    textShadowRadius: 5,
  },
});
