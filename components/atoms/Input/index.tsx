interface InputProps {
  label: string;
  type: string;
  nameInput: string;
  placeHolder: string;
}

export default function Input(props: InputProps) {
  const { label, type, nameInput, placeHolder, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor={nameInput}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={nameInput}
        name={nameInput}
        aria-describedby={nameInput}
        placeholder={placeHolder}
        {...nativeProps}
      />
      {/* {...nativeProps} props seperti OnChange, Onclick, dll kalau dibutuhkan */}
    </>
  );
}
