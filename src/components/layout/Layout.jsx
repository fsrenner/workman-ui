import Header from "./Header";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import AlertMessage from '../common/AlertMessage';

function LayoutContainer({ children, show, content }) {
  const showConfirmationStyles = {
    position: 'fixed',
    top: '110px',
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'fadeIn 1s',
  }

  const hideConfirmationStyles = {
    display: 'none',
  };

  return (
    <>
      <Header />
      {show && (
        <AlertMessage
          styling={show ? showConfirmationStyles : hideConfirmationStyles}
          message={content.message}
          alertType={content.alertType}
        />
      )}
      <main className="pt-40">{children}</main>
      {/* <Footer /> */}
    </>
  );
}

LayoutContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  show: PropTypes.bool,
  content: PropTypes.shape({
    alertType: PropTypes.string,
    message: PropTypes.string,
  }),
};

const mapStateToProps = (state) => {
  return {
    show: state.confirmation.show,
    content: state.confirmation.content,
  }
}

const Layout = connect(mapStateToProps)(LayoutContainer);
export default Layout;