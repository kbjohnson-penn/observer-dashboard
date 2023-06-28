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
  Wrap,
} from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { FilterContext } from "../context/FilterContext";

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
    value: string
  ) => {
    setFilters((prevState: typeof filters) => ({
      ...prevState,
      [filterName]: value,
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
          <Box
            boxShadow={"dark-lg"}
            mt="1"
            ml="2"
            mb="1"
            w={"10vw"}
            h={"12vh"}
            rounded={"3xl"}
          >
            <Center>
              <Stat
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <StatLabel>Total Videos</StatLabel>
                <StatNumber>{videoStats.current}</StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={percentIncrease >= 0 ? "increase" : "decrease"}
                  />
                  {Math.abs(percentIncrease)}%
                </StatHelpText>
              </Stat>
            </Center>
          </Box>
        </HStack>

        <Filter
          options={visitTypeOptions}
          heading={"Visit Type"}
          onChange={(value) => handleFilterChange("visitType", value)}
        />
        <Filter
          options={reasonForVisitOptions}
          heading={"Reason for Visit"}
          onChange={(value) => handleFilterChange("reasonForVisit", value)}
        />
        <Filter
          options={sentimentOptions}
          heading={"Sentiment"}
          onChange={(value) => handleFilterChange("sentiment", value)}
        />
        <Filter
          options={patientAgeCategoryOptions}
          heading={"Patient Age Category"}
          onChange={(value) => handleFilterChange("patientAgeCategory", value)}
        />
      </VStack>
    </Box>
  );
};

export default FilterSide;
