import React from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { FaUser, FaHome } from 'react-icons/fa';

export default function Table() {
  return (
    <div className=" flex items-center justify-center mt-10">
        <div>
            <div> <FaArrowLeft /></div>
      <div className="h-[400px] w-[1000px] bg-gradient-to-r from-green-400 to-green-400 via-white">
        <div className="flex items-center justify-center mt-4">
          <h1 className="text-2xl font-serif">Special Pickup Requests</h1>
        </div>
        <div className="mt-10">
          <table className="w-full border border-black divide-y divide-black shadow-md">
            <thead className="bg-none divide-x divide-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs bg-black text-white font-medium  uppercase">
                  selcted bln
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium   bg-black text-white  uppercase">
                  Estimate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium  bg-black text-white  uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-none divide-x divide-y divide-black">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">sadfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">ddfdfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">dfdfdff</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="hover:underline cursor-pointer ">
                    Download PDF
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-5">
                        <button className="rounded-xl w-28 h-8 bg-blue-700 text-white">new one</button>
                        <button className="rounded-xl w-28 h-8 bg-red-600 text-white">new one</button>
                    </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">sadfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">ddfdfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">dfdfdff</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="hover:underline cursor-pointer ">
                    Download PDF
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-5">
                        <button className="rounded-xl w-28 h-8 bg-blue-700 text-white">new one</button>
                        <button className="rounded-xl w-28 h-8 bg-red-600 text-white">new one</button>
                    </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">sadfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">ddfdfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">dfdfdff</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="hover:underline cursor-pointer ">
                    Download PDF
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-5">
                        <button className="rounded-xl w-28 h-8 bg-blue-700 text-white">new one</button>
                        <button className="rounded-xl w-28 h-8 bg-red-600 text-white">new one</button>
                    </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">sadfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">ddfdfdf</td>
                <td className="px-6 py-4 whitespace-nowrap">dfdfdff</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="hover:underline cursor-pointer ">
                    Download PDF
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-5">
                        <button className="rounded-xl w-28 h-8 bg-blue-700 text-white">new one</button>
                        <button className="rounded-xl w-28 h-8 bg-red-600 text-white">new one</button>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-4 mt-4 text-2xl">
      <FaUser /> 
      <FaHome />
      </div>
      </div>
    </div>
  );
}
