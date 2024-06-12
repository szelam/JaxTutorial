import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { styled as MUIStyled } from "@mui/material/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url("/img/image.png") no-repeat center bottom;
  background-size: 190%;
`;

export const Card = styled.div`
  display: flex;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 740px;
  width: 1030px;
  background: white;
`;

export const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  width: 370px;
  background: url("/img/image2.png"),
    linear-gradient(rgb(33, 191, 188), rgb(186, 234, 233));
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 660px;
  text-align: center;
`;

export const Header = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  max-height: 86px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #21bfbc;
  margin-top: 20px;
  line-height: 1.25;
  margin-bottom: 0;
`;

export const Subtitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
`;

export const ForgotPasswordLink = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 10px;
  & a {
    text-align: right;
    text-decoration: underline;
    color: #21bfbc;
  }
`;

export const LoginButton = styled.button`
  width: 290px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 40px;
  color: white;
  background-color: #21bfbc;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const Disclaimer = styled.p`
  font-size: 15px;
  text-align: center;
  margin-top: 40px;
`;

export const Version = styled.p`
  font-size: 15px;
  text-align: center;
  margin-top: 40px;
`;

export const StyledFormControl = MUIStyled(FormControl)(() => ({
  marginTop: "20px",
  width: "500px",
}));

export const StyledInputLabel = MUIStyled(InputLabel)(({ theme, error }) => ({
  "&.MuiInputLabel-root": {
    color: error ? "#FF0000" : "#DBDBDB",
  },
  "&.Mui-focused": {
    color: "#21BFBC",
  },
}));

export const StyledOutlinedInput = MUIStyled(OutlinedInput)(
  ({ theme, error }) => ({
    "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderRadius: "15px",
      borderColor: error ? "#FF0000" : "#DBDBDB",
    },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: error ? "#FF0000" : "#21BFBC",
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #21BFBC",
    },
  })
);

export const StyledIconButton = MUIStyled(IconButton)(() => ({
  "&.MuiIconButton-root": {
    marginRight: "22px",
    color: "#21BFBC",
  },
}));

export const StyledFormHelperText = MUIStyled(FormHelperText)(() => ({
  color: "#FF0000",
  position: "absolute",
  bottom: "0",
  transform: "translateY(100%)",
}));

export const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;