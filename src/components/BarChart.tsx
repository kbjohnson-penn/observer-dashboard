import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";
import { Card, WrapItem } from "@chakra-ui/react";

interface BarChartProps {
  options: ChartOptions;
  data: ChartData<"bar">;
}

const BarChart: FC<BarChartProps> = ({ options, data }) => {
  return (
    <WrapItem>
      <Card boxShadow={'dark-lg'} rounded={'3xl'}>
        <Bar options={options} data={data} />
      </Card>
    </WrapItem>
  );
};

export default BarChart;
