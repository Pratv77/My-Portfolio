import React from "react";
import background from "../../assets/space-wallpaper.jpg";

const ContactCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url(${background})` }}
      className="rounded-lg h-full grid place-content-center group cursor-pointer border border-white/25 transition-all ease-in-out"
    >
      <p className="font-cabin-sketch w-[300px] text-gray-400 text-5xl sm:text-7xl lg:text-4xl lg:w-[200px] xl:text-6xl xl:w-[300px] text-center group-hover:scale-[1.02] group-hover:text-gray-50">
        Leave a Message!
      </p>
    </div>
  );
};

export default ContactCard;
