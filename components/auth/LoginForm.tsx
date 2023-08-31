import { Form, Input, Button, notification } from "antd";
import styles from "./Auth.module.scss";
import { LoginFormDto } from "../../api/dto/auth.dto";
import * as Api from "../../api";
import { setCookie } from "nookies";

export const LoginForm = () => {
  const onSubmit = async (values: LoginFormDto) => {
    try {
      const { token } = await Api.auth.login(values);
      notification.success({
        message: "Success!",
        description: "Redirect to admin-board...",
        duration: 2,
      });

      setCookie(null, "_token", token, {
        path: "/",
      });

      location.href = "/dashboard";
    } catch (err) {
      console.warn("LoginForm", err);
      notification.error({
        message: "Error!",
        description: "Invalid login/password",
        duration: 2,
      });
    }
  };
  return (
    <div className={styles.root}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[{ required: true, message: "Enter E-Mail" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Enter Password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
