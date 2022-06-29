import iceaction from '../redux/icecream/iceaction'

import { connect } from 'react-redux'
const Ice = (props) => {
  return (
    <div>
        <h2>Number of ices - {props.noofices}</h2>
      <button onClick={props.buyice}>buy a ice</button>
    </div>
  )
}

const mapStateToProps=state=>( {
    noofices:state.ice.noofices
  })


const mapDispatchToProps=Dispatch=>( {
    buyice:()=>Dispatch(iceaction())
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Ice)