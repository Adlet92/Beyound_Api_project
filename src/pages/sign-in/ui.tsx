import { Button, Card, Form, Input, Row } from "antd";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { routes } from "../../shared/config/routes";
import { signInFx } from "./model";
import "./SignIn.css";

export const SignIn = () => {
  const [signIn, loading] = useUnit([signInFx, signInFx.pending]);

  return (
    <Row justify="center" className="main">
      <Card
        className="card-signin"
        extra={<Link to={routes.auth.signUp}>Do not have account?</Link>}
        title="Sign In"
      >
        <Form
          name="basic"
          className="signin-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={signIn}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="input-signin" placeholder="Enter your email"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="input-signin" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-signin"
              loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
