import {
    Checkbox,
    CheckboxGroup,
    Card,
    Center,
    VStack,
    Box,
    Heading,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  
  interface Option {
    value: string;
    label: string;
  }
  
  interface CheckboxFilterProps {
    options: Option[];
    heading: string;
    onChange: (selectedValues: string[]) => void;
  }
  
  export const CheckboxFilter = ({
    options,
    heading,
    onChange,
  }: CheckboxFilterProps) => {
    return (
      <Card 
        boxShadow={"dark-lg"} 
        mt="1" 
        ml="10" 
        mb="1" 
        w={"20vw"} 
        h={"18vh"} 
      >
        <VStack spacing={4}>
          <Box mb="1">
            <Heading
              size="sm"
              boxShadow={"dark-lg"}
              rounded={"3xl"}
              p="2"
              color={"white"}
              bgColor={"black"}
            >
              {heading}
            </Heading>
          </Box>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={[]}
            onChange={(values) => onChange(values as string[])}
          >
            <Wrap spacing={3} justify="center">
              {options.map((option, index) => (
                <WrapItem key={index}>
                  <Checkbox value={option.value}>
                    {option.label}
                  </Checkbox>
                </WrapItem>
              ))}
            </Wrap>
          </CheckboxGroup>
        </VStack>
      </Card>
    );
  };
  