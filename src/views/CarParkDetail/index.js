import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { API_URL } from "../../constants/api";
import { useAuth } from "../../providers/AuthProvider";
import LeftContainer from "./containers/LeftContainer";
import RightContainer from "./containers/RightContainer";
import TncContainer from "./containers/TncContainer";
import schema from "./schema";
import {
  ActionRow,
  Container,
  CustomButton,
  CustomSecondaryButton,
  SwitchContainer,
} from "./styles";

const CARPARK_ID = "62f2106a1aa3d91e23a191a8";

export default function CarParkDetail() {
  const { token, setCarParkId, merchantID } = useAuth();
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.cast(),
  });

  useEffect(() => {
    console.log(merchantID);
    if (merchantID) getCarParkDetail();
  }, [merchantID]);

  const getCarParkDetail = async () => {
    try {
      const carparkdetail = await fetch(
        API_URL + `/carpark/${CARPARK_ID}` + "?Merchant=" + merchantID,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const carparkdetailData = await carparkdetail.json();

      setCarParkId(CARPARK_ID);

      methods.reset(carparkdetailData.records[0]);
    } catch {
      alert("Error fetching car park detail");
    }
  };

  const onSubmit = (data) => {
    alert("Submitted");
    console.log(data);
  };

  const onError = (errors, e) => {
    alert("Submitted with errors");
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
