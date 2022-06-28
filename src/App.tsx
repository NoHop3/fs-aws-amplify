import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Error } from "./pages/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <div className='App'>
      <Header children={<></>} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
