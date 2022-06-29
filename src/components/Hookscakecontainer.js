import {useSelector , useDispatch} from 'react-redux'

import Cakeaction from '../redux/cake/Cakeaction'


function Hookscakecontainer() {
    const noofcakes=useSelector(state=>state.cake.noofcakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of cakes - {noofcakes}</h2>
      <button onClick={()=>dispatch(Cakeaction())}>buy a cake</button>
    </div>
  )
}

export default Hookscakecontainer