import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { API_URL } from "../../constants/api";
import { useAuth } from "../../providers/AuthProvider";
import CustomInput from "./containers/CustomInput";
import CustomPasswordInput from "./containers/CustomPasswordInput";
import {
  Card,
  Container,
  Disclaimer,
  ForgotPasswordLink,
  Header,
  LeftPanel,
  LoginButton,
  Logo,
  RightPanel,
  Subtitle,
  Title,
  Version,
} from "./styles";

const schema = Yup.object().shape({
  Merchant: Yup.string().required("Merchant is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/,
      "Password is invalid: must contain at least 8 characters, one uppercase, one lowercase and one special character"
    ),
});

export default function Login() {
  const methods = useForm({
    defaultValues: {
      Merchant: "",
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, role: "Admin" }),
      });
      const result = await response.json();

      if (response.status === 401) {
        throw new Error("Unauthorized");
      }

      const userDataResponse = await fetch(API_URL + "/user/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + result.data.token,
        },
      });
      const userData = await userDataResponse.json();
      login(result.data.token, userData.data.Merchant);
      navigate("/cpd");
    } catch (error) {
      if (error.message === "Unauthorized") {
        alert("Invalid credentials");
        return;
      }
      console.error(error);
      alert("An error occurred");
    }
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <Container>
      <FormProvider {...methods}>
        <Card>
          <LeftPanel>
            <Logo src="/img/logo.png" alt="logo" />
          </LeftPanel>
          <RightPanel>
            <Header>
              <Title>Hello!</Title>
              <Subtitle>Good to see you here</Subtitle>
            </Header>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
              <CustomInput name="Merchant" label="Merchant" />
              <CustomInput name="email" label="Email" />
              <CustomPasswordInput />
              <ForgotPasswordLink>
                <a href="/#">Forgot Password?</a>
              </ForgotPasswordLink>
              <LoginButton type="submit" variant="contained">
                Log in
              </LoginButton>
            </form>
            <Disclaimer>
              By logging in, you agree to our Terms of Use and to receive email,
              updates and acknowledge that you read our Privacy Policy.
            </Disclaimer>
            <Version>Version: v2024031101</Version>
          </RightPanel>
        </Card>
      </FormProvider>
    </Container>
  );
}
