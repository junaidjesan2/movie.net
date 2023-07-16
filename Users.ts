import { userData } from './userData.js'
type User={
    id:Number;
    fName:String;
    email:String;
}
let users:User[]=[]

export const getUsrs=()=>users
export const addUsers=(user:User)=>{
    userData.push(user)
}