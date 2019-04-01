import React from 'react';
import { View, TextInput } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import ApiceIcon from './ApiceIcon';
import layout from '../utils/layout';

export default class ApiceInput extends React.Component {

  constructor() {
    super();
    this.firstFocus = true;
  }

  onChangeText(text) {
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  }

  setNativeProps(props) {
    this.input.setNativeProps(props);
  }

  getInputStyle() {
    return [styles.input, this.props.textStyle,
            { paddingTop: 9, paddingBottom: 9 },
             this.props.icon ? { paddingLeft: 47 } : {},
             this.props.editable === false ? styles.disabeldInput : {}];
  }

  onFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    if (this.props.startAt0 && this.firstFocus) {
      this.firstFocus = false;
      this.blur();
      this.forceUpdate();
    }
  }

  blur() {
    this.input.blur();
  }

  focus() {
    this.input.focus();
  }

  renderInput() {
    const focusStyle = {};
    if (this.props.startAt0) {
      focusStyle.autoFocus = true;
      if (this.firstFocus) {
        focusStyle.selection = { start: 0, end: 0 };
      }
    }

    return this.props.mask ? (
      <TextInputMask {...this.props}
                     onChangeText={this.onChangeText.bind(this)}
                     refInput={e => this.input = e}
                     style={this.getInputStyle()}
                     selectTextOnFocus
                     autoCapitalize={this.props.autoCapitalize || 'characters'}
                     placeholderTextColor='rgb(170, 170, 170)'
                     underlineColorAndroid='rgba(0,0,0,0)' />
    ) : (
      <TextInput {...this.props}
                 onChangeText={this.onChangeText.bind(this)}
                 style={this.getInputStyle()}
                 ref={e => this.input = e}
                 selectTextOnFocus
                 {...focusStyle}
                 onFocus={this.onFocus.bind(this)}
                 autoCapitalize={this.props.autoCapitalize || 'characters'}
                 placeholderTextColor='rgb(170, 170, 170)'
                 underlineColorAndroid='rgba(0, 0, 0, 0)' />
    );
  }

  renderIcone() {
    return this.props.icon ? (
      <React.Fragment>
        <ApiceIcon shadow icon={this.props.icon || ''}
                   style={[layout.abs, styles.icon]} />
        <View style={[styles.iconDividerLine]} />
      </React.Fragment>
    ) : (
      <React.Fragment />
    );
  }

  render() {
    return (
      <View style={[this.props.style]} >
        {this.renderInput()}
        {this.renderIcone()}
      </View>
    );
  }
}

const styles = {
  input: {
    height: 40, 
    borderRadius: 3,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
  },
  icon: {
    top: 10,
    left: 10,
  },
  disabledInput: {
    backgroundColor: 'rgb(255, 247, 229)',
    color: 'rgb(33, 33, 33)',
  },
  iconDividerLine: {
    position: 'absolute',
    height: 24,
    top: 8,
    left: 39,
    width: 1,
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
};
