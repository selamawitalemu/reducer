export const Fname = (state ='selam' ,action) => {
   switch(action.type){
    case "NAME": 
    return action.payload
    default:
        return state
   }
}
export const Lname = (state ='alemu' ,action) => {
   switch(action.type){
    case "LNAME": 
    return action.payload
    default:
        return state
   }
}
export const gender = (state ='female' ,action) => {
   switch(action.type){
    case "GNAME": 
    return action.payload
    default:
        return state
   }
}
export const Age = (state = 22 ,action) => {
   switch(action.type){
    case "AGE": 
    return action.payload
    default:
        return state
   }
}
export const Profession = (state ='Student' ,action) => {
   switch(action.type){
    case "PROFESSION": 
    return action.payload
    default:
        return state
   }
}