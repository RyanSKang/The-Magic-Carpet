// see SignupForm.js for comments
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

// Importing CDBReact for styling
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer, CDBLink } from 'cdbreact';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // using the apollo hook  useMutation pass the
  // ADD_USER mutation in order to talk to graphql
  // addUser will hold the output and error the error

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      // Store the token in local storage
      Auth.login(data.login.token);
      console.log(data);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({

      email: "",
      password: "",
    });
  };
  return (
    <>
      <Alert
        style={{ width: 'auto', height: '3.5rem', textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      dismissible
      onClose={() => setShowAlert(false)}
      show={showAlert}
      variant="danger"
      >
        Something went wrong with your login credentials!
      </Alert>
      <CDBContainer
        validated={validated}
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          boxShadow: '10px'
        }}>
        <CDBCard style={{ width: '30rem' }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 mb-2">
              <p className="h4 font-weight-bold"> Log in </p>
            </div>
            <CDBInput
              label="E-mail"
              type="email"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required />
            <CDBInput
              label="Password"
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required />
            <CDBBtn
              color="dark"
              className="btn-block my-4 mx-auto"
              disabled={!(userFormData.email && userFormData.password)}
              type="submit"
              variant="success">
              Sign in
            </CDBBtn>
            {error && <div>Login failed</div>}
            <p className="text-center"> or sign in with</p>
            <div className="flex-row my-3 d-flex justify-content-center">
              <CDBBtn color="white" className="m-0">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn color="white" className="m-0">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn color="white" className="m-0">
                <CDBIcon fab icon="google-plus-g" />
              </CDBBtn>
            </div>
            <hr />
            <p className="text-center">
              Not a member?{' '}
              <CDBLink className="d-inline p-0" link to="/signup">
                Sign up
              </CDBLink>
            </p>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </>
  );
};

export default LoginForm;
