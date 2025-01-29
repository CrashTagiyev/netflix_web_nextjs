function FormInput({ customFormInput }) {
  return (
    <div className={customFormInput?.inputContainerStyle}>
      <input
        onChange={customFormInput?.action}
        name={customFormInput?.name}
        type={customFormInput?.type}
        placeholder={customFormInput?.placeholder}
        className={customFormInput?.style}
      />
    </div>
  );
}

export default FormInput;
