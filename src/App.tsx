import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Error } from "./pages/Error";
import Header from "./components/Header/Header";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import Cars from "./pages/Cars";
import useGetScreenSize from "./helpers/screenSizes";
import { DeviceTypes } from "./typescript/enums";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  console.log(useGetScreenSize());

  return (
    <div className='App'>
      <Header children={<></>} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {useGetScreenSize() !== DeviceTypes.DESKTOP && <BottomNavigation />}
    </div>
  );
}

export default App;
