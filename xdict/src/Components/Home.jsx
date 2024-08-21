import { useEffect, useState } from "react";

export default function Dictionary() {
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");

  const DictData = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  useEffect(()=>{
    
  })

  const Searchdict = (SearchData) => {
    const response = DictData.find(
      (item) => SearchData.toLowerCase() === item.word.toLocaleLowerCase()
    );

    if (response != undefined) {
      setReply(response.meaning);
    } else {
      setReply("Word not found in the dictionary.");
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(text);
    Searchdict(text);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Search for a word..." onChange={(e) => setText(e.target.value)} />
        {/* <input type='text' onChange={(e) => setText(e.target.value)} /> */}

        <button type="submit">Search</button>
      </form>
      {reply && <>Definition:{reply}</>}
    </div>
  );
}
