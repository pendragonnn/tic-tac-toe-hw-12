import * as React from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import { ChakraProvider,  Box } from "@chakra-ui/react";
import Game from "./components/Game";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box>
          <Game />
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
