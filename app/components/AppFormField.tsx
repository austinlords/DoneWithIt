import * as React from "react";
import { useFormikContext } from "formik";

import AppTextInput, { AppTextInputProps } from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

export interface AppFormFieldProps extends AppTextInputProps {
  name: string;
}

const AppFormField: React.SFC<AppFormFieldProps> = ({
  name,
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
