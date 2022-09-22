import React from "react";
import {
  CustomInput,
  InputAndSearchIcon,
  InputContainer,
  SearchContainer,
  SearchContentContainer,
} from "./style";
import Pin from "../../assets/pin.svg";
import SearchWhite from "../../assets/searchWhite.svg";
import { Button } from "../Button";

type SearchProps = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ onChange }: SearchProps) => {
  return (
    <SearchContainer>
      <SearchContentContainer>
        <InputAndSearchIcon>
          <InputContainer>
            <Pin />
            <CustomInput
              data-testid="CustomInput"
              placeholder={`GetYourGuide Tours & Tickets GmbH`}
              onChange={(e) => onChange(e.target.value)}
            />
          </InputContainer>
          <Button>
            <SearchWhite />
          </Button>
        </InputAndSearchIcon>
      </SearchContentContainer>
    </SearchContainer>
  );
};
