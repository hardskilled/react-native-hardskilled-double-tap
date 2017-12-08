import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity } from 'react-native'

export default class HardskilledDoubleTap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lastPress: 0,
        }
    }

    onPressHandler() {
        const delta = new Date().getTime() - this.state.lastPress

        if (delta < this.props.delay && this.props.onPress) {
            this.props.onPress()
        }

        this.setState({
            lastPress: new Date().getTime(),
        })
    }

    render() {
        const Component = this.props.component
        const other = this.props

        delete other.component
        delete other.delay
        delete other.onPress

        return (
            <Component onPress={() => this.onPressHandler()} {...other}>
                {this.props.children}
            </Component>
        )
    }
}

DoubleClicker.defaultProps = {
    delay: 300,
    onPress: () => console.warn('Button is tapped'),
    component: TouchableOpacity
}

HardskilledDoubleTap.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.node,
    delay: PropTypes.number,
    component: PropTypes.node
}
