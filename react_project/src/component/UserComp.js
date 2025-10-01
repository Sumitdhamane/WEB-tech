import React from "react";

const UserComp = ({ name }) => {
  // const{user} = props;
  if (name === "Om") {
    throw new Error("Not a User");
  }
  return (
    <div>
      <p>
        User is: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default UserComp;
