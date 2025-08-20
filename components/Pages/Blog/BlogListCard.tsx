import React from "react";

export default function BlogListCard() {
  return (
    <>
      <div className="flex flex-col w-full mx-auto mt-10 space-y-4 px-4 py-4">
        <p>Writes about my thoughts, ideas, and experiences.</p>
        <div className="flex flex-col w-full mx-auto mt-5 space-x-4 space-y-4">
          <div className="flex  space-x-4">
            <div className="flex flex-col space-x-4 space-y-2">
              <p className="">Authentication vs Authorization</p>
              <p className="text-gray-500">
                <span id="year">2025</span> - <span id="duration">3 min</span> |{" "}
                <span id="tag">Security</span>
              </p>
            </div>
          </div>
          <div className="flex-grow">
            <p className="text-gray-500">
              Authentication is the process of verifying the identity of a user,
              while authorization determines what resources a user can access
              after authentication.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 ">
              <a href="#" className=" hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mx-auto mt-5 space-x-4 space-y-4">
          <div className="flex  space-x-4">
            <div className="flex flex-col space-x-4 space-y-2">
              <p className="">Is Financial freedom Myth or True ?</p>
              <p className="text-gray-500">
                <span id="year">2025</span> - <span id="duration">3 min</span> |{" "}
                <span id="tag">Financial</span>
              </p>
            </div>
          </div>
          <div className="flex-grow">
            <p className="text-gray-500">
              Financial freedom is the state of having sufficient personal
              wealth to live without having to work actively for basic
              necessities. It is often considered a myth by some, but many
              believe it is achievable through smart financial planning and
              investment.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 ">
              <a href="#" className=" hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
