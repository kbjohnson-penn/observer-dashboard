import { Select, Card, Center, VStack, Box, Heading } from "@chakra-ui/react";

interface FilterProps {
  options: string[];
  heading: string;
  onChange: (value: string) => void;
}

export const Filter = ({ options, heading, onChange }: FilterProps) => {
  return (
    <Card boxShadow={"dark-lg"} mt="3" w={"25vw"} h={"25vh"}>
      <Center>
        <VStack>
          <Box m="5">
            <Heading
              size="md"
              boxShadow={"dark-lg"}
              rounded={"3xl"}
              pl="8"
              pr="8"
              pt="3"
              pb="3"
              color={'white'}
              bgColor={'black'}
            >
              {heading}
            </Heading>
          </Box>
          <Select
            placeholder="Select option"
            onChange={(e) => onChange(e.target.value)}
          >
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
