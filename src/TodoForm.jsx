// TodoForm.jsx
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function TodoForm({
  gridRef,
  infoList,
  info,
  setInfo,
  handleClick,
  handlePoista,
}) {
  const [columnDefs, setColumnDefs] = useState([
    // annetaan olioille filteröinti
    {
      field: "time" /* headerName:'Time & Todo' */,
      filter: true,
      floatingFilter: true,
      /* valueGetter: p => p.time + ' ' + p.todo */ checkboxSelection: true,
    },
    { field: "todo", sortable: false, filter: true, floatingFilter: true },
    {
      field: "priority",
      filter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
      floatingFilter: true,
    },
  ]);

  //datepickerille oma funktio
  //date para
  //..info haetaa olio time ja sille : para arvoks
  const dateChange = (date) => {
    setInfo({...info, time: date})
  }

  return (
    <div>
      <Stack
        direction="row"
        /* column = pylväs */ spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            variant="standard"
            //datepickerille annetaan samat arvot ku alkuperäselle inputille
            value={info.time} 
            onChange={date => dateChange(date)} // Muutetaan tilaa uudella arvolla
          />
          
        </LocalizationProvider>
        <TextField
          variant="standard"
          label="Description"
          type="text"
          p
          name="todo"
          onChange={(e) => setInfo({ ...info, todo: e.target.value })}
          value={info.todo}
        />
        <TextField
          variant="standard"
          label="Priority"
          type="text"
          name="priority"
          onChange={(e) => setInfo({ ...info, priority: e.target.value })}
          value={info.priority}
        />
        <Button
          startIcon={<AddIcon></AddIcon>}
          variant="contained"
          color="success"
          /* <-- text */ className="add"
          onClick={handleClick}
        >
          lisää
        </Button>{" "}
        {/* MUI komponentti Button --> html button */}
        <Button
          startIcon={<DeleteIcon></DeleteIcon>}
          variant="outlined"
          color="error"
          className="del"
          onClick={handlePoista}
        >
          Poista valittu
        </Button>
      </Stack>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="ag-theme-material"
          style={{
            width: 700,
            height: 500,
            borderRadius: "10px",
            visibility: "visible",
            opacity: 1,
          }}
        >
          <AgGridReact
            ref={gridRef}
            onGridReady={(params) => (gridRef.current = params.api)}
            rowData={infoList}
            columnDefs={columnDefs}
            rowSelection="single"
            animateRows={true}
          />
        </div>
      </div>
    </div>
  );
}
