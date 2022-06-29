import {FETCH_USERS_REQ,FETCH_USERS_SUC,FETCH_USERS_FAI} from './usertype'


const inits={
    loading:false,
    data:[],
    error:''
}

  const userreducer=(state=inits,action)=>{
    switch(action.type){
        case FETCH_USERS_REQ:return{
            loading:true,
    data:[],
    error:''
        }
        case FETCH_USERS_SUC:return{
            error:'',
            data:action.payload,
            loading:false
        }
        case FETCH_USERS_FAI:return{
            error:action.payload,
            data:'',
            loading:false
        }
        default:return state
    }
}

export default userreducer