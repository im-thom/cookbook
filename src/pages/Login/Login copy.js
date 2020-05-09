import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAuth } from '../../redux/User'

import { Row, Col, Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


class Login extends Component {

  onFinish(e) {
    console.log("finished", e);
    this.props.requestAuth(e.username, e.email, e.password)
  };

  onFinishFailed = () => {
    console.log("finished");
  };

  render() {
    console.log(this.props)
    return (
      <>
        <Row>
          <Col span={12} offset={6}>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={(e) => this.onFinish(e)}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    ...state,
})

const mapDispatchToProps = { 
  requestAuth 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


