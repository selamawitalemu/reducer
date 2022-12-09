import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Age, name, Lname, gender, Profession } from "./store/action/action";
//import { gender } from "./store/reducer/reducer";
import './App.css';

function App() {
  const firstName  = useSelector((state) =>state.firstName);
  const lastName  = useSelector((state) => state.lastName);
  const Gender  = useSelector((state) => state.Gender);
  const age  = useSelector((state) => state.age);
  const profession  = useSelector((state) => state.profession);

  const dispatch = useDispatch();

  const [value , setValue] = useState()
  const [lValue, setLValue] = useState()
  const [gValue, setMValue] = useState()
  const [aValue, setLAValue] = useState()
  const [pValue, setPValue] = useState()
  return (
    
    <div><div className="container">
      <div className="input">
        <h1>redux reducer</h1>
    <input value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => dispatch(name(value))}>Dispatch</button>
    <p>FirstName: {firstName}</p>

    <input value={lValue} onChange={(e) => setLValue(e.target.value)}/>
    <button onClick={() => dispatch(Lname(lValue))}>Dispatch</button>
    <p>LastName: {lastName}</p>

    <input value={gValue} onChange={(e) => setMValue(e.target.value)}/>
    <button onClick={() => dispatch(gender(gValue))}>Dispatch</button>
    <p>Gender: {Gender}</p>

    <input value={aValue} onChange={(e) => setLAValue(e.target.value)}/>
    <button onClick={() => dispatch(Age(aValue))}>Dispatch</button>
    <p>Age: {age}</p>

    <input value={pValue} onChange={(e) => setPValue(e.target.value)}/>
    <button onClick={() => dispatch(Profession(pValue))}>Dispatch</button>
    <p>Profession: {profession}</p>
    </div>
    </div>
    </div>
  );
}

export default App;
