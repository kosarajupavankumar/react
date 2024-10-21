import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = (props) => {
  console.log(`rendering the login page`);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(`email: ${email}, password: ${password}`);
    // check the validation of the email and password

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }

    // call the login function from the parent component
    props.onLogin(email, password);
  };

  return (
    <div className="login">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailChange}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordChange}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onFormSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
