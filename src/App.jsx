import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AppBar } from "@mui/material";
import { TabPanel } from "@mui/base";

function App() {
  const [value, setValue] = useState(1);

  // kun event nii muutetaa value tabissa olevaa valueen (tabs value muuttuu)
  const changeValue = (event, value) => {
    setValue(value);
  };

  return (
    <div>
      <AppBar position="static" /*ilma static osa jää appbaarin taakse piiloo */ sx={{backgroundColor: 'white', color:'green'}} >
        <Tabs value={value} /*value={value} css effekti, toimii ilmanki */ onChange={changeValue}>
          <Tab
            label="Home"
            value={1} // valuen perusteella näytetää sivut
          />
          <Tab
            label="Todo"
            value={2}
          />
        </Tabs>
      </AppBar>
      <Container maxWidth="x1">
        
        {/* Container component, which is basic layout component, and it centers your app content horizontally. maxWidth props defines the maximum width of our app, and we are using the largest value */}
        {value === 1 ? <h1>kotisivu</h1> : <Todo />}
      </Container>
    </div>
  );
}

export default App;
