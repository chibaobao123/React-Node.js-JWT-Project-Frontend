import { useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router";
const Header = () => {
  let navigate = useNavigate();
  const items = [
    {
      label: <Link to="/">Home Page</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/user">Users</Link>,
      key: "user",
      icon: <MailOutlined />,
    },
    {
      label: "Welcome",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to="/login">Login</Link>,
          key: "login",
        },
        {
          label: (
            <span
              onClick={(e) => {
                console.log(e.key);
                localStorage.clear("access_token");
                setCurrent("home");
                navigate("/");
              }}
            >
              Logout
            </span>
          ),
          key: "logout",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
