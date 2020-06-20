import React, { component } from "react";

const DownIcon = (props) => {
  return (
    <div>
      <image>
      
      </image>
      <img
        src={process.env.PUBLIC_URL+props.icon}
        style={{
          maxWidth: "30px",
        }}
      />
    </div>
  );
};

export default DownIcon;
