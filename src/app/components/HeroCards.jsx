import React from "react";

export default function HeroCards(props) {
  return (
    <div className="border p-5 rounded-xl space-y-5 hover:shadow-textShadow duration-100">
      <img
        src={`images/${props.image}.webp`}
        alt={`${props.image}`}
        className="w-16 h-16"
      />

      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-bold">{props.title}</h2>
        <p className="text-sm text-gray-400">{props.detail}</p>
      </div>
    </div>
  );
}
