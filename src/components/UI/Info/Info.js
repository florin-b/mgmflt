import React, { Component } from 'react';
import classes from './Info.module.css';

class Info extends Component {

    render() {
        return (
            <div className={classes.Info}>{this.props.infoText}</div>
        )
    }

}


export default Info;