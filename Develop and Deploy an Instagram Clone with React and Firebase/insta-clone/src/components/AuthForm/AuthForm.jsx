import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

export const AuthForm = () => {
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
    <Image src='/logo.jpg' h={24} cursor={"pointer"} alt='Instagram' />
    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"white"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>
    </VStack>
    </Box>
    
	<Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>

        </Box>
        <Box  color={"blue.500"} cursor={"pointer"}>
				
		</Box>
        </Flex>
    </Box>
  
    
    </>
  )
}
