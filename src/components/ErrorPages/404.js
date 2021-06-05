import React from "react";
import { useSelector } from "react-redux";
import {
  NotFoundContainer,
  NotFound,
  NotFound404,
  H1Tag,
  H2Tag,
  AnchorTag,
} from "./style";

const Error = () => {

  return (
    <NotFoundContainer>
      <NotFound>
        <NotFound404>
          <H1Tag>Oops!</H1Tag>
          <H2Tag>404 - The Page can't be found</H2Tag>
        </NotFound404>
        <AnchorTag href='/'>Go To Homepage</AnchorTag>
      </NotFound>
    </NotFoundContainer>
  );
};

export default Error;
