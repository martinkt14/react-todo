import React from "react";
import moment from "moment";

const header = () => {
  const todaysDate = moment().format("LL");

  return (
    <div>
      <h1>{todaysDate}</h1>
    </div>
  );
};

export default header;
