import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Col, Row } from "antd";

const GenerateSignals = ({ data }) => {
  useEffect(() => {
    getPrediction();
  }, []);

  const [prediction, setPrediction] = useState({});
  ChartJS.register(ArcElement, Tooltip, Legend);
  //   let prediction = { ...pred?.data?.probability };
  const getPrediction = () => {
    let object = { ...data?.data?.organization };
    let len = Object.keys(object?.funding_events).length;
    let last_fund_date = new Date(object?.latest_funding_round_date);
    let first_fund_obj =
      object?.funding_events[object?.funding_events.length - 1];
    let first_fund_date = new Date(first_fund_obj?.date);
    let values = {
      funding_total_usd: object?.total_funding ? object?.total_funding : 0,
      funding_rounds: len !== null ? len : 0,
      first_funding_year:
        first_fund_obj !== undefined ? first_fund_date.getFullYear() : 0,
      last_funding_year: object?.latest_funding_round_date
        ? last_fund_date.getFullYear()
        : 0,
      founded_year: object?.founded_year,
      months_bw_fundings:
        first_fund_obj !== undefined
          ? last_fund_date.getMonth() - first_fund_date.getMonth()
          : 0,
      average_funded_per_round: object?.total_funding
        ? object?.total_funding / len
        : 0,
      is_software: object?.keywords.find((a) => a.includes("software")) ? 1 : 0,
      is_biotech: object?.keywords.find((a) => a.includes("biotech")) ? 1 : 0,
      is_curatedweb: object?.keywords.find((a) => a.includes("curatedweb"))
        ? 1
        : 0,
      is_mobile: object?.keywords.find((a) => a.includes("mobile")) ? 1 : 0,
      is_Ecommerce: object?.keywords.find((a) => a.includes("Ecommerce"))
        ? 1
        : 0,
      is_usa: object?.country == "United States" ? 1 : 0,
    };
    axios({
      // Endpoint to send files
      url: `http://127.0.0.1:8000`,
      method: "POST",
      data: values,
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
        setPrediction(res?.data?.probability);
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };
  const values = {
    labels: ["Acquired", "Failed or Closed", "IPO", "Successfull"],
    datasets: [
      {
        label: "% Probability",
        data: [prediction[0], prediction[1], prediction[2], prediction[3]],
        backgroundColor: [
          "rgba(54, 162, 235)",
          "rgba(255, 0, 11)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
        ],
        borderColor: [
          "rgba(54, 162, 235)",
          "rgba(255, 99, 132)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="form">
      <h2>Future Predictions</h2>
      <div style={{ width: "40%", height: "40%" }}>
        <Doughnut data={values} />
      </div>
    </div>
  );
};

export default GenerateSignals;
