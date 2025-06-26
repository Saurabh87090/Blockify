import React from 'react';

const Features = () => {
  return (
    <div>
      <div>
        
        {/* Brand Images */}
        <div className="  grid grid-cols-2 gap-8 p-4 sm:grid-cols-3 lg:grid-cols-6 lg:mt-[60px]">
          <img className="mx-auto mt-4" src="shopify.svg" alt="shopify" />
          <img className="mx-auto mt-8" src="amazon.svg" alt="amazon" />
          <img className="mx-auto " src="Alibaba.svg" alt="alibaba" />
          <img className="mx-auto mt-6" src="ebay.svg" alt="ebay" />
          <img className="mx-auto mt-5" src="snapdeal.svg" alt="snapdeal" />
          <img className="mx-auto mt-5" src="walmart.svg" alt="walmart" />
        </div>

        {/* Main Content */}
        <div className="mt-10 sm:mt-[140px] mx-4 sm:mx-[120px]">
          <a
            href="#"
            title="Our features"
            className="items-center justify-center hidden px-9 py-2 text-base font-semibold text-[#1F5B3E] transition-all duration-200 bg-[#C5FFE3] border border-transparent rounded-md lg:inline-flex hover:bg-[#C5FFE3] focus:bg-[#C5FFE3]"
            role="button"
          >
            OUR FEATURES
          </a>
          <img
            className="mx-auto lg:float-right   max-w-[360px] lg:max-w-none"
            src="laptop.svg"
            alt="laptop"
          />
          <h1 className="text-[30px] sm:text-[50px] font-semibold my-5  lg:text-left">
            How our data will help your <br /> day to day business
          </h1>
          <p className="text-[#737373] text-[16px] sm:text-[20px]  lg:text-left">
            Brace yourself for an extraordinary journey into the <br /> future of technology.
          </p>

          <div className="flex  items-center lg:flex-row my-6">
            <img src="icon1.svg" alt="icon1" />
            <h1 className="text-[18px] lg:text-[20px] px-[20px] font-semibold  lg:text-left">
              Data Security
            </h1>
          </div>

          <hr className="bg-gray-600 my-5 w-[360px] lg:w-[750px]" />

          <p className="text-[#737373] text-[16px] sm:text-[20px]  lg:text-left">
            {"Gain valuable insights into your operations. Your brand is more than just a"} <br />
            {"logo; it's the essence of your business. We create compelling brand identities"} <br />
         {"that tell your unique story and resonate with your target audience."}
          </p>

          <div className="flex  items-center lg:flex-row lg:items-center my-8">
            <img src="icon.svg" alt="icon" />
            <h1 className="text-[18px] lg:text-[20px] px-[20px] font-semibold text-center lg:text-left">
              Analytics
            </h1>
          </div>

          <hr className="bg-gray-600 my-5 w-[360px] lg:w-[750px] " />

          <p className="text-[#737373] text-[16px] sm:text-[20px] my-5  lg:text-left">
            {"Gain valuable insights into your operations. Your brand is more than just a"} <br />
            {"logo; it's the essence of your business. We create compelling brand identities"} <br />
            {"that tell your unique story and resonate with your target audience."}
          </p>
          <hr className="bg-gray-600 my-5 w-[360px] lg:w-[750px]" />
        </div>
      </div>
    </div>
  );
}

export default Features;
