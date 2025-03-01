import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser, FaHome } from "react-icons/fa";
import Bin from "./bin.png";

export default function Table() {
  return (
    <div className=" flex items-center justify-center mt-10">
      <div>
        <div>
          {" "}
          <FaArrowLeft />
        </div>
        <div className="h-[400px] w-[1000px] bg-gradient-to-r from-green-400 to-green-400 via-white">
          <div className="flex items-center justify-center mt-4"></div>
          <h1 className="text-2xl font-serif ml-8 mt-4">
            Select the garbage type
          </h1>
          <div className="flex justify-center items-center">
            <div className="mt-10   h-[220px] w-[800px]  bg-slate-50 ">
              <div className="flex gap-5  justify-center items-center">
                <div>
                  <img
                    className="w-10 h-10 mt-4  bg-white ml-7"
                    src={Bin}
                    alt=""
                  />
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    newdf
                  </button>
                </div>
                <div>
                  <img
                    className="w-10 h-10 mt-4  bg-white ml-7"
                    src={Bin}
                    alt=""
                  />
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    newdf
                  </button>
                </div>
                <div>
                  <img
                    className="w-10 h-10 mt-4  bg-white ml-7"
                    src={Bin}
                    alt=""
                  />
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    newdf
                  </button>
                </div>
                <div>
                  <img
                    className="w-10 h-10 mt-4  bg-white ml-7"
                    src={Bin}
                    alt=""
                  />
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    newdf
                  </button>
                </div>
                <div>
                  <img
                    className="w-10 h-10 mt-4  bg-white ml-7"
                    src={Bin}
                    alt=""
                  />
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    newdf
                  </button>
                </div>
              </div>
              <h1 className="text-sm font-serif  ml-20 mt-4">Estimated size</h1>
              <div className="flex gap-5  justify-center items-center">
                <div>
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    X
                  </button>
                </div>
                <div>
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    XL
                  </button>
                </div>
                <div>
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    L
                  </button>
                </div>
                <div>
                  <button className="bg-slate-200 w-20 h-8 mt-3 rounded-xl ml-2">
                    M
                  </button>
                </div>
              </div>

              <div></div>
            </div>
          </div>
          <button className="bg-slate-200 w-32 h-8 mt-8 rounded-xl  ml-[800px]">
            submite approval
          </button>
        </div>
        <div className="flex gap-4 mt-4 text-2xl">
          <FaUser />
          <FaHome />
        </div>
      </div>
    </div>
  );
}
