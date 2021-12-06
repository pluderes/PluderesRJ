import { Pagination } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router";

function CustomPagination({ total }) {
  const history = useHistory();

  const handlePageChange = (pageNum, pageSize) => {
    console.log("HISTORY: ", history);
    history.push({
      pathname: "/",
      search: `?offset=${(pageNum - 1) * pageSize}&limit=${pageSize}`,
    });
  };

  return (
    <Pagination defaultCurrent={1} total={total} onChange={handlePageChange} />
  );
}

export default CustomPagination;
