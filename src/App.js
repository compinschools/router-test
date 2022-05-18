import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Add from './Add';
import View from './View';
import Edit from './Edit';
function App() {
  return (
    <div className="App">
      <a href="#/add">Add</a>
      <a href="#/">View</a>
      <a href="#/edit">Edit</a>

      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/add" element={<Add />} />

      </Routes>

    </div>
  );
}

export default App;
