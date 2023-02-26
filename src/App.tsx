import { Routes, Route } from "react-router-dom";

import { Home, Cars, Error, Manufacturers } from "./pages";
import { Header, BottomNavigation } from "./components";
import { useGetDeviceType } from "./utils/hooks/useGetDeviceType";
import { DeviceTypes } from "./utils/enums/deviceTypes";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <div className='App'>
      <Header children={<></>} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/manufacturers' element={<Manufacturers />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {useGetDeviceType() !== DeviceTypes.DESKTOP && <BottomNavigation />}
    </div>
  );
}

export default App;
