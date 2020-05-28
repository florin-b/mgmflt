import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
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

class Livrari extends Component{

    getLivrari() {
        return this.props.livrariInfo.map((eveniment, index) => {
            const { classes } = this.props;

            return (
                <TableRow key={index} style={index % 2 ? { background: "#F8F6FF" } : { background: "white" }}>
                    <TableCell className={classes.body}>{index + 1}.</TableCell>
                    <TableCell className={classes.body}>{eveniment.numeClient}</TableCell>
                    <TableCell className={classes.body}>{eveniment.adresa}</TableCell>
                    
                </TableRow>
            )
        })

    }


    render(){

        const { classes } = this.props;

        let livrariEmpty = <div></div>

        let livrariData = this.getLivrari();

        let livrariRes =

        <div><p>Marfa nu a fost livrata la urmatorii clienti:</p>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead >
                    <TableRow >
                        <TableCell className={classes.header}>Nr.</TableCell>
                        <TableCell className={classes.header}>Client</TableCell>
                        <TableCell className={classes.header}>Adresa</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {livrariData}
                </TableBody>
                <TableFooter></TableFooter>
            </Table>
        </TableContainer>
        </div>


        return this.props.livrariInfo.length === 0 ? livrariEmpty : livrariRes;
    }
}

export default withStyles(styles)(Livrari);