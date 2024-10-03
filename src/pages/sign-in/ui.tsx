import { routes } from "@shared/config/routes";
import { Button, Card, Form, Input, Row } from "antd";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { signInFx } from "./model";

export const SignIn = () => {
  const [signInPending] = useUnit([signInFx.pending]);

  return (
    <Row justify="center">
      <Card
        extra={<Link to={routes.auth.signUp}>Do not have account?</Link>}
        title="Sign In"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={signInFx}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={signInPending}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};