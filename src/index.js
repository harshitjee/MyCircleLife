import RootStack from './RootStack'
import React from  'react'
import { Provider } from 'react-redux'
import { store } from './redux';

export default  App =()=>{
    console.disableYellowBox = true;

return(
    <Provider store={store}>
    <RootStack/>
    </Provider>
);
}