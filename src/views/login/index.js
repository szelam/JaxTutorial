import React from "react";
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
} from "./styles";
import CustomInput from "./containers/CustomInput";
import CustomPasswordInput from "./containers/CustomPasswordInput";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const API_URL = "https://prebook-dev.techlutionservice.com/v2";

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
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Merchant: "",
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });




    const onSubmit = async (data) => {
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
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const onError = (errors, e) => console.log(errors, e);

    return (
        <Container>
            <Card>
                <LeftPanel>
                    <Logo src="/img/logo.png" alt="logo" />
                </LeftPanel>
                <RightPanel>
                    <Header>
                        <Title>Hello!</Title>
                        <Subtitle>Good to see you here</Subtitle>
                    </Header>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <CustomInput
                            control={control}
                            name="Merchant"
                            label="Merchant"
                            error={errors.Merchant}
                        />
                        <CustomInput
                            control={control}
                            name="email"
                            label="Email"
                            error={errors.email}
                        />
                        <CustomPasswordInput control={control} error={errors.password} />
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
        </Container>
    );
}
