import React, {createContext, useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainContext = createContext();

const ProvidContext = ({ children }) => {

    const [auth, setAuth] = useState(null);
    const [changed, setChanged] = useState(null);

    useEffect( async () => {
        const jsonValue = await AsyncStorage.getItem('user')
        jsonValue != null ? JSON.parse(jsonValue) : null;
        return setAuth(jsonValue);
    }, [changed])
    

  return (
    <MainContext.Provider value={{
        auth,
        setChanged,
        setAuth
    }} >
      {children}
    </MainContext.Provider>
  )
}

export { ProvidContext, MainContext }