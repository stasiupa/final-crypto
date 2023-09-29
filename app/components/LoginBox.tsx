import React from "react";

function LoginBox() {
  return (
    <div className="border border-green-800 p-1 text-center w-80 h-96 justify-center">
      <form action="">
        <div className="border border-black text-center flex flex-col">
          Enter Your email:
          <div>
            <input
              className="border border-black m-2 w-52  justify-center"
              type="text"
              placeholder="Enter Your email"
            />
          </div>
          Enter Your password:
          <div>
            <input
              className="border border-black m-2 w-52  justify-center"
              type="text"
              placeholder="Enter Your password"
            />
          </div>
        </div>
        <button className="border border-black m-2">Login</button>
      </form>
    </div>
  );
}

export default LoginBox;
