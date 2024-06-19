import DaySelector from "./containers/Dayselector";
import TimeSelector from "./containers/TimeSelector";
import TitleBar from "./containers/Title";
import { Container } from "./styles";
import TimeViewModel from "./viewModel";

function Time() {
  return (
    <Container>
      <TitleBar />
      <DaySelector />
      <TimeSelector />
    </Container>
  );
}

export default TimeViewModel.withProvider(Time);
