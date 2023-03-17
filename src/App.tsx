import { Routes, Route } from "react-router-dom";

import { Home, Cars, Error, Manufacturers, Models } from "./pages";
import { Header, BottomNavigation, Snackbar } from "./components";
import { useGetDeviceType } from "./shared/utils/hooks/useGetDeviceType";
import { DeviceTypes } from "./shared/utils/enums/deviceTypes";
import {
  useAppDispatch,
  useAppSelector,
} from "./shared/utils/typescript/reduxTypes";
import { setNotificationVisibility } from "./shared/store/notification-store";
// import "@aws-amplify/ui-react/styles.css";

function App() {
  const notification = useAppSelector(
    (state) => state.notifications.notification,
  );
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Header children={<></>} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/models" element={<Models />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Look into better notification handling  */}
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
