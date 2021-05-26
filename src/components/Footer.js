import React from "react"
import styled from "styled-components"
import { dartBackgroundColor } from "styles/colors"
import { ReactComponent as MediumLogo } from "assets/MediumLogo.svg"
import { ReactComponent as SmallLogo } from "assets/SmallLogo.svg"
import { useMediaQuery } from "react-responsive"
import { body2Normal } from "styles/textTheme"
import { GitHub } from "@material-ui/icons"

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: ${(props) => (props.isSmall ? "100px" : "120px")};
  align-items: center;
  justify-content: center;
  background: ${dartBackgroundColor};
`

const InfoSection = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  width: fit-content;
  & > span {
    ${body2Normal}
    color: #fff;
    padding-right: 24px;
  }
`

export default function Footer() {
  const isSmallMode = useMediaQuery({
    query: "(max-width: 768px)",
  })

  return (
    <Container isSmall={isSmallMode}>
      {isSmallMode ? <SmallLogo /> : <MediumLogo />}
      <InfoSection>
        <span>BnB-Flosvia ⓒ 2021</span>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
          <GitHub style={{ color: "#fff" }} />
        </a>
      </InfoSection>
    </Container>
  )
}
