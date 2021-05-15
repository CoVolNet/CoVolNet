import "./input.css";

export const Radiobtns = ({ children, type, name, id, changeValue }) => {
  function changes(name) {
    var x = document.querySelectorAll(`input[name=${name}]:checked`);
    changeValue(x);
  }
  return (
    <div className="radioBtns">
      <label className="container">
        <input
          type={type}
          name={name}
          id={id}
          onChange={() => {
            changes(name);
          }}
        />
        <span className="checkmark"></span>
      </label>
      <span className="children">{children}</span>
    </div>
  );
};

export const InputFields = ({
  children,
  placeholder,
  id,
  disabled,
  changeValue,
}) => {
  return (
    <div className="inputs">
      <p className="children">{children}</p>
      <input
        type="text"
        className="fname"
        onChange={() => {
          changeValue(document.getElementById(id).value);
        }}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
      />
    </div>
  );
};
