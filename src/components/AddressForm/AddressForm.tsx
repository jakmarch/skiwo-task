import React from "react";
import styles from "./AddressForm.module.scss";
import { Formik, Form, FormikProps } from "formik";
import { Button } from "../Button/Button";
import { InputFormControl } from "../Input/InputFormControl";
import { TextAreaFormControl } from "../TextArea/TextAreaFormControl";
import { PointerIcon } from "../icons/PointerIcon";
import { v4 as uuidv4 } from "uuid";
import {
  AddressData,
  useAddressListContext,
} from "../AddressListProvider/AddressListProvider";
import { SelectFormControl } from "../Select/SelectFormControl";

function AddressForm() {
  const { addAddress } = useAddressListContext();

  const onSubmit = (data: Omit<AddressData, "id">) => {
    addAddress({ id: uuidv4(), ...data });
  };

  return (
    <div className={styles.addressForm__wrapper}>
      <div>
        <h1>Addresses</h1>
        <p>
          Search for an address to add it to your list. You will be able to add
          directions to the location on the booking form.
        </p>
      </div>

      <Formik
        initialValues={{ address: "", departments: [], description: "" }}
        onSubmit={(values) => onSubmit(values)}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <InputFormControl
              label="Address"
              name="address"
              placeholder="Type your address here..."
              leftIcon={<PointerIcon />}
            />

            <SelectFormControl
              name="departments"
              label="Departments"
              options={[
                { value: "Dep_1", label: "Department 1" },
                { value: "Dep_2", label: "Department 2" },
              ]}
            />

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
