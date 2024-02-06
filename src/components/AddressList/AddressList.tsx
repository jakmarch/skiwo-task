import { AddressListItem } from "../AddressListItem/AddressListItem";
import { useAddressListContext } from "../AddressListProvider/AddressListProvider";

export const AddressList = () => {
  const { addressList, deleteAddress } = useAddressListContext();
  
  return (
    <>
      {!addressList.length && <>There's no addresses so far</>}
      {addressList.map((addressItem) => {
        return (
          <AddressListItem
            key={addressItem.id}
            address={addressItem}
            onDelete={deleteAddress}
          />
        );
      })}
    </>
  );
};
