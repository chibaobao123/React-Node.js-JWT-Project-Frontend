import { useEffect } from "react";
import { Outlet } from "react-router";

import axios from "./util/axios.customizie";
import Header from "./components/layout/header";
//custom file thì mai mốt có sửa đường dẫn backend
//thì chỉ cần vô file axios.customizie
//để sửa ở phần import.meta.env.VITE_BACKEND_URL

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`);
      console.log(res);
    };

    fetchHelloWorld();
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
