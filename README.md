# Double Tap for React Native

![Example](https://media.giphy.com/media/3o6nUSd2HqDivbAUXC/giphy.gif)

## Installation
`npm install react-native-hardskilled-double-tap --save`

## Example
```jsx
import React, { Component } from 'react'
import DoubleTap from 'react-native-hardskilled-double-tap';
import { Text, TouchableNativeFeedback } from 'react-native'

export default class Example extends Component {
    constructor(props) {
        super(props);
    }

    handler() {
        console.warn('DoubleTap clicked!');
    }

    render() {
        return (
            <DoubleTap
                onPress={this.handler} // Handler after double tap on button
                delay={500} // Delay between tapas
                component={TouchableNativeFeedback} // Custom component with onPress (default: TouchableOpacity)
            >
                <Text>Click me pls!</Text>
            </DoubleTap>
        );
    }
}
```

[Hire us via Upwork!](https://www.upwork.com/o/companies/_~01b5cde52d5f4ead84/) | [Our website](https://hardskilled.com)
