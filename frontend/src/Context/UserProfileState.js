import React, { useState } from "react";
import UserProfileContext from "./userProfileContext";

const UserProfileState = (props) => {
  const name = {
    ravi: "bangdu",
  };

  return (
    <UserProfileContext.Provider value={name}>
      {props.children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileState;
