import { Button, Card, Form, Input, Row } from "antd";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { routes } from "../../shared/config/routes";
import { signUpFx } from "./model";
import "./SignUp.css";

export const SignUp = () => {
  // const [signUpPending] = useUnit([signUpFx.pending]);
  const [signUp, loading] = useUnit([signUpFx, signUpFx.pending]);

  return (
    <Row justify="center" className="main">
      <Card
        extra={<Link to={routes.auth.signIn}>Already have account?</Link>}
        title="Sign Up"
      >
        <Form
          name="basic"
          className="signup-form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={signUp}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className="input-signup" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="input-signup" placeholder="Enter your password"/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-signup"
              loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
