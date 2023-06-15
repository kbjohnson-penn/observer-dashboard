import { Select, Card, Center, VStack, Box, Heading } from "@chakra-ui/react";

interface Option {
  value: string;
  label: string;
}

interface FilterProps {
  options: Option[];
  heading: string;
  onChange: (value: string) => void;
}

export const Filter = ({ options, heading, onChange }: FilterProps) => {
  return (
    <Card boxShadow={"dark-lg"} mt="1" ml='10' mb='1' w={"20vw"} h={"18vh"}>
      <Center>
        <VStack>
          <Box m="3">
            <Heading
              size="sm"
              boxShadow={"dark-lg"}
              rounded={"3xl"}
              p='2'
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
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </VStack>
      </Center>
    </Card>
  );
};
