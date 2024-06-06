import React from "react";
import {
  ActionRow,
  Container,
  CustomButton,
  CustomSecondaryButton,
  SwitchContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import RightContainer from "./containers/RightContainer";
import LeftContainer from "./containers/LeftContainer";
import TncContainer from "./containers/TncContainer";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CarParkDetail() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <ActionRow>
          <CustomButton type="submit">Save</CustomButton>
          <CustomSecondaryButton>Back</CustomSecondaryButton>
        </ActionRow>
        <SwitchContainer>
          <LeftContainer control={control} errors={errors} />
          <RightContainer control={control} errors={errors} />
        </SwitchContainer>
        <TncContainer control={control} errors={errors} watch={watch} setValue={setValue} />
      </form>
    </Container>
  );
}
