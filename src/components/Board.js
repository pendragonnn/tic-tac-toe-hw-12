import * as React from "react";
import { ticTacToe } from "../features/ticTacToeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";

function Board() {
  const { status, squares } = useSelector((state) => state);
  const dispatch = useDispatch();
  function selectSquareHandler(squareIndex) {
    dispatch(ticTacToe.actions.selectSquare(squareIndex));
  }
  function renderSquare(i) {
    const squareValue = squares[i];

    return (
      <Button
        w="100px"
        h="100px"
        variant="outline"
        borderWidth="2px"
        borderRadius={10}
        borderColor="yellow.300"
        color={squareValue === "X" ? "red.300" : "blue.300"}
        onClick={() => selectSquareHandler(i)}
      >
        {squares[i]}
      </Button>
    );
  }

  return (
    <VStack mt={4}>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={3}
        p={3}
        borderRadius={8}
        bgColor="teal"
        color="white"
      >
        {status}
      </Text>
      <Flex gap="2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Flex>
      <Flex gap="2">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Flex>
      <Flex gap="2">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Flex>
    </VStack>
  );
}

export default Board;
