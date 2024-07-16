import Section1 from "./containers/Section1";
import Section2 from "./containers/Section2";
import Section3 from "./Section3";

export default function Body({ winW }) {
  return (
    <>
      <Section1 winW={winW} />
      <Section2 winW={winW} />
      <Section3 winW={winW} />
    </>
  );
}
