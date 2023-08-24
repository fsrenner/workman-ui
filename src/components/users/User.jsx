import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { getReadableDate } from '../../util/dates';
import Card from '../common/Card';
import Button from '../common/Button';

function User({ user, hideButtons }) {
  const navigate = useNavigate();
  const navigationState = {
    state: { user },
  };

  const handleSubmit = (event, path) => {
    event.preventDefault();
    if (path === 'delete') {
      navigate(`/users/delete/${user.user_id}`, navigationState);
    } else {
      navigate(`/users/update/${user.user_id}`, navigationState);
    }
  };

  return (
    <Card id={user.user_id}>
      <div className="pl-3 pb-3 pr-3">
        <p className="pb-3 text-gray-900 font-bold text-lg">{user.username}</p>

        <div className="text-sm text-left text-gray-500">
          <p className="pb-1">
            <span className="text-gray-900 font-semibold">Name: </span>
            {`${user.first_name} ${user.last_name}`}
          </p>
        </div>

        <div className="text-sm text-left text-gray-500">
          <p className="pb-1">
            <span className="text-gray-900 font-semibold">Address: </span>
            {`${user.address + "," || ""} ${user.city + "," || ""} ${
              user.state || ""
            } ${user.zip || ""}`}
          </p>
        </div>

        <div className="grid grid-cols-2 text-sm text-left text-gray-500 pb-2">
          <p className="pb-1">
            <span className="text-gray-900 font-semibold">DOB: </span>
            {getReadableDate(user.date_of_birth) || "N/A"}
          </p>
          <p className="pb-1">
            <span className="text-gray-900 font-semibold">Phone: </span>
            {user.phone_number || "N/A"}
          </p>
        </div>
        <div className="text-sm text-left text-gray-500">
          <p className="pb-1">
            <span className="text-gray-900 font-semibold">Email: </span>
            {user.email}
          </p>
        </div>
        <div className="grid grid-cols-2 text-sm text-left text-gray-500 pb-3">
          <p>
            <span className="text-gray-900 font-semibold">Last Login: </span>
            {user.last_login ? getReadableDate(user.last_login) : "N/A"}
          </p>
          <p>
            <span className="text-gray-900 font-semibold">Verified: </span>
            {user.verified || user.verified === "true" ? "yes" : "no"}
          </p>
        </div>
        {hideButtons || (
          <div className="grid grid-cols-2 gap-4 text-xs text-left text-gray-500 pb-2">
            <Button
              type="button"
              title="Update User Button"
              onClick={(e) => handleSubmit(e, "update", user.user_id)}
              text="Update"
            />
            <Button
              type="button"
              title="Create Account Button"
              onClick={(e) => handleSubmit(e, "delete", user.user_id)}
              text="Delete"
            />
          </div>
        )}
      </div>
    </Card>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    user_id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    date_of_birth: PropTypes.string,
    phone_number: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.number,
    last_login: PropTypes.string,
    verified: PropTypes.bool,
    
  }),
  hideButtons: PropTypes.bool,
};

export default User;