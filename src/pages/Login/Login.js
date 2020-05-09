import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { requestAuth } from "../../redux/User";
import { loginWithProvider } from '../../redux/User/actions';

import { Row, Col, Form, Input, Button, Checkbox, Space } from "antd";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };



export default function Login() {

  const dispatch = useDispatch();

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Row>
            <Col>
              <Button onClick={() => dispatch(loginWithProvider('facebook'))} style={{ width: "300px" }} size={"large"} type="primary">
                Continue with Facebook
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{ width: "300px" }} size={"large"} type="primary">
                Continue with Google
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   ...state,
// });

// const mapDispatchToProps = {
//   requestAuth,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
