import React from "react";
import styles from "./App.module.scss";
import AddressForm from "./components/AddressForm/AddressForm";
import { AddressList } from "./components/AddressList/AddressList";
import { AddressListProvider } from "./components/AddressListProvider/AddressListProvider";
import { GeoapifyContext } from "@geoapify/react-geocoder-autocomplete";

function App() {
  return (
    <div className={styles.App}>
      <GeoapifyContext apiKey="52fb75566d6749078f52cb3043f16712">
        <AddressListProvider>
          <AddressForm />
          <AddressList />
        </AddressListProvider>
      </GeoapifyContext>
    </div>
  );
}

export default App;
