import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useChurchService } from "../../services/useChurchService";

import Church from "./Church";
import Button from "../common/Button";

function Churches() {
  const navigate = useNavigate();
  const churchService = useChurchService();

  const [churches, setChurches] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateClick = (e) => {
    e.preventDefault();
    navigate("/churches/add");
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await churchService.getChurches();
      setChurches(data.churches);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-5xl pb-8 ml-4 text-center">Churches</h1>
      <div className="grid place-items-center">
        <Button
          type="button"
          title="Create Church Button"
          onClick={(e) => handleCreateClick(e)}
          text="Add Church"
        />
      </div>
      <div>
        {!loading && churches.length > 0
          ? churches.map((church) => <Church key={church.church_id} church={church} />)
          : null}
      </div>
      <div className="grid place-items-center">
        <Button
          type="button"
          title="Create Church Button"
          onClick={(e) => handleCreateClick(e)}
          text="Add Church"
        />
      </div>
    </>
  );
}

export default Churches;
