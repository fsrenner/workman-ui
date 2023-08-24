import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import Button from "../common/Button";

function Church({ church, hideButtons }) {
  const navigate = useNavigate();
  const navigationState = {
    state: { church },
  };

  const handleSubmit = (event, path) => {
    event.preventDefault();
    if (path === "delete") {
      navigate(`/churches/delete/${church.church_id}`, navigationState);
    } else {
      navigate(`/churches/update/${church.church_id}`, navigationState);
    }
  };

  return (
    <Card id={church.church_id}>
      <div className="pl-3 pb-3 pr-3">
        <p className="pb-3 text-gray-900 font-bold text-lg">
          {church.church_name}
        </p>

        {church.denomination && (
          <div className="text-sm text-left text-gray-500">
            <p>
              <span className="text-gray-900 font-semibold">
                Denomination:{" "}
              </span>
              {church.denomination}
            </p>
          </div>
        )}

        <div className="text-sm text-left text-gray-500">
          <p>
            <span className="text-gray-900 font-semibold">Email: </span>
            {church.email || "N/A"}
          </p>
        </div>

        <div className="text-sm text-left text-gray-500">
          <p>
            <span className="text-gray-900 font-semibold">Website: </span>
            {church.website || "N/A"}
          </p>
        </div>

        <div className="text-sm text-left text-gray-500">
          <p className="pb-3">
            <span className="text-gray-900 font-semibold">Phone: </span>
            {church.phone_number || "N/A"}
          </p>
        </div>

        <div className="text-sm text-left text-gray-500">
          <p className="pb-3">
            <span className="text-gray-900 font-semibold">Description: </span>
            {church.description}
          </p>
        </div>

        <div className="text-sm text-left text-gray-500">
          <p className="pb-1">
            <span className="text-gray-900 font-semibold">Address: </span>
            {`${church.address + "," || ""} ${church.city + "," || ""} ${
              church.state || ""
            } ${church.zip || ""}`}
          </p>
        </div>
        {hideButtons || (
          <div className="grid grid-cols-2 gap-4 text-xs text-left text-gray-500 pb-2">
            <Button
              type="button"
              title="Update Church Button"
              onClick={(e) => handleSubmit(e, "update", church.church_id)}
              text="Update"
            />
            <Button
              type="button"
              title="Create Church Button"
              onClick={(e) => handleSubmit(e, "delete", church.church_id)}
              text="Delete"
            />
          </div>
        )}
      </div>
    </Card>
  );

}

Church.propTypes = {
  church: PropTypes.shape({
    church_id: PropTypes.number,
    church_name: PropTypes.string,
    denomination: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    phone_number: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.number,
  }),
  hideButtons: PropTypes.bool,
};

export default Church;