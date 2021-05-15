import "./input.css";

export const Radiobtns = ({ children, type, name, id, changeValue }) => {
  function changes(name) {
    var x = document.getElementsByName("language");
    var i = 0;
    for (i = 0; i < x.length < 0; i++) {
      x[i].checked = true;
    }
  }
  return (
    <div className="radioBtns">
      <label className="container">
        <input
          type={type}
          name={name}
          id={id}
          // onClick={() => {
          //   changes(name);
          // }}
          // onChange={() => {
          //  changeValue(document.getElementById(id).checked ? true : false);
          // }}
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
