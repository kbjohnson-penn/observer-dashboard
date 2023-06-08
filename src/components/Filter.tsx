import { Select, Box } from "@chakra-ui/react";

type FilterProps = {
  options: string[];
};

export const Filter = ({ options }: FilterProps) => {
  return (
    <Box my={4}>
      <Select placeholder="Select option">
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </Select>
    </Box>
  );
};

