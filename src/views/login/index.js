import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Container,
    Card,
    LeftPanel,
    Logo,
    RightPanel,
    Header,
    Title,
    Subtitle,
    ForgotPasswordLink,
    LoginButton,
    Disclaimer,
    Version,
    LoadingScreen
} from "./styles";
import CustomInput from "./containers/CustomInput";
import CustomPasswordInput from "./containers/CustomPasswordInput";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../constants/api";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";

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
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            console.log(JSON.stringify({ ...data, role: "admin" }));
            const response = await fetch(API_URL + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, role: "Admin" }),
            });
            const result = await response.json();
            console.log(result);

            const userDataResponse = await fetch(API_URL + "/user/me", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + result.data.token,
                },
            });
            const userData = await userDataResponse.json();
            console.log(userData);
            login(result.data.token);
            navigate('/cpd');

        } catch (error) {
            console.error("Error:", error);
            alert("Login failed");
            setIsLoading(false);
        }
    };

    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            {isLoading && (
                <LoadingScreen>
                    <CircularProgress />
                </LoadingScreen>
            )}
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
        </>
    );
}
