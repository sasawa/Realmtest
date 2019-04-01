import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApiceText from './ApiceText';
import ApiceIcon from './ApiceIcon';

export default class ApiceButton extends React.Component {

  constructor() {
    super();
    this.canPress = true;
  }

  onPress() {
    if (this.props.onPress && this.canPress) {
      this.canPress = false;
      this.props.onPress();
      setTimeout(() => this.canPress = true, 1500);
    }
  }

  render() {
    const props = this.props;
    return (
      <TouchableOpacity style={[styles.wrapper, props.style,
          props.horizontal ? { flexDirection: 'row' } : {}]}
                        onPress={this.onPress.bind(this)}
                        disabled={props.disabled} >
        {props.icon && <Icon shadow name={props.icon}
          style={[styles.icon, props.iconStyle]} />}               
        {props.text && <ApiceText text={props.text} style={[styles.text, props.textStyle]} />}               
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40, 
    borderRadius: 2, 
    backgroundColor: global.COR_PRIMARIA || 'rgb(44, 144, 223)',
    elevation: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  icon: {
    color: 'black',
    fontSize: 30,
  },
  
});
