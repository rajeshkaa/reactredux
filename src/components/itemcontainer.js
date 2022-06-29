import { connect } from 'react-redux'

import Cakeaction from '../redux/cake/Cakeaction'

import iceaction from '../redux/icecream/iceaction'

function Itemcontainer(props) {
  return (
    <div>
        <h2>item -{props.item} </h2>

        <button onClick={props.dispatchitem}>buy a cake</button>

    </div>
  )
}

const mapStateToProps=(state,ownprops)=>{
    const propitem=ownprops.cake?state.cake.noofcakes:state.ice.noofices
    return{
item:propitem
    }
}

const mapDispatchToProps=(Dispatch,ownprops)=>{
    const Dispatchfun=ownprops.cake?()=>Dispatch(Cakeaction()):()=>Dispatch(iceaction())
    return{
dispatchitem:Dispatchfun
    }
}

export default connect(null , mapDispatchToProps)(Itemcontainer)