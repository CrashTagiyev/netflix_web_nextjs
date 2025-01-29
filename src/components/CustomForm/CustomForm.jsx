"use client"
import FormInput from "./FormInput";
import FormButton from "./FormButton";

function CustomForm({ form, formInputs, formButtons }) {
  return (
    <form onSubmit={form.onSubmit} className={form.style ? form.style : "  "}>
      <h1 className={form?.titleStyle} >{form?.title}</h1>
      {formInputs &&
        formInputs.map((input, index) => (
          <FormInput key={index} customFormInput={input} />
        ))}
      {formButtons &&
        formButtons.map((button, index) => (
          <FormButton key={index} customButton={button} />
        ))}
    </form>
  );
}

export default CustomForm;
