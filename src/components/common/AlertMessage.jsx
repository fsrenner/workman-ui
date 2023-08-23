/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { hideConfirmation } from '../../store/confirmationSlice';

function AlertMessage({ alertType, message, styling }) {
  const dispatch = useDispatch();
  const [displayStyle, setDisplayStyle] = useState(styling);

  useEffect(() => {
    setDisplayStyle(styling);
    setTimeout(() => {
      setDisplayStyle({
        animation: 'fadeOut 1s',
      });
      dispatch(hideConfirmation());
    }, 3000);
    
  });

  const info = (
    <div
      id="alert-1"
      className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 w-full"
      role="alert"
      style={displayStyle}
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-1"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );

  const error = (
    <div
      id="alert-2"
      className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 w-full"
      role="alert"
      style={displayStyle}
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M16 2H8L2 8V16L8 22H16L22 16V8L16 2Z"
            stroke="#991b1b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M12 8V12"
            stroke="#991b1b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M12 16.0195V16"
            stroke="#991b1b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>
      </svg>
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-2"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );

  const success = (
    <div
      id="alert-3"
      className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 w-full"
      role="alert"
      style={displayStyle}
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-3"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );

  const warning = (
    <div
      id="alert-4"
      className="flex items-center p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 w-full"
      role="alert"
      style={displayStyle}
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <circle cx="12" cy="17" r="1" fill="#854d0e" />{" "}
          <path
            d="M12 10L12 14"
            stroke="#854d0e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z"
            stroke="#854d0e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>
      </svg>
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-4"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );

  const alertTypes = {
    success,
    error,
    info,
    warning,
  };

  return alertTypes[`${alertType}`];

}

AlertMessage.propTypes = {
  alertType: PropTypes.string,
  message: PropTypes.string,
  styling: PropTypes.object,
};

export default AlertMessage;


