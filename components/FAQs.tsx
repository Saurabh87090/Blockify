import React from 'react';

const FAQs = () => {
  return (
    <div>
      <section className="flex items-center justify-center py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <a
              href="#"
              title=""
              className="items-center justify-center px-9 py-2 text-base font-semibold text-[#1F5B3E] transition-all duration-200 bg-[#C5FFE3] border border-transparent rounded-md lg:inline-flex hover:bg-[#C5FFE3] focus:bg-[#C5FFE3]"
              role="button"
            >
              FAQs
            </a>
            <h2 className="text-2xl mt-6 font-bold leading-tight text-black sm:text-2xl lg:text-[40px]">
              Common question in your mind
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-[15px] sm:text-[15px] md:text-[20px] leading-relaxed text-gray-600">
              We show the frequently question that our ask
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer w-[350px] md:w-full hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="text-lg font-semibold text-black">
                  Who can use the Blockify Template?
                </span>
                <svg
                  className="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  Actually, everyone can use our template for their business purposes, from SaaS companies, software companies, company profiles, and you can use this template for your personal website or project that you’re working on right now. You can use it on your project easily by adjusting it to the subject of the project that you’re working on right now.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer w-[350px] md:w-full hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="text-lg font-semibold text-black">
                  How does Blockify help my business?
                </span>
                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p className='text-gray-500'>
                  Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer w-[350px] md:w-full hover:bg-gray-50">
              <div className="">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="text-lg font-semibold text-black">
                    How secure is our data on this platform?
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className='text-gray-500'>
                    Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer w-[350px] md:w-full hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="text-lg font-semibold text-black">
                How much many i need to pay to use this platform?
                </span>
                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p className='text-gray-500'>
                  Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='hidden lg:flex bg-[#C5FFE3] h-auto lg:h-[350px] w-[50px] md:w-[420px] ml-11 mx-5 lg:w-[1100px] rounded-3xl 2xl:ml-[380px] lg:ml-[90px] flex-col items-center justify-center p-4 lg:p-0'>
        <h1 className='text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-center lg:text-left'>
          Get started increasing your revenue
        </h1>
        <p className='text-[16px] sm:text-[18px] md:text-[20px] font-normal text-gray-500 text-center lg:text-left'>
          Join and integrate our app to increase the revenue and decrease your production cost
        </p>

        <form action="#" method="POST" className="mt-4 lg:mt-[60px] flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            className="w-full lg:w-[380px] p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-600 caret-blue-600 mb-4 lg:mb-0 lg:mr-4"
          />
          <button className="bg-[#3858D6] text-white rounded-2xl px-8 py-4 lg:px-[40px] lg:py-4 hover:bg-blue-700 w-full lg:w-auto">
            GET STARTED
          </button>
        </form>
      </div>
    </div>
  );
}

export default FAQs;
