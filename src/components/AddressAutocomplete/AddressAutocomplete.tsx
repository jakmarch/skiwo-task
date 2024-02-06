import { GeoapifyGeocoderAutocomplete } from "@geoapify/react-geocoder-autocomplete";
import styles from "./AddressAutocomplete.module.scss";

import { PointerIcon } from "../icons/PointerIcon";

interface IAddressAutocompleteProps {
  label?: string;
  value?: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

export const AddressAutocomplete = ({
  label,
  placeholder,
  setValue,
  value,
}: IAddressAutocompleteProps) => {
  return (
    <div className={styles.addressAutocomplete__wrapper}>
      <label className={styles.addressAutocomplete__label}>{label}</label>

      <div className={styles.addressAutocomplete__withIconWrapper}>
        <GeoapifyGeocoderAutocomplete
          value={value}
          placeholder={placeholder}
          placeSelect={(val) => setValue(val.properties.formatted)}
        />

        <div className={styles.addressAutocomplete__leftIcon}>
          <PointerIcon />
        </div>
      </div>
    </div>
  );
};
