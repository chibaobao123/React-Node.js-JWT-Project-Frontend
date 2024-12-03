import { Button, Form, Input, notification, Col, Divider, Row } from "antd";
import { loginUserApi } from "../util/api";
import { useNavigate, Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { ArrowLeftOutlined } from "@ant-design/icons";

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
    <Row justify={"center"} style={{ marginTop: "50px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Login</legend>
          <Form
            name="basic"
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
          <Link to="/">
            <ArrowLeftOutlined /> Back to home page
          </Link>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <Link to="/register">Register</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
