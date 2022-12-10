import React from "react";
import styled from "styled-components";
import { ellipsis } from "polished";

import { Flex } from "../styledComponent/Flex";
import { Text } from "../styledComponent/Text";
import { Image } from "../styledComponent/Image";
import { Button } from "../styledComponent/Button";
import { Box } from "../styledComponent/Box";

const EnhancedText = styled(Text)`
  ${ellipsis("216px")}
`;

const Card = ({ item, ...rest }) => (
  <Flex
    flexDirection="column"
    width="344px"
    height="148px"
    bg="yellow"
    borderRadius={1}
    {...rest}
  >
    <Flex flexDirection="row" mt={16} ml={16} mr={16}>
      <Flex flexDirection="column">
        <EnhancedText fontSize={"24px"}>{item.title}</EnhancedText>
        <Text fontSize={"14px"} fontWeight="lighter" width={216}>
          {item.description}
        </Text>
      </Flex>
      <Flex
        bg="pink"
        ml="auto"
        width={80}
        height={80}
        borderRadius={4}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={[5]} fontWeight="lighter">
          {item.index + 1}
        </Text>
      </Flex>
    </Flex>
    <Flex mt="8px">
      <Button p={0} m={0} fontSize="14px" bg="transparent" color="#6200ee">
        ACTION 1
      </Button>
      <Button fontSize="14px" bg="transparent" color="#6200ee">
        ACTION 2
      </Button>
    </Flex>
  </Flex>
);

export default Card;
