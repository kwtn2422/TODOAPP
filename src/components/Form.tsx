import React from "react";

const Form = () => {
  return (
    <div className="flex pt-2 w-full">
      <div className="flex flex-col basis-5/6">
        <div className="flex w-full">
          <div className="flex flex-col basis-1/6 ">
            <p className="  w-full text-right">title :</p>
            <p className=" w-full text-right">desc :</p>
          </div>
          <div className="flex flex-col basis-5/6">
            <input className="shadow-md border border-gray-200 rounded "></input>
            <input className="shadow-md border border-gray-200 rounded "></input>
          </div>
        </div>
      </div>
      <button className="rounded bg-violet-300 basis-1/6 hover:bg-opacity-70">
        +
      </button>
    </div>
  );
};

export default Form;
