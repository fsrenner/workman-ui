import PropTypes from "prop-types";

function Card({ title, children, id }) {
  return (
    <div className="grid place-items-center" id={id}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-11/12">
        <div className="px-6 py-4 text-center">
          {title ? <div className="font-bold text-xl mb-2">{title}</div> : null}
        </div>
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
};

export default Card;
