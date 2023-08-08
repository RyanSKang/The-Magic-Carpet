import React, { useState } from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer, CDBLink } from 'cdbreact';
import { Alert } from 'react-bootstrap';
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // using the apollo hook  useMutation pass the
  // ADD_USER mutation in order to talk to graphql
  // addUser will hold the output and error the error

  const [addUser, { error }] = useMutation(ADD_USER);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const registerForm = event.currentTarget;
    if (registerForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (error) {
      throw new Error("something went wrong!");
    }

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
      console.log(data);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Alert
        style={{ width: 'auto', height: '3.5rem', textAlign: "center", display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}
      dismissible
      onClose={() => setShowAlert(false)}
      show={showAlert}
      variant="danger"
      >
        Something went wrong with your signup!
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
        <CDBCard style={{ width: '31.2rem' }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 mb-2">
              <p className="h4"> Sign Up </p>
            </div>
            <CDBInput material hint="username" type="username" value={userFormData.username} onChange={handleInputChange} placeholder='Username' />
            <CDBInput material hint="E-mail" type="email" value={userFormData.email} onChange={handleInputChange} placeholder='Enter valid email address' />
            <CDBInput material hint="Password" type="password" value={userFormData.password} onChange={handleInputChange} placeholder='Enter a password' />
            <CDBBtn
              color="dark"
              className="btn-block my-3 mx-auto"
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
              variant="success">
              Sign Up
            </CDBBtn>
            <p className="text-center">
              Already a member?{' '}
              <CDBLink className="d-inline p-0" link to="/login">
                Login
              </CDBLink>
            </p>
            <p className="text-center"> or sign up with</p>
            <div className="flex-row my-3 d-flex justify-content-center">
              <CDBBtn color="white" style={{ boxShadow: 'none' }}>
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn color="white" style={{ boxShadow: 'none' }}>
                <CDBIcon fab icon="google-plus-g" />
              </CDBBtn>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </>
  )
};
export default SignupForm;