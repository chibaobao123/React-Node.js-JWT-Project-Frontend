import { useContext, useEffect } from "react";
import { Outlet } from "react-router";

import axios from "./util/axios.customizie";

import Header from "./components/layout/header";
import { AuthContext } from "./components/context/auth.context";
//custom file thì mai mốt có sửa đường dẫn backend
//thì chỉ cần vô file axios.customizie
//để sửa ở phần import.meta.env.VITE_BACKEND_URL

import { Spin } from "antd";

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true);
      const res = await axios.get(`/v1/api/account`);
      console.log(res);

      if (res) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: res.email,
            name: res.name,
          },
        });
      }

      setAppLoading(false);
    };

    fetchAccount();
  }, []);
  return (
    <div>
      {appLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
