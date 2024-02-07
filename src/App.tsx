import React from "react";
import styles from "./App.module.scss";
import AddressForm from "./components/AddressForm/AddressForm";
import { AddressList } from "./components/AddressList/AddressList";
import { AddressListProvider } from "./components/AddressListProvider/AddressListProvider";
import { GeoapifyContext } from "@geoapify/react-geocoder-autocomplete";

function App() {
  return (
    <div className={styles.App}>
      <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_API_KEY}>
        <AddressListProvider>
          <AddressForm />
          <AddressList />
        </AddressListProvider>
      </GeoapifyContext>
    </div>
  );
}

export default App;
