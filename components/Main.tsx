
import React from 'react';

const Main = () => {
  return (
    <div>
      <main className="">
        <div className="relative bg-[#080D28] h-[940px] md:h-[960px] sm:h-[1280px]">
          <div className="lg:float-right  flex justify-center lg:block">
            <img className="w-[360px] ml-[0px] my-0 2xl:w-auto mt-0 lg:w-[480px] mt-[140px]" src="Dekstop.svg" alt="" />
          </div>
          <div className="flex-col pt-10 lg:pt-[220px] pl-4 lg:pl-[120px] text-center lg:text-left">
            <h1 className="text-[40px]  md:text-[60px] font-extrabold text-white">
              Multipurpose
              <br /> Saas Website for <br /> Increasing Revenue
            </h1>
            <p className="text-gray-500 pt-4 text-[20px] lg:pt-6">
              Brace yourself for an extraordinary journey into the future of technology.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mt-6 lg:mt-[60px] flex flex-col items-center lg:flex-row lg:items-center ml-4 lg:ml-[120px] space-y-4 lg:space-y-0 lg:space-x-4"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              className="w-full lg:w-[340px] md:w-[390px] p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 caret-blue-600"
            />
            <button className="bg-[#3858D6] text-white rounded-2xl px-[40px] py-4 hover:bg-blue-700">
              GET STARTED
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Main;
