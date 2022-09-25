import PropTypes from 'prop-types';

const Button = ({ buttonTitle, changePage }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <button className="buttonPage" onClick={changePage}>
        {buttonTitle}
      </button>
    </div>
  );
};
Button.propTypes = {
  buttonTitle: PropTypes.string,
  changePage: PropTypes.func,
};
export default Button;
