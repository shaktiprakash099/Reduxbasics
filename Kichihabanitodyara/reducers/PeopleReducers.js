const initial_State = {
  DataArray:[],
};



export default function(state = initial_State ,action){
  switch(action.type){
    case "PEOPLE_ACTION":
    return {...state,DataArray:action.payload};
    console.log('*********Reducer************');
    console.log(action.payload);
    break;
  }
  return state;
}
