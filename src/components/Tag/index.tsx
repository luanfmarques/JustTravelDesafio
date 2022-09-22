import React, { ReactNode } from "react";
import { TagContainer } from "./style";

type TagProps = {
  children: ReactNode;
  white?: boolean;
};

export const Tag = ({ children, white }: TagProps) => {
  return <TagContainer white={white}>{children}</TagContainer>;
};
