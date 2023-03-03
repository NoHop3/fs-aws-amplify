import { Routes, Route } from "react-router-dom";

import { Home, Cars, Error, Manufacturers } from "./pages";
import { Header, BottomNavigation, Snackbar } from "./components";
import { useGetDeviceType } from "./utils/hooks/useGetDeviceType";
import { DeviceTypes } from "./utils/enums/deviceTypes";
import { useAppDispatch, useAppSelector } from "./utils/typescript/reduxTypes";
import { setNotificationVisibility } from "./store/notification-store";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  const notification = useAppSelector((state) => state.notifications.notification);
  const dispatch = useAppDispatch();
  return (
    <div className='App'>
      <Header children={<></>} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/manufacturers' element={<Manufacturers />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Snackbar
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={() => dispatch(setNotificationVisibility(false))}
        autoHideDuration={4000}
      />
      {useGetDeviceType() !== DeviceTypes.DESKTOP && <BottomNavigation />}
    </div>
  );
}

export default App;
