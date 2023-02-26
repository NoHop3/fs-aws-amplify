import { Routes, Route } from "react-router-dom";

import { Home, Cars, Error } from "./pages";
import { Header, BottomNavigation } from "./components";
import useGetDeviceType from "./helpers/deviceTypeHelper";
import { DeviceTypes } from "./typescript/enums";
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
      {useGetDeviceType() !== DeviceTypes.DESKTOP && <BottomNavigation />}
    </div>
  );
}

export default App;
