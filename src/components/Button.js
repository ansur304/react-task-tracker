import PropTypes from "prop-types";

const Button = ({ color, label, onClick, cssStyle }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={cssStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.defaulrProps = {
  label: "+",
  color: "steelblue",
  cssStyle: "btn",
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  cssStyle: PropTypes.string,
};

export default Button;
