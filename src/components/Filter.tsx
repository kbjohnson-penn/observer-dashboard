import { Select, Card, Center, VStack, Box, Heading } from "@chakra-ui/react";

type FilterProps = {
  options: string[];
  heading: string;
};

export const Filter = ({ options, heading }: FilterProps) => {
  return (
    <Card mt='3' boxShadow={'dark-lg'} w={'25vw'} h={'25vh'}>
      <Center>
        <VStack>
          <Box m="5">
            <Heading size='md' boxShadow={'dark-lg'} rounded={'3xl'} pl='10' pr='10' pt='3' pb='3'>{heading}</Heading>
          </Box>
          <Select placeholder="Select option">
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </VStack>
      </Center>
    </Card>
  );
};
