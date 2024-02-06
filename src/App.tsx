import React from "react";
import styles from "./App.module.scss";
import AddressForm from "./components/AddressForm/AddressForm";
import { AddressList } from "./components/AddressList/AddressList";
import { AddressListProvider } from "./components/AddressListProvider/AddressListProvider";

function App() {
  return (
    <div className={styles.App}>
      <AddressListProvider>
        <AddressForm />
        <AddressList />
      </AddressListProvider>
    </div>
  );
}

export default App;
