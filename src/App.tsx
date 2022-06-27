import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Error } from "./pages/Error";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
// import "@aws-amplify/ui-react/styles.css";

function App() {

  return (
    <div className='App'>
      <Header>
        <>
        </>
      </Header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
