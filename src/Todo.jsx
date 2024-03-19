import { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

export default function Todo() {
  const [info, setInfo] = useState({ time: "", todo: "", priority: "" });
  const [infoList, setInfoList] = useState([]);
  const gridRef = useRef();

 /*  const changeValue = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }; */

  const handleClick = () => {
    setInfoList([info, ...infoList]);
    setInfo({ time: "", todo: "" ,  priority:""});
  };

  const handlePoista = () => {
    /* const kopio = [...infoList];
    kopio.splice(index, 1);
    setInfoList(kopio); */
    /* setInfoList(infoList.filter((itemi,currIndex) => currIndex !== index)); */
    {
      /* <button onClick={() => handlePoista(index)}>Poista</button> */
    }
    if (gridRef.current && gridRef.current.getSelectedNodes().length > 0) {
      const selectedIndex = gridRef.current.getSelectedNodes()[0].childIndex;
      setInfoList(infoList.filter((info, index) => index !== selectedIndex));
    } else {
      alert("Select a row first");
    }
  };

  
  return (
    <div>
        {/* <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white',  background: '#007bff', borderRadius:'10px', fontFamily:'arial', height:'7vh' }} >Todo List</h2> */}
      <TodoForm infoList={infoList} gridRef={gridRef} useRef={useRef} info={info} setInfo={setInfo} handleClick={handleClick} handlePoista={handlePoista} />
        {/*   <thead>
            <tr>
              <th className="hmmth">Time</th>
              <th className="hmmth">Todo</th>
              <th className="hmmth">Priority</th>
            </tr>
          </thead>
          <tbody>
            {infoList.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.todo}</td>
                <td>{item.priority}</td>
                <td>
                  <button className="del" onClick={handlePoista}>
                    Poista
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
      </div>
  );
}
