import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: '30vw',
    width:'30vw',
    maxHeight:'15vh',
    height:'15vh' 
  },
});

function createData(name, value) {
  return { name, value };
}

const getData = (data) => {
    let rows = []
    data.map((element) => {
        rows.push(createData(element[0], element[1]))
    })
    return rows
}

export default function BasicTable({
    data
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {getData(Object.keys(data).map((key) => [key, data[key]])).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}