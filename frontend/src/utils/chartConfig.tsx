export const chartOptions = {
  title: {
    display: true,
    text: "Statistics",
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Visit Type",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Videos",
      },
    },
  },
};

export const chartOptions2 = {
  title: {
    display: true,
    text: "Statistics",
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Sentiment",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Videos",
      },
    },
  },
};

export const chartData = {
  labels: ["V + A", "Audio", "Transcript", "Other"],
  datasets: [
    {
      label: "Statistics",
      data: [12, 7, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const chartData2 = {
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      label: "Statistics",
      data: [3, 9, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
