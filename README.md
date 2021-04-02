# react-native-checkbox-svg [archived]

Checkbox component supporting SVG graphics for React native.

**This repo is archived, I'm not currently working on it, as nobody uses it. However, if it fits your needs, or if you need some small changes, feel free to contact me.**

Fork of [sconxu/react-native-checkbox](https://github.com/sconxu/react-native-checkbox)

SVG rendering based on [react-native-community/react-native-svg](https://github.com/react-native-community/react-native-svg)

## Installation:

Install the component through npm using:

```
npm install react-native-checkbox-svg --save
```


## Example:
```js

import CheckBox from 'react-native-checkbox-svg';


<CheckBox
  label='Label'
  checked={true}
  onChange={(checked) => console.log('I am checked', checked)}
/>
```

## Props:


- `label` : text that will be displayed along the checkbox
- `labelBefore` : position the label before the checkbox (boolean). The default
value is false
- `labelStyle` : style object that will be applied to the label
- `checked` : initial checked value
- `checkedSvg`: checked image (e.g.: <Svg height="100" width="100"><Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" /></Svg>)
- `checkboxStyle` : style object that will be applied to the
  checkbox
- `uncheckedSvg`: unchecked image
- `onChange` : callback function that will be invoked with the toggled checked property as argument.
- `containerStyle` : style object that will be applied to the
  container
- `underlayColor` : style the touchable component underlay color
- `accessible` : indicates whether view is an accessible element
- `accessibilityLabel` : maps to content description / label for Android automation
- `testID` : maps to id / name for iOS automation
