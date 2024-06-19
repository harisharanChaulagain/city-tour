import React from "react";

export default function Page() {
  return (
    <main>
      <section className="bg-gray-300 rounded-2xl flex flex-col gap-4 p-8 mb-10">
        <h1 className="text-[#1D1D1B] font-bold text-5xl pt-10">Contact us</h1>
        <p>Feel free to contact us or leave us a message.</p>
      </section>
      <section>
        <div></div>
      </section>
      <section className="px-4 md:px-8 flex flex-col gap-4">
        <h1 className="flex items-center justify-center">Get in touch.</h1>
        <h2 className="flex items-center justify-center">
          Leave us a message!
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 ">
            <div className="w-full">
              <input type="text" placeholder="Name" className="w-full" />
            </div>
            <div className="w-full">
              <input type="email" placeholder="Email" className="w-full" />
            </div>
          </div>
          <textarea placeholder="Message" cols={30} rows={20}></textarea>
          <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-[#1D1D1B] hover:bg-[#1D1D1B]/90 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto">
            Send message
          </button>
        </div>
      </section>
    </main>
  );
}
