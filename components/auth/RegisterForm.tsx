import React from "react";
import { setCookie } from "nookies";
import styles from "./Auth.module.scss";
import { Button, Form, Input, notification } from "antd";
import { RegisterFormDto }  from "../../api/dto/auth.dto";
import * as Api from "../../api";

export const RegisterForm = () => {
  const onSubmit = async (values: RegisterFormDto) => {
    try {
        console.log(values)
      const { token } = await Api.auth.register(values);

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
      console.warn(err);

      notification.error({
        message: "Error!",
        description: "Registration error",
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
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
          rules={[
            {
              required: true,
              message: "Enter E-Mail",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Enter Fullname",
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
              message: "Enter Password",
            },
          ]}
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
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};