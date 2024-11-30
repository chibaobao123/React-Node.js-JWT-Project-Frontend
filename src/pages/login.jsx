import { Button, Form, Input, notification } from "antd";
import { loginUserApi } from "../util/api";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
const LoginPage = () => {
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const onFinish = async (values) => {
    const { email, password } = values;

    const res = await loginUserApi(email, password);
    console.log("Success:", res);

    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "Login user",
        description: "success",
      });
      setAuth({
        isAuthenticated: true,
        user: {
          emai: res?.user?.email ?? "",
          name: res?.user?.name ?? "",
        },
      });
      navigate("/");
    } else {
      notification.error({
        message: "Login user",
        description: res?.EM ?? "ERROR",
      });
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
