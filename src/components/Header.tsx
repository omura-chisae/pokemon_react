import { FC, ReactElement, memo } from "react";
import { Box, Text } from "@chakra-ui/react";

export const Header = memo(() => {
  return (
    <Box
      h="70px"
      display="flex"
      justifyContent="center"
      bgColor="#e33e2e"
      textAlign="center"
    >
      <Text color="white" fontSize="lg">
        ポケモン図鑑
      </Text>
    </Box>
  );
});
