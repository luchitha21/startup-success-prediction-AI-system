import React, { useState } from "react";
import axios from "axios";
import Valuation from "./valuation";

function Prediction(props) {
  const [valuation, setValuation] = useState("");
  const handleValue = (val) => {
    axios({
      // Endpoint to send files
      url: `http://127.0.0.1:8000/valuations`,
      method: "POST",
      data: val,
    })
      // Handle the response from backend here
      .then((res) => {
        setValuation(res?.data?.value);
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };
  return (
    <main>
      <h1>Startup Valuation</h1>
      <div className="insights">
        <div className="prediction">
          <span className="material-icons-sharp">query_stats</span>
          <div className="middle">
            <div className="left">
              <h3>Startup Valuation </h3>
              <h1>{"$" + Math.round(valuation)}</h1>
            </div>
          </div>
        </div>
      </div>
      <Valuation values={handleValue} />
    </main>
  );
}

//continue from 28:52

export default Prediction;
