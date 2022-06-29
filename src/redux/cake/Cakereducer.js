import BUY_CAKE  from "./Caketype"

const initstate={
    noofcakes:10
}
const Cakereducer = (state=initstate,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noofcakes:state.noofcakes-action.payload
        }
        default:
            return state
    }
  
}

export default Cakereducer