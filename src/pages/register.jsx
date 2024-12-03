import { Button, Form, Input, notification, Col, Divider, Row } from "antd";
import { createUserApi } from "../util/api";
import { useNavigate, Link } from "react-router";
import { ArrowLeftOutlined } from "@ant-design/icons";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, email, password } = values;

    const res = await createUserApi(name, email, password);
    console.log("Success:", res);

    if (res) {
      notification.success({
        message: "Create user",
        description: "successfully created",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Create user",
        description: "ERROR",
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
          <legend>Register</legend>
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

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
                register
              </Button>
            </Form.Item>
          </Form>
          <Link to="/">
            <ArrowLeftOutlined /> Back to home page
          </Link>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <Link to="/login">Login</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default RegisterPage;
