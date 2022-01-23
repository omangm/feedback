import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  // ? rendering classes Conditionally
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  // ? rendering styles conditionally
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#ccc" : "black",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
