
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users/Users';
import Header from './components/Header/Header';
import ListUsers from './ListUsers/ListUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Header/>        
        <Routes>
           <Route path="/" element={<ListUsers/>}/>
            <Route path="/add-user" element={<Users/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
