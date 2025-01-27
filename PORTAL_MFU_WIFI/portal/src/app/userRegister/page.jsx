import React from "react";

function Register() {
  return (
    <main className="flex items-center  " id="main">
      <div className="mx-auto">
        <h1 className="text-center text-4xl mb-8">New User</h1>
        <div className="h-auto w-full ">
          <form className="bg-white border-solid border shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Thai National ID Card"
              >
                Thai National ID Card
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Thai National ID Card"
                type="number"
                placeholder="Thai National ID Card"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                id="register"
                class=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
