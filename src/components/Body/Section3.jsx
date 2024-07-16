import { useMemo, useRef, useState } from "react";
import { BREAKPOINT } from "../../constants";
import {
  FilledImage,
  FlexDiv,
  StyledDiv,
  StyledSpan,
} from "../../globalStyles";
import { CHARACTERS } from "./constants";
import Title from "./containers/Title";
import {
  AvatarBg,
  AvatarImg,
  CharacterBottomGroup,
  CharacterBox,
  NFTImg,
  S3,
  S3BgImg,
  S3Section,
  S3TimelineBgImg,
  TimelineContainer,
  TImelineStamp,
  TimelineText,
} from "./styles";

export default function Section3({ winW }) {
  const [character, setCharacter] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const timelineHeight = useMemo(() => {
    if (ref1.current && ref2.current) {
      const element1Rect = ref1.current.getBoundingClientRect();
      const element2Rect = ref2.current.getBoundingClientRect();
      const verticalDistance =
        element2Rect.top - element1Rect.bottom + element2Rect.height + 2;
      console.log(verticalDistance);
      return verticalDistance;
    }
    return 0;
  }, [
    ref1?.current?.getBoundingClientRect(),
    ref2?.current?.getBoundingClientRect(),
  ]);

  return (
    <S3>
      <S3BgImg src="bageBg.png" />
      <S3Section>
        <Title>角色介紹</Title>
        <CharacterBox>
          <StyledSpan
            color="#FF7E50"
            fontSize={winW <= BREAKPOINT ? "30" : "90"}
          >
            {CHARACTERS[character].name}
          </StyledSpan>
        </CharacterBox>
        <CharacterBox big>
          <AvatarImg src={`Character/${CHARACTERS[character].id}.png`} />
          <AvatarBg width="100%" height="100%">
            <img
              src={`Character/${CHARACTERS[character].id.toLowerCase()}_bg.png`}
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
          <FlexDiv
            $gap="40"
            style={winW <= BREAKPOINT ? { transform: "scale(0.7)" } : {}}
          >
            {CHARACTERS.map((c, i) => (
              <StyledDiv
                position="relative"
                opacity={character === i ? 1 : 0.5}
                onClick={() => setCharacter(i)}
              >
                <img src="Character/button_border01.svg" />
                <img
                  src={`Character/avatar0${i + 1}.svg`}
                  style={{
                    position: "absolute",
                    left: "0",
                  }}
                />
              </StyledDiv>
            ))}
          </FlexDiv>
        </CharacterBottomGroup>
        <Title>NFT畫廊</Title>
        <FlexDiv relative $gap="20">
          <NFTImg src="nft3.png" />
          <NFTImg src="nft1.png" />
          <NFTImg src="nft2.png" />
          <NFTImg src="nft3.png" offset={winW <= 900 ? "60px" : "120px"} />
        </FlexDiv>
        <FlexDiv relative $gap="20">
          <NFTImg src="nft1.png" />
          <NFTImg src="nft2.png" />
          <NFTImg src="nft3.png" />
          <NFTImg src="nft1.png" offset={winW <= 900 ? "200px" : "-200px"} />
        </FlexDiv>
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
          <TImelineStamp>2023年Q3</TImelineStamp>
          <TimelineText>
            - CG NFT第一波發布（20,000個NFT免費鑄幣）
            <br /> - 10,000個NFT預留，用於商戶/重要合作夥伴招募
          </TimelineText>
          <TImelineStamp>2023年Q4</TImelineStamp>
          <TimelineText>
            - 應用程序第一版上線 <br />- 第一波商戶特權公布
          </TimelineText>
          <TImelineStamp>2024年Q1</TImelineStamp>
          <TimelineText>
            - 第一波商戶特權 <br /> - NFT及P2E發布，CG
            NFT第二波發布（20,000個NFT，0.02 ETH=199.71港幣）
            <br /> - 第二波商戶特權公布 <br /> - 代幣上線和質押獎勵上線
          </TimelineText>
          <TImelineStamp>2024年Q2</TImelineStamp>
          <TimelineText>
            - 第二波商戶特權 <br /> - NFT及P2E發布，CG
            NFT第三波發布(10,000個NFT，0.05 ETH=499.27港幣) <br /> -
            第三波商戶特權公布 <br />- 應用程序第二版(社交功能)上線
          </TimelineText>
          <TImelineStamp>2024年Q3</TImelineStamp>
          <TimelineText>
            - 第三波商戶特權
            <br /> - NFT及P2E發布
            <br /> - 藍V獎勵計劃上線
          </TimelineText>
          <TImelineStamp>2024年Q4</TImelineStamp>
          <TimelineText>
            - 代幣獎勵計劃上線 <br />- 應用程序第三版（代幣和商戶POS功能）上線
          </TimelineText>
          <TImelineStamp length={winW <= 900 ? "300px" : "700px"}>
            2025年Q1
          </TImelineStamp>
          <TimelineText>- 第一波全球品牌及影響者評選特權上線</TimelineText>
          <TImelineStamp length={timelineHeight + "px"} ref={ref1}>
            2025年Q2{" "}
          </TImelineStamp>
          <TimelineText>- 第二波全球品牌及影響者評選特權上線</TimelineText>
          <TImelineStamp length="0px" ref={ref2}>
            2025年Q3
          </TImelineStamp>
          <TimelineText>- 第三波全球品牌及影響者評選特權上線</TimelineText>
        </TimelineContainer>
      </S3Section>
    </S3>
  );
}
