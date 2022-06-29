import { combineReducers } from "redux";

import Cakereducer from "./cake/Cakereducer";

import icereducer from "./icecream/icereducer";

import userreducer from './user/userreducer'

const root=combineReducers({
    cake:Cakereducer,
    ice:icereducer,
    usr:userreducer
})


export default root