import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Paragraph } from "../../styles/sharedStyles";
import {
  ButtonsContainer,
  FlagContainer,
  HeaderContainer,
  HeaderContentContainer,
  InfoContainer,
  ProfileContainer,
  RightContentContainer,
} from "./style";
import Question from "../../assets/question.svg";
import Profile from "../../assets/profile.svg";
import { Link } from "gatsby";
import { Cart } from "./Cart";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Link to="/">
          <StaticImage
            src="../../images/logoipsum.png"
            alt="logoipsum logo"
            placeholder="tracedSVG"
            quality={100}
            width={136}
            height={30}
          />
        </Link>
        <RightContentContainer>
          <InfoContainer>
            <Paragraph type="small">Cotação dólar hoje: R$5,53</Paragraph>
            <FlagContainer>
              <StaticImage
                src="../../images/brazilFlag.png"
                alt="Brazil flag"
                placeholder="tracedSVG"
                quality={100}
                width={30}
                height={21}
              />
            </FlagContainer>
            <Question />
          </InfoContainer>
          <ButtonsContainer>
            <Link to="/login">
              <ProfileContainer>
                <Profile />
                <Paragraph type="medium" bold color="brandColorBlue">
                  Entrar
                </Paragraph>
              </ProfileContainer>
            </Link>
            <Cart />
          </ButtonsContainer>
        </RightContentContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};
