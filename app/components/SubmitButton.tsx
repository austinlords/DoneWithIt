import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";
import defaultStyles from "../config/styles";

export interface SubmitButtonProps {
  title: string;
}

const SubmitButton: React.SFC<SubmitButtonProps> = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color={defaultStyles.colors.primary}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
