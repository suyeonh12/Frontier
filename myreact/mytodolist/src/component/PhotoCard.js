import React from "react";

const PhotoCard = () => {
  let array = [
    {
      name: "아이유",
      url: "https://i.namu.wiki/i/TYxKQDnuwFOcxdSaPR-L81SPQGf5aPEz13tINJ-Z508LKNtGmRmkZTKKEN82SrIZAYoLL8WSbXGzv2PiLgpRSg.webp",
    },
    {
      name: "수지",
      url: "https://cdn.spotvnews.co.kr/news/photo/202503/737400_1174406_3117.jpg",
    },
    {
      name: "나연",
      url: "https://i.namu.wiki/i/iUxIEdcb0N1tQNliD3udMgd87ypfQEKXu1OjcBDNh-CTFHALh4ugS4JLEpzJTZ9pUN1gJ79C_ROjHLDgnEL07w.webp",
    },
    {
      name: "원영",
      url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRsb5Y0UDbJaz7xNYu1f-70BWJ5NGZt3KnyYeimRz_m-5wEKh6mh9ychBgy-EhCfYRb8x2QfGqT3YTcnCQdZghr4w",
    },
  ];
  return (
    <ul className="photoCard">
      {array.map((data, index) => (
        <li key={index}>
          <p className="name">{data.name}</p>
          <img className="img" src={data.url} alt={data.name} width="150" />
        </li>
      ))}
    </ul>
  );
};

export default PhotoCard;
