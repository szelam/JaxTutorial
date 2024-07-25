import { useContext } from "react";
import DaySelector from "./containers/Dayselector";
import TimeSelector from "./containers/TimeSelector";
import TitleBar from "./containers/Title";
import { Container } from "./styles";
import TimeViewModel from "./viewModel";

function Time() {
  const { loading } = useContext(TimeViewModel.Context);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <TitleBar />
      <DaySelector />
      <TimeSelector />
    </Container>
  );
}

export default TimeViewModel.withProvider(Time);
