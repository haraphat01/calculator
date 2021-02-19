import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <>
      <button type="button" className="btn">{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};
export default Button;
