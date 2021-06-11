import React, { useState, useEffect } from "react";
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SwitchOrderByAge from './SwitchOrderByAge';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Typography from '@material-ui/core/Typography';


const columns = [
  { id: 'name', label: 'NOMBRE', minWidth: 100 },
  { id: 'lastname', label: 'APELLIDO', minWidth: 100 },
  { id: 'age', label: 'EDAD', minWidth: 50 },
  { id: 'genre', label: 'GENERO', minWidth: 50 },
  { id: 'country', label: 'PAÍS', minWidth: 200, },
];

const createData = (name, lastname, age, genre, country, live) => {
  return { name, lastname, age, genre, country, live };
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    minWidth: '70vw',
  }, 
  switchContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  tableContainer: {
    width: "100%",
  },
  textContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  title1: {
    color: "gray",
    marginRight: 10,
    fontStyle: "italic",
  },
  title2: {
    color: "#ff63b1",
    fontStyle: "italic",
  }, 
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  downloadTableBtn: {
    marginTop: 10,
    textDecoration: "none",
    padding: 10,
    fontWeight: 400,
    fontSize: 14,
    color: "#ffffff",
    backgroundColor: "black",
    borderRadius: 5,
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
  const [queryParams, setQueryParams] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {

    const searchString = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected${queryParams}`

    axios.get(searchString)
         .then(response => {
          let newRows = response.data.map(result => {
          let genreStr = JSON.stringify(result.female);
          genreStr === "true"
            ? genreStr = "Femenino"
            : genreStr = "Masculino"

          return (
            createData(result.first_name, result.last_name, result.age, genreStr, result.country, result.live)
          )
        });
        setRows(newRows)
      })
  }, [queryParams]);

  return (
     
     <Container maxWidth="false" className={classes.root}>
        <div className={classes.switchContainer}>
          <SwitchOrderByAge queryParams={queryParams}
            setQueryParams={setQueryParams} />
        </div>
        <Paper className={classes.tableContainer}>
          <TableContainer>
            <Table id="tableToXls" stickyHeader aria-label="sticky table">
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
                      <TableRow style={{ color: !row.live ? 'gray' : '#ff63b1' }}
                        hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell style={{ color: "inherit" }}
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
        <div className={classes.textContainer}>
          <Typography className={classes.title1}
            variant="body2" gutterBottom>
            Pacientes fallecidos
          </Typography>
          <Typography className={classes.title2}
            variant="body2" gutterBottom>
            Pacientes vivos
          </Typography>
        </div>
        <div className={classes.btnContainer}>
          <ReactHTMLTableToExcel
            id="table-xls-button"
            className={classes.downloadTableBtn}
            table="tableToXls"
            filename="tablaCasosPositivosCovid-19"
            sheet="tablexls"
            buttonText="Descargar página actual en Excel" />
        </div>
      </Container>
     
    );
}

export default TableCases