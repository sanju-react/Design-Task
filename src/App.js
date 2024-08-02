import React from "react";

const App = () => {
  return (
    <>
      <div className="bg-lime-200 h-screen flex justify-center  ">
        <div className=" flex w-[75%] h-screen ">
          {/* left side */}
          <div className="p-14 w-[40%] h-full bg-emerald-900 rounded-s-3xl ">
            <div className="text-5xl  font-semibold  text-emerald-500">
              better
              <span className="block">market</span>
            </div>
            {/* issue hai  */}
            <div className="text-4xl font-semibold text-orange-200 flex items-end mt-96">
              Say hello to global food and beverage producers and suppliers, all
              in one place
            </div>
          </div>
          {/* right side */}
          <div className="bg-white h-full w-[60%] rounded-e-3xl">
            <div className="p-14 m-2 text-4xl font-semibold">
              <div>Let’s get started</div>
              <span>with a few simple steps</span>
            </div>

            <form className="p-14 text-lg  font-semibold w-[80%]">
              <div>
                <label id="name" className="mb-4">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  className="w-full mb-4 border-b-2 border-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label id="email" className="mb-3">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full mb-4 border-b-2 border-gray-500 focus:outline-none"
                />
              </div>
              <div>
                <labe id="password" className="mb-3">
                  Password
                </labe>
                <input
                  name="password"
                  type="password"
                  className="w-full mb-2 border-b-2 border-gray-500 focus:outline-none"
                />
              </div>

              <div className="w-full mt-5 cursor-pointer h-20 bg-emerald-400 rounded-2xl flex items-center justify-center">
                <button className="px-4 py-2 ">
                  <div className="text-white font-bold text-xl">Sign up</div>
                </button>
              </div>
            </form>
            <div className="p-14">
              <div className="font-semibold text-sm text-slate-400">
                By signing up, you agree to our {" "}
                <span className="cursor-pointer underline">
                  Terms of Service.
                </span>
                <div>
                  Already have an account?
                  <span className="underline underline-green cursor-pointer text-green-600">
                    Log in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
