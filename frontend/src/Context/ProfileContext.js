import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
  const [userProfile, setUserProfile] = useState({
    email: "",
    f_name: "",
    l_name: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
  });

  return (
    <ProfileContext.Provider value={[userProfile, setUserProfile]}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
