import { Form, Container } from "react-bootstrap";
import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { APIURL } from "../../constants/api";

export default function LoginForm() {
  const url = `${APIURL}/auth/local`;

  const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your username/email."),
    password: yup.string().required("Please enter your password."),
  });

  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      history.push("/admin");
    } catch (error) {
      setLoginError(error.toString());
    }
  }

  return (
    <>
      <Container className="footer-bottom">
        <Form className="mt-5" id="formLogin" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <p>{loginError}</p>
              <fieldset disabled={submitting}>
                <div>
                  <p>{errors.identifier?.message}</p>
                  <h6 className="mt-5">Username/Email:</h6>
                  <input
                    className="form-control"
                    name="identifier"
                    placeholder="Username/Email"
                    {...register("identifier")}
                  />
                </div>
                <div>
                  <br></br>
                  <p>{errors.password?.message}</p>
                  <h6>Password:</h6>
                  <input
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    type="password"
                    {...register("password")}/>
                </div>
                <button className="btn btn-primary w-100 mt-5 mb-4">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
}
