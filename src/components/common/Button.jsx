import PropTypes from 'prop-types';

function Button({ type, classes, onClick, onSubmit, title, text}) {
  return (
    <button
      type={type}
      title={title || 'button'}
      className={`${classes} bg-transparent hover:bg-gray-600 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded`}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Button;