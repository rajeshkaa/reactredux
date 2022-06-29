import BUY_ICE  from "./icetype"

const initstate={
    noofices:20
}
const icereducer = (state=initstate,action) => {
    switch(action.type){
        case BUY_ICE: return {
            ...state,
            noofices:state.noofices-1
        }
        default:
            return state
    }
  
}

export default icereducer