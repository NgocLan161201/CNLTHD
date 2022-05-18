import './App.css';
import React, { useReducer, createContext } from 'react';
import Header from "./layout/Header";
import Home from "./components/Home";
import DatVe from "./components/DatVe";
import TuyenDuong from "./components/TuyenDuong";
import Footer from "./layout/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import myReducer from './reducers/MyReducer';


export const UserContext = createContext()

function App() {
  const [user, dispatch] = useReducer(myReducer)

  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, dispatch]}>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/datve"  element={<DatVe />} />
          <Route path="/tuyenduong"  element={<TuyenDuong />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
