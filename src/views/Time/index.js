import { useContext } from "react";
import DaySelector from "./containers/Dayselector";
import Dev from "./containers/Dev";
import TimeSelector from "./containers/TimeSelector";
import TitleBar from "./containers/Title";
import { Container } from "./styles";
import TimeViewModel from "./viewModel";

function Time() {
  const { loading } = useContext(TimeViewModel.Context);

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="loader" />
      </div>
    );
  }

  return (
    <Container>
      <TitleBar />
      <DaySelector />
      <TimeSelector />
      <Dev />
    </Container>
  );
}

export default TimeViewModel.withProvider(Time);
