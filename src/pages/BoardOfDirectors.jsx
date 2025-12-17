import React from "react";
import { Users, Award, Star, UsersRound } from "lucide-react";
import ScrollUpButton from "../common/ScrollUpButton";

const boardMembers = {
  leadership: [
    {
      name: "Prayag Lal Shrestha",
      position: "Chairperson",
      image: "/assets/img/Chairman.jpeg",
      description:
        "Mr. Prayag Lal Shrestha currently holds the position of Chairperson of Siddha Formulation.",
    },
    {
      name: "Ram Chandra Poudel",
      position: "Managing Director",
      image: "/assets/img/mdirector.jpeg",
      description:
        "Mr. Ram Chandra Poudel currently holds the position of Managing Director of Siddha Formulation.",
    },
  ],
  directors: [
    {
      name: "Devraj Shrestha",
      position: "Director",
      image: "/assets/img/director.jpeg",
      description:
        "Mr. Devraj Shrestha currently holds the position of Director of Siddha Formulation.",
    },
    {
      name: "Badri Panthi",
      position: "Director",
      image: "/assets/img/director2.jpeg",
      description:
        "Mr. Badri Panthi currently holds the position of Director of Siddha Formulation.",
    },
    {
      name: "Nama Narayan Belbase",
      position: "Director",
      image: "/assets/img/director3.jpeg",
      description:
        "Mr. Nama Narayan Belbase currently holds the position of Director of Siddha Formulation.",
    },
    {
      name: "Basanta Kumar Bashyal",
      position: "Director",
      image: "/assets/img/director4.jpeg",
      description:
        "Mr. Basanta Kumar Bashyal currently holds the position of Director of Siddha Formulation.",
    },
    {
      name: "Sita Bhattarai",
      position: "Director",
      image: "/assets/img/director6.jpeg",
      description:
        "Mrs. Sita Bhattarai currently holds the position of Director of Siddha Formulation.",
    },
    {
      name: "Anita Thapa",
      position: "Director",
      image: "/assets/img/director7.jpeg",
      description:
        "Mrs. Anita Thapa currently holds the position of Director of Siddha Formulation.",
    },
  ],
};

const BoardOfDirectors = () => {
  return (
    <section className="py-6 bg-gray-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 ">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-8 ">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
            <UsersRound className="h-10 w-10 text-green-900" />
          </div>
          <h2 className="text-4xl md:text-3xl font-bold text-[#096e3b] mb-4">
            Board of Directors
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover all members of Siddha Formulation and the splendid
            30 years of responsibilities.
          </p>
        </div>

        {/* ===== LEADERSHIP ===== */}
        <div className="mb-20 ">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#096e3b] mb-2">
              Chairperson & Managing Director
            </h3>
            <p className="text-gray-600">
              Meet the driving forces behind Siddha Formulation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {boardMembers.leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white  transition p-10 text-center   hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white"
                  />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>

                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-green-700 bg-blue-50 rounded-full">
                  <Star className="w-4 h-4" />
                  {member.position}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== DIRECTORS ===== */}
        <div>
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-[#096e3b] mb-2">
              Board of Directors
            </h3>
            <p className="text-gray-600">
              Meet the dedicated members of Siddha Formulation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {boardMembers.directors.map((member, index) => (
              <div
                key={index}
                className="bg-white  transition p-8 text-center  hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg"
              >
                <div className="flex justify-center mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>

                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-green-700 bg-blue-50 rounded-full">
                  <Award className="w-4 h-4" />
                  {member.position}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollUpButton />
    </section>
  );
};

export default BoardOfDirectors;
