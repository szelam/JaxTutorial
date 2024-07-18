import { FilledImage } from "../../globalStyles";
import { Head, Logo, MenuButton } from "./styles";

export default function Navbar({ open, setOpen, children }) {
  return (
    <Head>
      <Logo src="logo.svg" />
      <MenuButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FilledImage src={open ? "close.jpg" : "menu.svg"} />
      </MenuButton>
    </Head>
  );
}
