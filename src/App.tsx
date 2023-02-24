import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Error } from "./pages/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cars from "./pages/Cars";
import useGetScreenSize, { screenSizes } from "./helpers/screenSizes";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <div className='App'>
      <Header children={<></>} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {useGetScreenSize() < screenSizes.isDesktop && <Footer />}
    </div>
  );
}

export default App;
