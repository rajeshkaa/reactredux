import Cakeaction from '../redux/cake/Cakeaction'
import { useState } from 'react'

import { connect } from 'react-redux'
const NewCake = (props) => {
    const [number,setNum]=useState(1)
  return (
    <div>
        <h2>Number of cakes - {props.noofcakes}</h2>
        <input onChange={e=>setNum(e.target.value)} value={number}/>
      <button onClick={()=>props.buycake(number)}>buy a {number} cake</button>
    </div>
  )
}

const mapStateToProps=state=>( {
    noofcakes:state.cake.noofcakes
  })


const mapDispatchToProps=Dispatch=>( {
    buycake:number=>Dispatch(Cakeaction(number))
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(NewCake)