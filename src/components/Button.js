import PropTypes from 'prop-types';

function Button(props) {
  const { name, handleClick } = props;
  return (
    <>
      <button
        type="button"
        onClick={() => {
          handleClick(name);
        }}
        value={name}
      >
        {name}
      </button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  handleClick: undefined,
};
export default Button;
