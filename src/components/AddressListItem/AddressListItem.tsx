import { AddressData } from "../AddressListProvider/AddressListProvider";
import { DeleteIcon } from "../icons/DeleteIcon";
import styles from "./AddressListItem.module.scss";
interface IAddressListItemProps {
  address: AddressData;
  onDelete: (id: string) => void;
}

export const AddressListItem = ({
  address,
  onDelete,
}: IAddressListItemProps) => {
  return (
    <div className={styles.addressListItem}>
      <div className={styles.addressListItem__leftContentWrapper}>
        <h2 className={styles.addressListItem__heading}>{address.address}</h2>
        <p className={styles.addressListItem__paragraph}>
          Nr. of departments:{" "}
          <span className={styles.addressListItem__departmentsNumber}>
            {address.departments.length}
          </span>
        </p>
        <p className={styles.addressListItem__paragraph}>
          Directions: {address.description ? address.description : "(N/A)"}
        </p>
      </div>
      <div className={styles.addressListItem__rightContentWrapper}>
        <button onClick={() => onDelete(address.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
