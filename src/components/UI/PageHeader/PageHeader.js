import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
    paper: {
        marginTop: '15px',
        marginLeft: '50px',
        background: '#F8F6FF',
        height: '50px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '50px',
        fontFamily: 'Roboto',
        color: '#6c7ae0',
        fontSize: '17px'
    }
};

class PageHeader extends Component {


    render() {

        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>{this.props.headerName}</Paper>
        )
    }
}

export default withStyles(styles)(PageHeader);