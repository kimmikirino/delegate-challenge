import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Typography } from "antd";

import { UserContext } from "../../context";
import { putUser } from "../../api/users";

import "./FormEdit.css";

const { Title } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 18 },
};

const FormEdit = ({ data }) => {
  const user = useContext(UserContext);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    await putUser(data.id, values);
    user.updateUsers({ type: "update_users", payload: { ...data, ...values } });
    setIsLoading(false);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  return (
    <Form {...layout} form={form} name="user-data" onFinish={onFinish}>
      <Title level={4} className="detail-title">
        Update user information
      </Title>

      <Form.Item
        label="First name"
        name="first_name"
        rules={[{ required: true, message: "Please input the first name!" }]}
        initialValue={data.first_name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="last_name"
        rules={[{ required: true, message: "Please input the last name!" }]}
        initialValue={data.last_name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Please input the e-mail!" }]}
        initialValue={data.email}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormEdit;
