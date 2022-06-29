import Cakeaction from '../redux/cake/Cakeaction'

import { connect } from 'react-redux'
const Cake = (props) => {
  return (
    <div>
        <h2>Number of cakes - {props.noofcakes}</h2>
      <button onClick={props.buycake}>buy a cake</button>
    </div>
  )
}

const mapStateToProps=state=>( {
    noofcakes:state.cake.noofcakes
  })


const mapDispatchToProps=Dispatch=>( {
    buycake:()=>Dispatch(Cakeaction())
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Cake)