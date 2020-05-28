import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import history from '../../../utils/history';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    paper: {
        width: '220px',
        marginTop: '20px',
        background: '#F8F6FF',
        color: '#654fa7'

        
    }
};

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(itemName) {
        history.push({
            pathname: '/' + itemName
        }
        );
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar}>
                <Paper className={classes.paper}>
                <List disablePadding dense>
                    {this.props.items.map(({ label, name, ...rest }) => (
                        <ListItem key={name} button {...rest} onClick={this.handleClick.bind(this, name)} className={classes.sidebar_item}>
                            <ListItemText>{label}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                </Paper>
            </div>
        )
    }
}



export default withStyles(styles)(Sidebar);