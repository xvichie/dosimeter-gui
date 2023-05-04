import logo from './logo.svg';
import './App.css';
import DoseModule from './Modules/DoseModule/DoseModule.jsx';
import Footer from './Modules/Footer/Footer.jsx';
import Header from './Modules/Header/Header.jsx';
import Options from './Modules/Options/Options.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Header></Header>
        </header>
        <Routes>
          <Route path="/" element={<><DoseModule /><Footer /></>}></Route>
          <Route path='/options' element={<Options />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
