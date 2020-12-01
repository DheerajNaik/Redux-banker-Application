import React from "react";
import { useSelector } from "react-redux";
function AccountStatus() {
  const switchAcc = useSelector((state) => state.banking.isSavingsAccount);
  console.log(switchAcc);

  return (
    <div>
      <h1>{switchAcc ? "Current account" : "Savings account"}</h1>
    </div>
  );
}

export default AccountStatus;
