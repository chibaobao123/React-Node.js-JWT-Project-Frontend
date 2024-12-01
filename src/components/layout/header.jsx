import { useContext, useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  let navigate = useNavigate();

  const { auth, setAuth } = useContext(AuthContext);
  // console.log(auth);

  const items = [
    {
      label: <Link to="/">Home Page</Link>,
      key: "home",
      icon: <MailOutlined />,
    },

    // Conditional add object to an array while being declared
    ...(auth.isAuthenticated
      ? [
          {
            label: <Link to="/user">Users</Link>,
            key: "user",
            icon: <MailOutlined />,
          },
        ]
      : []),
    {
      label: `Welcome ${auth?.user?.name ?? ""}`,
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        // Conditional add object to an array while being declared
        ...(auth.isAuthenticated
          ? [
              {
                label: <span>Logout</span>,
                key: "logout",
              },
            ]
          : [
              {
                label: <Link to="/login">Login</Link>,
                key: "login",
              },
            ]),
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);

    if (e.key === "logout") {
      // console.log("logout");
      localStorage.clear("access_token");
      setAuth({
        isAuthenticated: false,
        user: {
          emai: "",
          name: "",
        },
      });
      console.log(auth);
      navigate("/");
    }
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
