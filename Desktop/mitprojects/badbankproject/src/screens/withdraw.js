import React from "react";
import Card from "components/card";

function Withdraw() {
  const [show, setShow] = React.useState(true);

  return (
    <Card
      textcolor="black"
      header="Withdraw"
      body={
        show ? (
          <></>
        ) : (
          <>
            <h5>Login Successful!</h5>
          </>
        )
      }
    />
  );
}

export default Withdraw;
