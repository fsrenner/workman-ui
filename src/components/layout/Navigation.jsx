import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Logo from '../common/Logo';
import Button from '../common/Button';

function NavigationComponent({ isLoggedIn }) {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const linkClickNavigation = (path, state) => {
    navigate(path, { state });
    setNavbar(!navbar);
  };

  return (
    <nav className="w-full  absolute bg-white z-100 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a onClick={() => linkClickNavigation("/")}>
              {/* <h2 className="text-2xl font-bold">WORKMAN</h2> */}
              <Logo width={70} height={70} classString={"h-13 w-13"} />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {isLoggedIn && <li>
                <a
                  onClick={() => linkClickNavigation("/users")}
                  className="text-gray-600 hover:cursor-pointer hover:underline font-semibold"
                >
                  Users
                </a>
              </li>}
              <li>
                <a
                  onClick={() => linkClickNavigation("/churches")}
                  className="text-gray-600 hover:cursor-pointer hover:underline font-semibold"
                >
                  Churches
                </a>
              </li>
              <li>
                <a
                  onClick={() => linkClickNavigation("/businesses")}
                  className="text-gray-600 hover:cursor-pointer hover:underline font-semibold"
                >
                  Businesses
                </a>
              </li>
              <li>
                <a
                  onClick={() => linkClickNavigation("/categories")}
                  className="text-gray-600 hover:cursor-pointer hover:underline font-semibold"
                >
                  Categories
                </a>
              </li>
              {!isLoggedIn ? (
                <li>
                  <Button
                    onClick={() => linkClickNavigation("/login")}
                    type="button"
                    title="Log In Button"
                    text="Log In"
                  />
                </li>
              ) : (
                <li>
                  <Button
                    onClick={() => linkClickNavigation("/logout")}
                    type="button"
                    title="Log Out Button"
                    text="Log Out"
                  />
                </li>
              )}
              {!isLoggedIn ? (
                <li>
                  <Button
                    onClick={() => linkClickNavigation("/users/add", { signup: true })}
                    type="button"
                    title="Sign Up Button"
                    text="Sign Up"
                  />
                </li>
              ) : (
                <li>
                  <Button
                    onClick={() => linkClickNavigation("/account")}
                    type="button"
                    title="My Account Button"
                    text="My Account"
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavigationComponent.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

const Navigation = connect(mapStateToProps)(NavigationComponent);

export default Navigation;
