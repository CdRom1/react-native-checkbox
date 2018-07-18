'use strict';

import React, { Component } from 'react';

const PropTypes = require('prop-types');

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';


const DESSIN_ENABLED =  <Svg
width="20"
   height="20"
   viewBox="0 0 20 20"
><Rect
     rx="3.5087719"
     width="18"
     height="18"
     x="1"
     y="1"
     fill="none" strokeWidth="0.37463433" stroke="#6d6f71" stroke-opacity="1" />
  <Path
     fill="none" stroke="#ffd514" stroke-width="1.60000002" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1"
     d="M 3.4957628,10.312712 7.838983,14.867796 16.31356,5.7576272"
     id="path5701"


 /></Svg>


const DESSIN_DISABLED = <Svg
   width="20"
   height="20"
   viewBox="0 0 20 20"
>
  <Rect
     rx="3.5087719"
     width="18"
	x="1"
	y="1"
     height="18"
     fill="none" strokeWidth="0.37463433" stroke="#6d6f71" stroke-opacity="1" />
</Svg>


class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            internalChecked: false,
            isDisabled : props.disabled
        };
        this.baseState = this.state;
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        if (this.props.onChange &&  typeof this.props.checked === 'boolean') {
            this.props.onChange(this.props.checked);
        } else {
            let internalChecked = this.state.internalChecked;
            let newState = !internalChecked;

            if(this.props.onChange){
              this.props.onChange(newState);
            }
            this.setState({
                internalChecked: newState
            });
        }
    }
    componentWillMount() {
        this.setState(this.baseState)
    }

    render() {
        let container = (
            <View style={this.props.containerStyle || styles.container}>
                
			{dessin}
                <View style={styles.labelContainer}>
                    <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                </View>
            </View>
        );


	let dessin;

        if(typeof this.props.checked === 'boolean') {

	dessin = this.props.checked ? this.props.checkedSvg : this.props.uncheckedSvg;

        } else {

	dessin = this.state.internalChecked ? this.props.checkedSvg : this.props.uncheckedSvg;
        }


        if (this.props.labelBefore) {
            container = (
                <View style={this.props.containerStyle || [styles.container, styles.flexContainer]}>
                    { (this.props.label ? (
                      <View style={styles.labelContainer}>
                          <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                      </View>
                    ) : <View></View>) }
                	{dessin}
                </View>
            );
        } else {
            container = (
                <View style={[styles.container, this.props.containerStyle]}>
                	{dessin}

                    { (this.props.label ? (
                      <View style={styles.labelContainer}>
                          <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                      </View>
                    ) : <View></View>) }
                </View>
            );
        }

        return (
            <TouchableHighlight onPress={this.onChange} underlayColor={this.props.underlayColor} style={styles.flexContainer} disabled = {this.state.isDisabled}>
                {container}
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkbox: {
        width: 26,
        height: 26
    },
    labelContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    label: {
        fontSize: 15,
        color: 'grey'
    }
});

CheckBox.propTypes = {
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    labelLines: PropTypes.number,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
    checked: PropTypes.bool,
    checkedSvg: PropTypes.element,
    uncheckedSvg: PropTypes.element,
    underlayColor: PropTypes.string,
    onChange: PropTypes.func
};

CheckBox.defaultProps = {
    label: 'Label',
    labelLines: 1,
    labelBefore: false,
    checked: null,
   
    checkedSvg: DESSIN_ENABLED,
    uncheckedSvg : DESSIN_DISABLED,
    underlayColor: 'transparent'
};

module.exports = CheckBox;
