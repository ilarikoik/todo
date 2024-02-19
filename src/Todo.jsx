import { useState } from "react";

export default function Todo() {
  const [info, setInfo] = useState({ time: "", todo: "" });
  const [infoList, setInfoList] = useState([]);

  const changeValue = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    setInfoList([info, ...infoList]);
    setInfo({ time: "", todo: "" });
  };
  const handlePoista = (index) => {
    const kopio = [...infoList];
    kopio.splice(index, 1);
    setInfoList(kopio);
    /* setInfoList(infoList.filter((itemi,currIndex) => currIndex !== index)); */
    {/* <button onClick={() => handlePoista(index)}>Poista</button> */}

  };
  return (
    <div>
        <div className="formi">

      <h2>Todo List</h2>
      <input
        className="inputs"
        type="text"
        placeholder="Time"
        name="time"
        onChange={changeValue}
        value={info.time}
      />
      <input
      className="inputs"
        type="text"
        placeholder="Todo"
        name="todo"
        onChange={changeValue}
        value={info.todo}
      />
      <button className="add" onClick={handleClick}>lisää</button>
      </div>

    <div className="itemit">
      <table className="hmm" >
        <thead>
          <tr>
            <th className="hmmth">aika</th>
            <th className="hmmth">todo</th>
          </tr>
        </thead>
        <tbody>
        {infoList.map((item, index) => (
            <tr  key={index}>
            <td>{item.time}</td>
            <td>{item.todo}</td>
            <td>
              <button className="del" onClick={handlePoista}>Poista</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
        </div>
    </div>
  );
}
