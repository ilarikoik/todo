// TodoForm.jsx
import React, { useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
export default function TodoForm({gridRef,infoList, info,setInfo, handleClick, handlePoista}) {

  const [columnDefs,setColumnDefs] = useState ([
    {field: 'time', filter:true},
    {field: 'todo', sortable: false, filter:true},
    {field: 'priority',filter: true,cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'} }
  ])

  return (
    <div>
      <input
       className="inputs"
        type="text"
        placeholder="Time"
        name="time"
        onChange={e => setInfo({...info, time: e.target.value})}
        value={info.time}
      />
      <input
       className="inputs"
        type="text"
        placeholder="Todo"
        name="todo"
        onChange={e => setInfo({...info, todo: e.target.value})}
        value={info.todo}
      />
       <input
          className="inputs"
          type="text"
          placeholder="Priority"
          name="priority"
          onChange={e => setInfo({...info, priority: e.target.value})}
          value={info.priority}
        />
      <button className='add' onClick={handleClick}>lisää</button> 
      <button className='del' onClick={handlePoista}>Poista valittu</button>

    <div className='form'>
      <div className="ag-theme-material" style={{width: 700, height: 500, borderRadius: '10px'}}>
      <AgGridReact 
      ref={gridRef}
      onGridReady={ params => gridRef.current = params.api }
      rowData={infoList}
      columnDefs={columnDefs}
      rowSelection="single"
      />
    </div>
      </div>
    </div>
  );
}
