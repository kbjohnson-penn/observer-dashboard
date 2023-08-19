import React, { useContext } from "react";
import {
  Box,
  Card,
  Center,
  HStack,
  Heading,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import { FilterContext } from "../context/FilterContext";
import { CheckboxFilter } from "../components/CheckboxFilter";

const FilterSide: React.FC = () => {
  const visitTypeOptions = [
    { value: "VA", label: "Video+Audio" },
    { value: "A", label: "Audio" },
    { value: "T", label: "Transcript" },
    { value: "ETC", label: "Other" },
  ];

  const reasonForVisitOptions = [
    { value: "PC", label: "Primary Care" },
    { value: "GC", label: "Genetics Consult" },
    { value: "O", label: "Other" },
  ];

  const sentimentOptions = [
    { value: "P", label: "Positive" },
    { value: "N", label: "Negative" },
    { value: "NE", label: "Neutral" },
  ];

  const patientAgeCategoryOptions = [
    { value: "C", label: "Child" },
    { value: "A", label: "Adolescent" },
    { value: "AD", label: "Adult" },
    { value: "S", label: "Senior" },
  ];

  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterSide must be used within a FilterProvider");
  }
  const { filters, setFilters, videoStats } = context;

  let percentIncrease =
    videoStats.current !== 0 && videoStats.previous !== 0
      ? Math.round(
          ((videoStats.current - videoStats.previous) / videoStats.previous) *
            100
        )
      : 0;

  const handleFilterChange = (
    filterName: keyof typeof filters,
    values: string[] // changed from value: string
  ) => {
    setFilters((prevState: typeof filters) => ({
      ...prevState,
      [filterName]: values,
    }));
  };

  return (
    <Box position="fixed" top={0} pl={"1"}>
      <VStack spacing={4}>
        <HStack>
          <Heading
            as="h2"
            size="lg"
            mb={-1}
            rounded={"3xl"}
            boxShadow={"dark-lg"}
            p="4"
          >
            Video Statistics
          </Heading>
          <Box mt="1" ml="2" mb="1" w={"10vw"} h={"10vh"}>
            <Center>
              <Stat
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                top="3"
                rounded={"2xl"}
                boxShadow={"base"}
              >
                <StatLabel>Total Videos</StatLabel>
                <HStack>
                  <StatNumber>{videoStats.current}</StatNumber>
                  <StatHelpText>
                    <StatArrow
                      type={percentIncrease >= 0 ? "increase" : "decrease"}
                    />
                    {Math.abs(percentIncrease)}%
                  </StatHelpText>
                </HStack>
              </Stat>
            </Center>
          </Box>
        </HStack>

        <CheckboxFilter
          options={visitTypeOptions}
          heading={"Visit Type"}
          onChange={(value) => handleFilterChange("visitType", value)}
        />
        <CheckboxFilter
          options={reasonForVisitOptions}
          heading={"Reason for Visit"}
          onChange={(value) => handleFilterChange("reasonForVisit", value)}
        />
        <CheckboxFilter
          options={sentimentOptions}
          heading={"Sentiment"}
          onChange={(value) => handleFilterChange("sentiment", value)}
        />
        <CheckboxFilter
          options={patientAgeCategoryOptions}
          heading={"Patient Age Category"}
          onChange={(value) => handleFilterChange("patientAgeCategory", value)}
        />
      </VStack>
    </Box>
  );
};

export default FilterSide;
