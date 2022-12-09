import { combineReducers } from "redux";
import { Age, Fname, Lname, gender, Profession } from "./reducer";

export const reducers = combineReducers({
    firstName: Fname,
    lastName: Lname,
    Gender: gender,
    age: Age,
    profession: Profession,
})