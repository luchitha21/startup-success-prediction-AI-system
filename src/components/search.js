import React, { useState } from "react";
import axios from "axios";
import CompanyProfile from "./companyProfile";
import GenerateSignals from "./generateSignals";
import { notification } from "antd";

function Search(props) {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  const onSearch = (value) => {
    axios({
      // Endpoint to send files
      url: `https://api.apollo.io/v1/organizations/enrich?api_key=sB2R-mgUzTjUZx0WZVP6kw&domain=${value}`,
      method: "GET",
    })
      // Handle the response from backend here
      .then((res) => {
        if (Object.values(res?.data).length !== 0) {
          console.log(res);
          setData(res);
          //   setLoading(true);
        } else {
          notification.error({
            message: "please enter the company URL",
          });
        }
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
        // setLoading(false);
        notification.error({
          message: "the company does not exist in our database",
        });
      });
  };
  return (
    <main>
      <h1>Startup Signals Prediction</h1>
      <div className="insights">
        <div className="prediction">
          <div className="input-field">
            <label>Enter Company URL</label>
            <input
              className="input"
              //   type="search"
              name="funding_total_usd"
              onChange={(event) => setUrl(event?.target?.value)}
              //   onSubmit={(val) => {
              //     console.log(val);
              //   }}
            ></input>
          </div>
          <div className="form-btn">
            <input
              type="submit"
              value="Search"
              className="submit-btn"
              onClick={() => onSearch(url)}
            />
          </div>
        </div>
      </div>
      {Object.values(data).length !== 0 && <CompanyProfile data={data} />}
      {Object.values(data).length !== 0 && <GenerateSignals data={data} />}
    </main>
  );
}

export default Search;
