import React, { useRef, useState, useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  { id: 'name', label: 'NOMBRE', minWidth: 100 },
  { id: 'lastname', label: 'APELLIDO', minWidth: 100 },
  { id: 'age', label: 'EDAD', minWidth: 50 }, 
  { id: 'genre', label: 'GENERO', minWidth: 50 },
  { id: 'country', label: 'PAÍS', minWidth: 200,},
];

const createData = (name, lastname, age, genre, country, live) => {
  return { name, lastname, age, genre, country, live };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  tableCell: {
    color: "red",
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "black",
    color: "white",
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);


const TableCases = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
      
    const searchString = `http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`
    console.log(searchString)

    fetch(searchString)
        .then(res => res.json())
        .then(data => {
            let newRows = data.map(result =>
              
              { let genreStr =   JSON.stringify(result.female);
                genreStr === "true"
                ? genreStr = "Femenino"
                : genreStr = "Masculino"

                return(
                  createData(result.first_name, result.last_name, result.age, genreStr, result.country, result.live)
                )
              }); 
            setRows(newRows)
        })
  }, []);


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <>
                  <TableRow  style={{ color: !row.live ? 'red' : 'gray' }}
                             hover role="checkbox" tabIndex={-1} key={row.code}>
                    {console.log(row)}
                    {columns.map((column) => {
                      const value = row[column.id]                   
                      console.log(value)
                      return ( 
                        <TableCell style={{ color: "inherit"}}
                                   key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                          
                        </TableCell>  
                      );
                    })}
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableCases