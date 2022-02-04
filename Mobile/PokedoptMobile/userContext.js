import React, {createContext, useState} from 'react';

const defaultValue = {
  example: 'example',
  mode:"DRIVING"
};
export const UserContext = createContext(defaultValue);
export const UserContextProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(defaultValue);
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      {children}
    </UserContext.Provider>
  );
};
