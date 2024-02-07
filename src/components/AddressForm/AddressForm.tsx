import styles from "./AddressForm.module.scss";
import { Formik, Form } from "formik";
import { Button } from "../Button/Button";
import { TextAreaFormControl } from "../TextArea/TextAreaFormControl";
import { v4 as uuidv4 } from "uuid";
import {
  AddressData,
  useAddressListContext,
} from "../AddressListProvider/AddressListProvider";
import { SelectFormControl } from "../Select/SelectFormControl";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { AddressAutocompleteFormControl } from "../AddressAutocomplete/AddressAutocompleteFormControl";

import * as Yup from "yup";

const AddressSchema = Yup.object().shape({
  address: Yup.string().required("The address is required!"),
  departments: Yup.array()
    .min(1, "You have to provide at least one department!")
    .required("Required!"),
});

function AddressForm() {
  const initialValues: Omit<AddressData, "id"> = {
    address: "",
    departments: [],
    description: "",
  };
  const { addAddress } = useAddressListContext();

  const onSubmit = (data: Omit<AddressData, "id">) => {
    addAddress({ id: uuidv4(), ...data });
  };

  return (
    <div className={styles.addressForm__wrapper}>
      <div>
        <h1 className={styles.addressForm__header}>Addresses</h1>
        <p className={styles.addressForm__description}>
          Search for an address to add it to your list. You will be able to add
          directions to the location on the booking form.
        </p>
      </div>

      <Formik<Omit<AddressData, "id">>
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
        validationSchema={AddressSchema}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form role="form" className={styles.addressForm__form}>
            <AddressAutocompleteFormControl
              name="address"
              label="Search for an address"
              placeholder="Type your address here..."
              value={values.address}
              setValue={(val) => setFieldValue("address", val)}
            />
            {errors.address && touched.address ? (
              <div className={styles.addressForm__error}>
                {errors.address as string}
              </div>
            ) : null}

            <SelectFormControl
              name="departments"
              value={values.departments}
              label="Attach the address above to one or more departments"
              placeholder="Select department(s)"
              options={[
                { value: "Dep_1", label: "Department 1" },
                { value: "Dep_2", label: "Department 2" },
              ]}
              className={styles.addressForm__departments}
            />
            {errors.departments && touched.departments ? (
              <div className={styles.addressForm__error}>
                {errors.departments as string}
              </div>
            ) : null}

            <TextAreaFormControl
              label="Address description (Optional)"
              name="description"
              placeholder="Write here..."
            />
            <div className={styles.addressForm__buttonWrapper}>
              <Button type="submit">Add address</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddressForm;
