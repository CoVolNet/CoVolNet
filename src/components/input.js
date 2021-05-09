import './input.css';

export const Radiobtns = ({ children, type, name, id }) => {
    return (
        <div className="radioBtns">
            <label className="container">
                <input
                    type={type}
                    name={name}
                /><span className="checkmark"></span>
            </label>
            <span className="children">{children}</span>
        </div>
    );
}
export const InputFields = ({ children }) => {
    return (
        <div className="inputs">
            <p className="children">{children}</p>
            <input type="text" className="fname" />
        </div>
    );
}
