import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestRegistration } from '../../redux/User'

import { Row, Col, Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


interface Props {
  requestRegistration?: any,
}

class Signup extends Component<Props> {

  onFinish(e: any) {
    console.log("finished", e);
    this.props.requestRegistration(e.username, e.email, e.password1, e.password2)
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
                name="password1"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Password Again"
                name="password2"
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

const mapStateToProps = (state: any) => ({
  ...state,
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ requestRegistration }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)


