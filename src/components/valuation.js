import React, { useState } from "react";

const Valuation = ({ values }) => {
  const [features, setFeatures] = useState({
    funding_rounds: 0,
    funding_total_usd: 0,
    number_of_members: 0,
    number_of_founders: 0,
    mean_funding: 0,
    max_funding: 0,
    seed: 0,
    number_of_invested_VCs: 0,
    total_investment_from_VCs: 0,
    year: 0,
    month: 0,
    day: 0,
  });

  const sendChanges = () => {
    values(features);
  };

  return (
    <div className="form">
      <h2>Generate Valuation!</h2>
      <form>
        <div className="input-field">
          <label className="required">Number of funding rounds</label>
          <input
            className="input"
            type="number"
            name="funding_rounds"
            onChange={(e) => {
              setFeatures({
                ...features,
                funding_rounds: e?.target?.value,
              });
            }}
            min={0}
            step={1}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Total funding received</label>
          <input
            className="input"
            type="number"
            name="funding_total_usd"
            onChange={(e) => {
              setFeatures({
                ...features,
                funding_total_usd: e?.target?.value,
              });
            }}
            min={0}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Number of members</label>
          <input
            className="input"
            type="number"
            name="number_of_members"
            onChange={(e) => {
              setFeatures({
                ...features,
                number_of_members: e?.target?.value,
              });
            }}
            min={0}
            step={1}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Number of founders</label>
          <input
            className="input"
            type="number"
            name="number_of_founders"
            onChange={(e) => {
              setFeatures({
                ...features,
                number_of_founders: e?.target?.value,
              });
            }}
            min={0}
            step={1}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Mean funding received</label>
          <input
            className="input"
            type="number"
            name="mean_funding"
            onChange={(e) => {
              setFeatures({
                ...features,
                mean_funding: e?.target?.value,
              });
            }}
            min={0}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Max funding received</label>
          <input
            className="input"
            onChange={(e) => {
              setFeatures({
                ...features,
                max_funding: e?.target?.value,
              });
            }}
            type="number"
            name="max_funding"
            min={0}
          ></input>
        </div>

        <div className="input-field">
          <label>Seed funding received</label>
          <input
            className="input"
            type="number"
            onChange={(e) => {
              setFeatures({
                ...features,
                seed: e?.target?.value,
              });
            }}
            name="seed"
            min={0}
          ></input>
        </div>
        <div className="input-field">
          <label>Number of invested VCs</label>
          <input
            className="input"
            type="number"
            name="number_of_invested_VCs"
            onChange={(e) => {
              setFeatures({
                ...features,
                number_of_invested_VCs: e?.target?.value,
              });
            }}
            min={0}
          ></input>
        </div>
        <div className="input-field">
          <label>Total investment from VCs</label>
          <input
            className="input"
            type="number"
            name="total_investment_from_VCs"
            onChange={(e) => {
              setFeatures({
                ...features,
                total_investment_from_VCs: e?.target?.value,
              });
            }}
            min={0}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Founding year</label>
          <input
            className="input"
            type="number"
            name="year"
            min={1500}
            onChange={(e) => {
              setFeatures({
                ...features,
                year: e?.target?.value,
              });
            }}
            max={2023}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Founding month</label>
          <input
            className="input"
            type="number"
            name="month"
            onChange={(e) => {
              setFeatures({
                ...features,
                month: e?.target?.value,
              });
            }}
            min={1}
            max={12}
          ></input>
        </div>
        <div className="input-field">
          <label className="required">Founding day</label>
          <input
            className="input"
            type="number"
            onChange={(e) => {
              setFeatures({
                ...features,
                day: e?.target?.value,
              });
            }}
            name="day"
            min={1}
            max={31}
          ></input>
        </div>
      </form>
      <br />

      <div className="form-btn">
        <input
          className="submit-btn"
          value="Submit"
          type="submit"
          onClick={() => sendChanges()}
        />
      </div>
    </div>
  );
};

export default Valuation;
