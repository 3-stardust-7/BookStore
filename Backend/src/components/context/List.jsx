import React, { useState, createContext } from "react";
export const ListContext = createContext();
const List = ({ children }) => {
  const [List, setList] = useState([
    {
      id: 1,
      name: "Thriller Novel",
      title: "Mozart Conspiracy",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-mozart-illustration_52683-151625.jpg?t=st=1727280117~exp=1727283717~hmac=63ff04df446206559ef8b9c663969f38a7baf852d585d69499517e9876e63a4a&w=740",
    },

    {
      id: 2,
      name: "Thriller Novel",
      title: "The Alchemist's Secret",
      price: 550,
      category: "paid",
      image:
        "https://img.freepik.com/premium-vector/mason-sign-occult-esoteric-pentagram-symbol_8071-18929.jpg?w=740",
    },

    {
      id: 3,
      name: "Romance Novel",
      title: "Shatter Me",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/premium-vector/shards-broken-glass-abstract-explosion_202284-86.jpg?w=740",
    },

    {
      id: 4,
      name: "Mystery Novel",
      title: "Sherlock Holmes",
      price: 450,
      category: "paid",
      image:
        "https://img.freepik.com/free-vector/mysterious-gangster-character_23-2148473800.jpg?t=st=1727281002~exp=1727284602~hmac=3186aa90a96316329445618e9a297bdca405c34b13b1e369317b48ceddcda00b&w=740",
    },

    {
      id: 5,
      name: "Mystery Novel",
      title: "The Da Vinci Code",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/premium-photo/louvre-museums-glass-pyramid-entrance-twilight_1314467-127565.jpg?w=740",
    },

    {
      id: 6,
      name: "Fantasy Novel",
      title: "Harry Potter:Series",
      price: 0,
      category: "Free",
      image:
        "https://img.freepik.com/premium-photo/scene-from-book-book-by-harry-potter_1086760-308890.jpg?w=740",
    },
  ]);
  return (
    <div>
      <ListContext.Provider value={[List, setList]}>
        {children}
      </ListContext.Provider>
    </div>
  );
};

export default List;
