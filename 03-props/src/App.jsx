import React from "react";
import Card from "./components/Card";

const App = () => {
  const animeCharacters = [
    {
      name: "Naruto Uzumaki",
      description:
        "A ninja from the Hidden Leaf Village who dreams of becoming Hokage.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFeeVAgv4wNM-qmHT_65pwxBKZaNmNn_TXw&s",
    },
    {
      name: "Monkey D. Luffy",
      description:
        "A pirate with rubber powers who wants to become the Pirate King.",
      img: "https://comicbook.com/wp-content/uploads/sites/4/2025/01/One-Piece-Anime-Episodes-Hiatus-Watch.jpg",
    },
    {
      name: "Goku",
      description:
        "A Saiyan warrior who constantly pushes his limits to protect Earth.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgTPKG0TQx7ytX-0XorHeNaHEZJPBUvkgaQ&s",
    },
    {
      name: "Levi Ackerman",
      description:
        "Humanity’s strongest soldier, known for his incredible combat skills.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmGQz_hGfbiYo3KJY6Q6KDwlhG44Aqv7haQ&s",
    },
    {
      name: "Light Yagami",
      description:
        "A genius student who finds the Death Note and seeks to reshape the world.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM8FJb1niaeuD9Vx2XpggEeMxBpAkYQBwAA&s",
    },
  ];
  // console.log(animeCharacters)
  return (
    <div className="flex flex-wrap bg-gray-500 front-white mh-[vh]">
      {/* <Card user="sanji" discription = "anime demon slay"></Card> */}
      {animeCharacters.map((data,idx) => {
        console.log(idx);
        
        return <div key={idx}
        ><Card name={data.name} description={data.description} img ={data.img}></Card></div>;
      })}
    </div>
  );
};

export default App;
