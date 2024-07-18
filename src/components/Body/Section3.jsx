import { useState } from "react";
import {
  FilledImage,
  FlexDiv,
  StyledDiv,
  StyledSpan,
} from "../../globalStyles";
import { CHARACTERS, TIMELINE_DATA } from "./constants";
import Title from "./containers/Title";
import {
  AvatarBg,
  AvatarImg,
  CharacterBottomGroup,
  CharacterBox,
  CharacterButtonsContainer,
  NFTImg,
  NFTMarquee,
  S3,
  S3BgImg,
  S3Section,
  S3TimelineBgImg,
  TimelineContainer,
} from "./styles";
import TimelineItem from "./TimelineItem";

export default function Section3() {
  const [character, setCharacter] = useState(0);

  return (
    <S3>
      <S3BgImg src="bageBg.png" alt="" />
      <S3Section>
        <Title>角色介紹</Title>
        <CharacterBox>
          <StyledSpan color="#FF7E50" fontSize="90" sx={{ fontSize: "30" }}>
            {CHARACTERS[character].name}
          </StyledSpan>
        </CharacterBox>
        <CharacterBox big>
          <AvatarImg src={`Character/${CHARACTERS[character].id}.png`} alt="" />
          <AvatarBg width="100%" height="100%">
            <img
              src={`Character/${CHARACTERS[character].id.toLowerCase()}_bg.png`}
              alt=""
            />
          </AvatarBg>
        </CharacterBox>
        <CharacterBottomGroup>
          <CharacterBox padding="40px">
            {[0, 1, 2].map((i) => (
              <StyledDiv flexBasis="100%">
                <FlexDiv $gap="20">
                  <StyledDiv height="49px">
                    <FilledImage src={`Character/into_icon0${i + 1}.png`} />
                  </StyledDiv>
                  <StyledSpan fontSize="35">
                    {i === 0 ? "背景" : i === 1 ? "外型" : "能力"}
                  </StyledSpan>
                </FlexDiv>
                {
                  CHARACTERS[character][
                    i === 0 ? "d_bg" : i === 1 ? "d_look" : "d_power"
                  ]
                }
              </StyledDiv>
            ))}
          </CharacterBox>
          <CharacterButtonsContainer>
            {CHARACTERS.map((c, i) => (
              <StyledDiv
                position="relative"
                opacity={character === i ? 1 : 0.5}
                onClick={() => setCharacter(i)}
              >
                <img src="Character/button_border01.svg" alt="" />
                <img
                  src={`Character/avatar0${i + 1}.svg`}
                  style={{
                    position: "absolute",
                    left: "0",
                  }}
                  alt=""
                />
              </StyledDiv>
            ))}
          </CharacterButtonsContainer>
        </CharacterBottomGroup>
        <Title>NFT畫廊</Title>
      </S3Section>
      <NFTMarquee>
        <NFTImg src="nft3.png" alt="" />
        <NFTImg src="nft1.png" alt="" />
        <NFTImg src="nft2.png" alt="" />
        <NFTImg src="nft3.png" alt="" />
      </NFTMarquee>
      <NFTMarquee speed={70} direction="right">
        <NFTImg src="nft1.png" alt="" />
        <NFTImg src="nft2.png" alt="" />
        <NFTImg src="nft3.png" alt="" />
        <NFTImg src="nft1.png" alt="" />
      </NFTMarquee>
      <S3Section>
        <Title>故事簡介</Title>
      </S3Section>
      <StyledDiv width="100%" margin="40px 0 0 0">
        <FilledImage src="earth.png " />
      </StyledDiv>
      <S3Section>
        <StyledSpan
          color="#544635"
          fontSize="40"
          textAlign="center"
          margin="20px 0 0 0 "
          sx={{ fontSize: "18" }}
        >
          獅頭仔牙DAN收到佢嘅第一次任務地點,就係要去香港發掘好玩好食新元素,就係咁牙DAN就係香港開展咗探索之旅。
        </StyledSpan>
        <StyledDiv margin="60px 0 0 0">
          <FilledImage src="stroy.jpg" />
        </StyledDiv>
      </S3Section>
      <StyledDiv margin="40px 0 0 0" style={{ overflow: "hidden" }}>
        <FilledImage src="three.png" style={{ transform: "scale(1.1)" }} />
      </StyledDiv>
      <S3Section padding="0 210px">
        <Title>未來計劃</Title>
        <S3TimelineBgImg src="time_line_bg.jpg" />

        <TimelineContainer>
          {Object.entries(TIMELINE_DATA).map(([date, content], index) => (
            <TimelineItem
              key={index}
              date={date}
              content={content}
              islast={index === Object.keys(TIMELINE_DATA).length - 1}
            />
          ))}
        </TimelineContainer>
      </S3Section>
    </S3>
  );
}
