import React from "react";
import Card from "components/card";

function AllData() {
  const [show, setShow] = React.useState(true);

  return (
    <Card
      textcolor="black"
      header="All Data"
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

export default AllData;
