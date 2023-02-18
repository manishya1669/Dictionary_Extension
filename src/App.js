import "./App.css";
import { useState } from "react";
import axios from "axios";
import ListDetails from "./ListDetails";
function App() {
  const [keyword, setKeyWord] = useState("");
  let [result, setResult] = useState(null);
  let valueOfStatus = 0;
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    const res = await axios.get(`${api}/${keyword}`);
    console.log(res.status);
    if (res.status !== 200) {
      return <p>Word Not found!</p>;
    }
    try {
      //console.log(res.status);
      setResult(res.data[0]);
    } catch (e) {
      console.log(res.status);
      //  if(res.status!==200){
      //     return <div>Word Not found!</div>
      //   }
      // console.log({ e });
    }
  }
  const handleClear = function () {
    setKeyWord("");
    setResult(null);
    console.log(keyword);
  };
  return (
    <div className="mx-auto w-[100%]  h-screen md:px-10 px-5">
      <div className="flex flex-col  pt-10 sm:w-[50%] p-10 pl-0 ">
        <input
          value={keyword}
          className=" px-3 pt-2  pb-2 border-2 w-30 sm:w-[50%]  h-15  border-gray-600"
          onChange={(e) => setKeyWord(e.target.value)}
          type="text"
        />
        <div className="px-2 flex gap-1 w-[50%] pt-4 justify-center flex-row">
          <button
            className="  px-5 text-white font-bold  border-gray-700 hover:bg-gray-400 bg-gray-600 rounded-md  "
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            disabled={!result}
            className=" sm:px-5 p-6  bg-gray-600 hover:bg-gray-400 text-white  font-bold py-2 border-b-4 border-gray-700 hover:border-gray-400 rounded-md"
            type="submit"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="  w-full h-full">
       
        {result === null ? (
          <div>
            <p>No data is fetched</p>{" "}
          </div>
        ) : valueOfStatus === 404 ? (
          <p>No word Found!</p>
        ) : (
          <ListDetails  className="w-full h-[90%] " {...{ result }} />
        )}
      </div>
    </div>
  );
}

export default App;
