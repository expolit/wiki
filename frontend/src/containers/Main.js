import React, { Component } from 'react';
import {Map, List} from 'immutable'
import {MainTemplate} from 'components'

class Main extends Component {
    type = List([
        Map({
            
        })
    ])

    render() {
        return (
            <div>
                <MainTemplate/>
            </div>
        );
    }
}

export default Main;