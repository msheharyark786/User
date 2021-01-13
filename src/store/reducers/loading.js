import {LOADING} from '../actions/meals';
import {useEffect} from 'react';
const initialState={
  
    isLoading:false,
    
};



const loading = (state = initialState, action) => {
    switch (action.type) {
      case LOADING:
          const current_status=action.cur_status;
        if(current_status===false){
            state.isLoading=true;
        }
        else {
            state.isLoading=false;
        }
       
          
      default:
        return state;
    }
  };

export default loading;