import React from "react";

import { Title, Container, Item, ItemsWraper } from "./_style";

import { getPaginatedResponse } from "./_data";

import Pagination from "./pagination";

function LearnBee() {
  const items = getPaginatedResponse();

  return (
    <Container>
      <Title>Learning Spelling Bee</Title>
      <ItemsWraper>
        {items?.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </ItemsWraper>
    </Container>
  );
}

export default LearnBee;
