import React from 'react'

const Tables = () => {
  return (
    <div className="bg-white border border-gray-300 p-6 rounded-xl border  flex flex-col space-y-6">
      <div className="md:flex md:flex-row flex-col justify-between items-center">
        <h2 className="text-black text-xl font-bold">Transactions to review</h2>
        <a href="#" className="text-xl px-4 py-2  text-yellow-400 underline">
          View All
        </a>
      </div>
      <div className="md:flex md:flex-row flex-col justify-between items-center border-b-2">
        <p className="text-xl text-gray-500">Sept 09, 2020</p>
        <p className="text-xl text-gray-500 mb-2">+$87.01</p>
      </div>
      <div className="divide-y-2 divide-gray-200 overflow-x-auto w-full">
        <div className="py-3 flex md:flex-row flex-col justify-between text-sm text-gray-500 font-semibold">
          <span className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="px-4 flex-col text-black">
              Spotify <p className="text-gray-500">#Music</p>
            </span>
          </span>
          <p className="md:text-base text-gray-800 flex items-center gap-2">
            -$9.99
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 bg-gray-200 rounded-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
        <div className="py-3 flex md:flex-row flex-col justify-between text-sm text-gray-500 font-semibold">
          <span className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="px-4 flex-col text-black">
              Spotify <p className="text-gray-500">#Music</p>
            </span>
          </span>
          <p className="md:text-base text-gray-800 flex items-center gap-2">
            -$9.99
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 bg-gray-200 rounded-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
        <div className="py-3 flex md:flex-row flex-col justify-between text-sm text-gray-500 font-semibold">
          <span className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="px-4 flex-col text-black">
              Spotify <p className="text-gray-500">#Music</p>
            </span>
          </span>
          <p className="md:text-base text-gray-800 flex items-center gap-2">
            -$9.99
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 bg-gray-200 rounded-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
        <div className="py-3 flex md:flex-row flex-col justify-between text-sm text-gray-500 font-semibold">
          <span className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="px-4 flex-col text-black">
              Spotify <p className="text-gray-500">#Music</p>
            </span>
          </span>
          <p className="md:text-base text-gray-800 flex items-center gap-2">
            -$9.99
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 bg-gray-200 rounded-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
        <div>
          <a
            href="#"
            className="flex items-center justify-center mt-1 text-xl px-4 py-2 text-yellow-400 underline">
            View All Transactions
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tables
