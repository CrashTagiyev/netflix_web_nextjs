import { useEffect, useState } from "react";
import CustomForm from "@/components/CustomForm/CustomForm";

function useCustomForm(initialFormConfiguration) {
  const [formConfig, setFormConfig] = useState(initialFormConfiguration);


  const getCustomForm = () => (
    <CustomForm
      formTwStyle={formConfig?.formTwStyle}
      formInputs={formConfig?.formInputs}
      formButtons={formConfig?.formButtons}
    />
  );

  return {
    formConfig,
    setFormConfig,
    getCustomForm,
  };
}

export default useCustomForm;
