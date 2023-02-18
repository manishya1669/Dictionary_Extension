function ListDetails({ result }) {
  console.log({ result });
  const { word, phonetics, meanings } = result;

  function palyAudio() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="bg-gray-600 h-screen w-full p-10  rounded-md  ">
        <div className="bg-white rounded-lg  pt-2">
          <h1 className="font-bold  text-2x px-1 ">Word</h1>
          <div className="pt-2 flex gap-7  p-4">
            <p>{word}</p>
            <p>{meanings[0].partOfSpeech}</p>
            <p>{phonetics[0].text}</p>
            <p onClick={palyAudio}>{phonetics[0].audio===''?<div className="px-1 flex"><p>🔇</p> <p>PlayAudio</p></div>:<div className="flex"><p>🔊</p><p>  PlayAudio </p></div>} </p>
          </div>
        </div>
        <div className="bg-white rounded-lg mt-2  pt-2" >
          <h1  className="font-bold px-1 text-2x" >Meaning</h1>
          <p className="p-3">{meanings[0].definitions[0].definition}</p>
        </div>
        <div className="bg-white  md:h-20 rounded-lg mt-2 pt-2">
          <h1 className="font-bold  text-2x px-1  ">Synonyms</h1>
          <p className="h-[full">
            {meanings[0].synonyms.length === 0 ? (
              <p className="p-3">No Synonyms</p>
            ) : (
              meanings[0].synonyms.map((item, index) => {
                return <p  key={index}>{}</p>;
              })
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default ListDetails;

