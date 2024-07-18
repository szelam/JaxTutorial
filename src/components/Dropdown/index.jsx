import { BREAKPOINT } from "../../constants.js";
import { FilledImage } from "../../globalStyles.js";
import CustomButton from "../CustomButton.jsx";
import MemberButton from "../MemberButton.jsx";
import {
  ActionsContainer,
  ButtonGroup,
  DropdownBgImg,
  DropdownContainer,
  LinkToSection,
  LionContainer,
} from "./styles";

export default function Dropdown({ open, setOpen }) {
  const handleLinkClick = (id) => {
    setOpen(false);
    const element = document.querySelector(`[id="${id}"]`);
    const offset = window.innerWidth <= BREAKPOINT ? 100 : 120;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return (
    <DropdownContainer open={open}>
      <DropdownBgImg src="menuBg.png" />
      <ActionsContainer>
        <ButtonGroup keepGap>
          <MemberButton />
          <CustomButton text="登入" />
        </ButtonGroup>
        <ButtonGroup>
          <LinkToSection
            onClick={() => {
              handleLinkClick("about");
            }}
          >
            關於Chaingate
          </LinkToSection>
          <LinkToSection
            onClick={() => {
              handleLinkClick("intro");
            }}
          >
            角色介紹
          </LinkToSection>
          <LinkToSection
            onClick={() => {
              handleLinkClick("nft");
            }}
          >
            NFT畫廊
          </LinkToSection>
          <LinkToSection
            onClick={() => {
              handleLinkClick("story");
            }}
          >
            故事簡介
          </LinkToSection>
          <LinkToSection
            onClick={() => {
              handleLinkClick("foot");
            }}
          >
            條款及細則
          </LinkToSection>
          <LinkToSection
            onClick={() => {
              handleLinkClick("foot");
            }}
          >
            私隱政策
          </LinkToSection>
        </ButtonGroup>
      </ActionsContainer>
      <LionContainer>
        <FilledImage src="lion01.png" />
      </LionContainer>
    </DropdownContainer>
  );
}
