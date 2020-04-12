import React from "react";
import { MdSend } from "react-icons/md";
const Expenseform = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge" className="expense">
            charge
          </label>
          <input
            type="text"
            className="form-control"
            id="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" >
            amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className="btn" type="submit">
           {edit?'Edit':'submit'}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default Expenseform;
