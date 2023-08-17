import Header from "./Header";
// import Footer from "./Footer";
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-40">{children}</main>
      {/* <Footer /> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ]),
};

export default Layout;