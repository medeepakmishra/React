import {  useCallback, useState , useEffect, useRef} from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(0);
  const [charAllowed, setCharAllowed] = useState(0);
  const [Password, setPassword] = useState("");
  // useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // copyPasswordToClip

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)

  },[Password])


  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div
        className="
    w-full max-w-2xl mx-auto shadow-md
    rounded-lg px-4 my-8
    text-orange-500 bg-gray-700
  "
      >
        <h1 className="text-4xl text-center font-bold text-white my-5">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full h-9 py-1 my-5 rounded-l-lg font-bold px-3 text-gray-700 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClip}
           className="bg-blue-700 h-9 mt-5 rounded-r-lg text-white font-bold w-20 hover:bg-blue-900 transition">
            {" "}
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 mb-5">
            {/* range input */}
            <input
              type="range"
              min={6}
              max={33}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>

          {/* num allowed  */}
          <div className=" flex-items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked= {numAllowed}
           id="numberInput"
           onChange={()=>{
            setNumAllowed((prev)=>!prev)
           }} 
           />
           <label htmlFor="numberInput">Number Allowed</label>
</div>
           {/*  char allowed */}
             <div className=" flex-items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={ charAllowed}
           id="charInput"
           onChange={()=>{
            setCharAllowed((prev)=>!prev)
           }}
           />
           <label htmlFor="charInput">Char Allowed</label>

        </div>
        </div>
      

      </div>
    </>
  );
}

export default App;
