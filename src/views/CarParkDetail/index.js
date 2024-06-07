import React from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";

export default function CarParkDetail() {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.cast(),
  });

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
