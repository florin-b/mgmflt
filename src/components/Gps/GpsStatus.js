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
        background: '#6C7AE0',
        color: 'white',
        fontWeight: 'bold'
    }
};

class GpsStatus extends Component {


    getInactiveGps() {


        if (this.props.status.length === 0)
            return;


        return this.props.status.map((gpsinactiv, index) => {
            const { classes } = this.props;

            return (
                <TableRow key={index} style={index % 2 ? { background: "#F8F6FF" } : { background: "white" }}>
                    <TableCell className={classes.body}>{index + 1}</TableCell>
                    <TableCell className={classes.body}>{gpsinactiv.nrAuto}</TableCell>
                    <TableCell className={classes.body}>{gpsinactiv.nrZileInact}</TableCell>
                </TableRow>
            )
        })




    }

    render() {
        const { classes } = this.props;

        let gpsEmpty = <div></div>
        let gpsInfo = this.getInactiveGps();

        let gpsData =
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead >
                        <TableRow >
                            <TableCell className={classes.header}>Nr.</TableCell>
                            <TableCell className={classes.header}>Nr. auto</TableCell>
                            <TableCell className={classes.header}>Zile inactivitate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {gpsInfo}
                    </TableBody>
                </Table>
            </TableContainer>

        return this.props.status.length === 0 ? gpsEmpty : gpsData;

    }

}

export default withStyles(styles)(GpsStatus);