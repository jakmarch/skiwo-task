import { createContext, useState, useContext, PropsWithChildren } from "react";

export interface AddressData {
  id: string;
  address: string;
  // departments: string;
  departments: DepartmentData[];
  description?: string;
}

export interface DepartmentData {
  id: string;
  name: string;
}

interface AddressListContextProps {
  addressList: AddressData[];
  addAddress: (data: AddressData) => void;
  deleteAddress: (id: string) => void;
}

export const AddressListContext = createContext<
  AddressListContextProps | undefined
>(undefined);

export const AddressListProvider = ({ children }: PropsWithChildren<{}>) => {
  const [addressList, setAddressList] = useState<AddressData[]>([]);

  const addAddress = (data: AddressData) => {
    setAddressList([...addressList, data]);
  };

  const deleteAddress = (id: string) => {
    setAddressList(addressList.filter((address) => address.id !== id));
  };

  return (
    <AddressListContext.Provider
      value={{ addressList, addAddress, deleteAddress }}
    >
      {children}
    </AddressListContext.Provider>
  );
};

export const useAddressListContext = () => {
  const context = useContext(AddressListContext);

  if (context === undefined) {
    throw new Error(
      "useAddressListContext must be used within a AddressListProvider"
    );
  }
  return context;
};
