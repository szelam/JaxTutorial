import React, { useEffect, useContext } from "react";
import {
  ActionRow,
  Container,
  CustomButton,
  CustomSecondaryButton,
  SwitchContainer,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import RightContainer from "./containers/RightContainer";
import LeftContainer from "./containers/LeftContainer";
import TncContainer from "./containers/TncContainer";
import schema from "./schema";
import { useAuth } from "../../providers/AuthProvider";
import { Navigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "../../constants/api";

export default function CarParkDetail() {
  const { token, setCarParkId } = useAuth();
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.cast(),
  });
  const [redirect, setRedirect] = React.useState(false);


  useEffect(() => {
    if (!token && !redirect) {
      setRedirect(true);
      alert('You are not authenticated. Redirecting to login page.'); // This is ran twice because of Strict Mode in development.
    } else {
      getCarParkDetail();
    }
  }, [token, redirect]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  const getCarParkDetail = async () => {
    try {
      const carparkdetail = await fetch(API_URL + "/carpark/661f8ed773794299a25a1717", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const carparkdetailData = await carparkdetail.json();
      console.log(carparkdetailData.records[0]);

      setCarParkId("661f8ed773794299a25a1717");

      methods.reset(carparkdetailData.records[0]);
    } catch {
      alert('Error fetching car park detail');
    }
  }

  const onSubmit = (data) => {
    alert('Submitted');
    console.log(data);
  };

  const onError = (errors, e) => {
    alert('Submitted with errors');
    console.log(errors, e);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <ActionRow>
            <CustomButton type="submit">Save</CustomButton>
            <CustomSecondaryButton>Back</CustomSecondaryButton>
          </ActionRow>
          <SwitchContainer>
            <LeftContainer />
            <RightContainer />
          </SwitchContainer>
          <TncContainer />
        </form>
      </FormProvider>
    </Container>
  );
}
