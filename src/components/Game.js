import * as React from "react";
import { ticTacToe } from "../features/ticTacToeSlice";
import { useDispatch } from "react-redux";
import { Box, Button, Flex } from "@chakra-ui/react";
import Board from "./Board";

function Game() {
  const dispatch = useDispatch();
  function handleRestart() {
    dispatch(ticTacToe.actions.restart());
  }
  return (
    <Box bg="yellow.100" minH="100vh" p={10}>
      <Box
        maxW="md"
        mx="auto"
        bg="white"
        p={6}
        borderRadius="lg"
        borderWidth="1px"
        borderColor="teal"
      >
        <Flex direction="column" alignItems="center" justify="center">
          <Board />
          <Button size="md" onClick={handleRestart} my={5} colorScheme="teal">
            restart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Game;
