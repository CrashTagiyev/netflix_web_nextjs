
function FormButton({ customButton }) {
  return (
    <div className={customButton?.buttonContainerStyle}>
      <button
        onClick={customButton?.action}
        type={customButton?.type}
        className={customButton?.style}
      >
        {customButton?.value}
      </button>
    </div>
  );
}

export default FormButton;
