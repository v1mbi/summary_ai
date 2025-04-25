import React, { useState, useRef } from "react";
import Responsedisplay from "./responsedisplay";
import Fileupload from "./fileupload";
import { fetch_Response } from "../functions/ai_connect_api";

function Display() {
  const [text, setText] = useState("");
  const [doc, setDoc] = useState("");
  const search = useRef("");

  function handleSubmit() {
    console.log("loading");
    fetch_Response(search.current + "based on following data: " + doc, setText);
    console.log("done");
    document.getElementById("bottom").scrollIntoView({ behavior: "smooth" });
  }

  function handleSummary() {
    search.current = "summarize"
    console.log("loading");
    fetch_Response(search.current + "based on following data: " + doc, setText);
    console.log("done");
  }
  
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div
          id="scrollContainer"
          className="flex flex-col bg-white shadow-md rounded-md p-6 justify-center items-center scroll-smooth"
        >
          <h2 className="text-2xl font-semibold mb-1 text-black justify-center ">
            Summary AI
          </h2>
          <h4 className="text-xs text-slate-600">
            answers any questions about doc, txt, pdf and excel files
          </h4>
          <div className="sticky top-5 flex flex-row m-10 bg-slate-100 p-3 rounded">
            <Fileupload setText={setDoc} />{" "}
            <button
              class="btn btn-soft  ml-2 text-white bg-blue-500 border-none hover:bg-blue-700 "
              onClick={handleSummary}
            >
              Summarize
            </button>
          </div>

          <Responsedisplay text={text} speed={25} search={search.current} />
          <br />

          {/* input area */}
          <div className="flex flex-col justify-center items-center sticky bottom-3 bg-slate-400 p-3 rounded-2xl w-3/4">
            <label for="Search" className="w-full">
              <div className="flex h-auto flex-row m-auto justify-center items-center text-black ">
                <input
                  type="text"
                  id="Search"
                  placeholder="Search"
                  onChange={(e) => (search.current = e.target.value)}
                  class="mt-0.5 w-full rounded h-3 border-gray-300 pe-10 shadow-sm sm:text-sm bg-slate-500 p-5 text-black placeholder:text-gray-700 font-medium focus:outline-none focus:border-none focus:ring-0 mr-3"
                />

                <span class=" inset-y-0 right-2 grid place-content-center bg-orange-600 w-10 h-10 rounded-xl">
                  <button
                    type="button"
                    aria-label="Submit"
                    onClick={handleSubmit}
                    class="rounded-full p-1.5 text-white transition-colors hover:text-orange-400 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 m-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </label>
          </div>
          {/* input area */}
        </div>
        <h1 id="bottom"></h1>
      </main>
    </div>
  );
}

export default Display;
