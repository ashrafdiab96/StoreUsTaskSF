import store, { presistor } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={presistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
