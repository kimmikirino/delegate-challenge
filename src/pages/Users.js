import React, { useEffect, useState, useReducer } from "react";
import { Table, Avatar } from "antd";

import { getUsers } from "../api/users";
import { UserContext } from "../context";
import { userReducer } from "../reducer";
import UserDetail from "../components/UserDetail";

const columns = [
  {
    title: "",
    dataIndex: "avatar",
    key: "avatar",
    render: (img) => <Avatar src={img} />,
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },
];

const Users = () => {
  const [state, dispatch] = useReducer(userReducer, { users: [] });
  const [pagination, setPagination] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});
  const [loading, setIsLoading] = useState(false);

  const rowSelection = {
    onChange: (rowsKeys, selectedRows) => {
      setSelectedRowKeys(rowsKeys);
      setSelectedRow(selectedRows[0]);
    },
    selectedRowKeys,
  };

  const fetchData = async (current) => {
    setIsLoading(true);
    const { data, page, per_page, total } = await getUsers(current);
    dispatch({ type: "get_users", payload: data });
    setPagination({ current: page, pageSize: per_page, total });
    setSelectedRowKeys([data[0].id]);
    setSelectedRow(data[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    const userUpdated = state.users.filter(
      (el) => el.id === selectedRowKeys[0]
    );
    setSelectedRow(userUpdated[0]);
  }, [state, selectedRowKeys]);

  const handleChange = (ev) => {
    fetchData(ev.current);
  };

  return (
    <UserContext.Provider value={{ users: state.users, updateUsers: dispatch }}>
      <Table
        columns={columns}
        dataSource={state.users}
        pagination={pagination}
        onChange={handleChange}
        loading={loading}
        rowKey="id"
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
      />
      <UserDetail data={selectedRow} />
    </UserContext.Provider>
  );
};

export default Users;
