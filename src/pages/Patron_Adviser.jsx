import React from "react";
import AboutCommonHeroLayout from "../common/AboutCommonHeroLayout";

export default function Patron_Adviser() {
  return (
    <div className="w-full bg-[#f7fbf7]">
      <AboutCommonHeroLayout />

      {/* ===== PATRON & ADVISER ===== */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Patron and Adviser
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Discover all members of Siddha Formulation and the splendid
            30 years of responsibilities.
          </p>
        </div>
      </section>

      {/* ===== FOUNDING MEMBERS ===== */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-green-800 font-semibold mb-10">
            Patron / Founding Member
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Dhundir Raj Shastri Poudel",
                role: "Patron / Founding Member",
                img: "/src/assets/img/patron1.jpeg",
              },
              {
                name: "Dr Ram Bahadur BC",
                role: "Patron / Founding Member",
                img: "/src/assets/img/patron2.jpeg",
              },
            ].map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-24 w-24 rounded-full object-cover mb-4"
                />
                <h4 className="text-sm font-semibold text-green-800">
                  {m.name}
                </h4>
                <p className="text-xs text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVISER COMMITTEE ===== */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-green-800 font-semibold mb-10">
            Adviser Committee
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr Nanda Shrestha",
                role: "Sr Adviser",
                img: "/src/assets/img/adviser1.jpeg",
              },
              {
                name: "Dr Gopal Gyawali",
                role: "Adviser",
                img: "/src/assets/img/patron4.jpeg",
              },
              {
                name: "Shiva Prasad Ghimire",
                role: "Adviser",
                img: "/src/assets/img/adviser3.jpeg",
              },
            ].map((m) => (
              <div
                key={m.name}
                className="bg-[#f7fbf7] rounded-xl shadow-sm p-6 text-center"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-20 w-20 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-sm font-semibold text-green-800">
                  {m.name}
                </h4>
                <p className="text-xs text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUDIT COMMITTEE ===== */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-green-800 font-semibold mb-10">
            Audit Committee
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basanta Ghimire",
                role: "Co-ordinator",
                img: "/src/assets/img/co-ordinator.jpeg",
              },
              {
                name: "Narayan Prasad Panthi",
                role: "Member",
                img: "/src/assets/img/member1.jpeg",
              },
              {
                name: "Santosh Atreya",
                role: "Member",
                img: "/src/assets/img/member2.jpeg",
              },
            ].map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-xl shadow-sm p-6 text-center"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-20 w-20 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-sm font-semibold text-green-800">
                  {m.name}
                </h4>
                <p className="text-xs text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
