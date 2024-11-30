import { Table, notification } from "antd";
import { useEffect, useState } from "react";
import { getUsersApi } from "../util/api";
const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsersApi();
      // console.log(res);
      if (!res?.error) {
        setDataSource(res);
      } else {
        notification.error({
          message: "Unauthorized",
          description: res.error,
        });
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey={"_id"}
      />
    </div>
  );
};

export default UserPage;
