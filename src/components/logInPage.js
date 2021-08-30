import React, { useEffect, useState } from "react";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { logInActions } from "../actions/logInactios";
import { useHistory } from "react-router";

const LogInPage = (props) => {
  // console.log(props);
  const history = useHistory();
  const { logInActions, handleSubmit } = props;

  useEffect(() => {
    logInActions();
  }, []);
  const renderMail = (formProps) => {
    // console.log(formProps);
    const { input } = formProps;

    return (
      <React.Fragment key={1}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>

          <Form.Control {...input} type="email" placeholder="Enter Username" />
          <Form.Text className="text-muted">
            <div>
              {email && (
                <Alert
                  style={{
                    height: "1px",
                    lineHeight: "1px",
                    padding: "10px",
                    marginTop: "3px",
                    marginBottom: "3px",
                  }}
                  variant="danger"
                >
                  UserName not Vlaid!!!
                </Alert>
              )}
            </div>
          </Form.Text>
        </Form.Group>
      </React.Fragment>
    );
  };

  const renderPassword = (formProps) => {
    const { input } = formProps;

    return (
      <React.Fragment key={2}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...input} type="Password" placeholder="Password" />
          <div>
            {name && (
              <Alert
                style={{
                  height: "1px",
                  lineHeight: "1px",
                  padding: "10px",
                  marginTop: "3px",
                  marginBottom: "3px",
                }}
                variant="danger"
              >
                Password not Valid !!!
              </Alert>
            )}
          </div>
        </Form.Group>
      </React.Fragment>
    );
  };

  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const submit = (formValuse) => {
    // console.log(formValuse);
    const { EmailForm, PasswordForm } = formValuse;
    const { password, username } = props.user;

    logInActions();
    if (EmailForm !== username) {
      setEmail(!email);
    }
    if (PasswordForm !== password) {
      setName(!name);
    }

    if (EmailForm === username && PasswordForm === password) {
      history.push("/dashboard");
    }
  };

  return (
    <Col
      style={{ position: "absolute", top: " 50%", left: "50%", transform: "translate(-50%, -50%)" }}
      xs={3}
    >
      <Form onSubmit={handleSubmit(submit)}>
        <Field name="EmailForm" component={renderMail} type="input" />
        <Field name="PasswordForm" component={renderPassword} />
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </Col>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userReducer.user };
};

const logInPageState = connect(mapStateToProps, { logInActions })(LogInPage);

export default reduxForm({ form: "formSubmit" })(logInPageState);
