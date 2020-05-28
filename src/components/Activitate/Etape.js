import React, { Component } from 'react';
import UtilsAddreses from '../../utils/UtilsAddreses';
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


class Etape extends Component {

    constructor(props) {
        super(props);
        this.getEvenimenteTraseu = this.getEvenimenteTraseu.bind(this);
    }
   

    getEvenimenteTraseu() {
        return this.props.bordInfo.map((eveniment, index) => {
            const { client } = eveniment;
            const { classes } = this.props;

            return (
                <TableRow key={client.poz} style={index % 2 ? { background: "#F8F6FF" } : { background: "white" }}>
                    <TableCell className={classes.body}>{index + 1}</TableCell>
                    <TableCell className={classes.body}>{client.numeClient}<br></br>{UtilsAddreses.getFormattedAddress(client)}</TableCell>
                    <TableCell className={classes.body}>{UtilsAddreses.validareSosire(eveniment)}</TableCell>
                    <TableCell className={classes.body}>{UtilsAddreses.validarePlecare(eveniment)}</TableCell>
                </TableRow>
            )
        })

    }


    render() {

        const { classes } = this.props;

        let etapeData = this.getEvenimenteTraseu();

        let etapeEmpty = <div></div>

        let bordData =
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead >
                        <TableRow >
                            <TableCell className={classes.header}>Nr.</TableCell>
                            <TableCell className={classes.header}>Client</TableCell>
                            <TableCell className={classes.header}>Sosire</TableCell>
                            <TableCell className={classes.header}>Plecare</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {etapeData}
                    </TableBody>
                </Table>
            </TableContainer>

        return this.props.bordInfo.length === 0 ? etapeEmpty : bordData;

    }


}

export default withStyles(styles)(Etape);
