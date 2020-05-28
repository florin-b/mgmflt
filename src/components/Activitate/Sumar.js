import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    body: {
      color: '#80809f'
    },
    header: {
        color: '#80809f',
        fontWeight: 'bold'
      }
  };

class Sumar extends Component {

    render() {

        const { classes } = this.props;

        let sumarEmpty = <div></div>

        let sumarData =
            <TableContainer component={Paper} >
                <Table size="small" >
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        <TableRow  style ={{ background : "#F8F6FF" }} >
                            <TableCell className={classes.header}>Start cursa</TableCell>
                            <TableCell className={classes.body}>{this.props.sumarInfo.dataStart}</TableCell>
                        </TableRow>
                        <TableRow  style ={{ background : "white" }}>
                            <TableCell className={classes.header}>Stop cursa</TableCell>
                            <TableCell className={classes.body}>{this.props.sumarInfo.dataStop}</TableCell>
                        </TableRow>
                        <TableRow style ={{ background : "#F8F6FF" }}>
                            <TableCell className={classes.header}>Durata</TableCell>
                            <TableCell className={classes.body}>{this.props.sumarInfo.durata}</TableCell>
                        </TableRow>
                        <TableRow style ={{ background : "white" }}>
                            <TableCell className={classes.header}>Km</TableCell>
                            <TableCell className={classes.body}>{this.props.sumarInfo.km}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>


        return this.props.sumarInfo === '' ? sumarEmpty : sumarData;

    }

}


export default withStyles(styles)(Sumar);