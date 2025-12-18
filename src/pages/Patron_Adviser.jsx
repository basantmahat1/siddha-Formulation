import React from "react";
import { Users, Crown, UsersRound } from "lucide-react";

export default function Patron_Adviser() {
  return (
    <div className="w-full bg-gray-50 font-serif">

      {/* ===== HEADER ===== */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
            <UsersRound className="h-10 w-10 text-green-700" />
          </div>

          <h2 className="text-4xl md:text-3xl font-bold text-[#096e3b] mb-4">
            Patron and Adviser
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover all members of Siddha Formulation and the splendid
            30 years of responsibilities.
          </p>
        </div>
      </section>

      {/* ===== FOUNDING MEMBERS ===== */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#096e3b] mb-2">
              Patron / Founding Member
            </h3>
            <p className="text-gray-600">
              The visionary founders who laid the foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "Dhundir Raj Shastri Poudel",
                role: "Patron / Founding Member",
                img: "/assets/img/patron1.jpeg",
                description:
                  "Visionary leader and founding pillar of Siddha Formulation",
              },
              {
                name: "Dr Ram Bahadur BC",
                role: "Patron / Founding Member",
                img: "/assets/img/patron2.jpeg",
                description:
                  "Distinguished founding member with decades of expertise",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white  transition p-10 text-center  hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg "
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>

                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-green-700 bg-blue-50 rounded-full">
                  <Crown className="w-4 h-4" />
                  {member.role}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVISER COMMITTEE ===== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#096e3b] mb-2">
              Adviser Committee
            </h3>
            <p className="text-gray-600">
              Expert guidance from industry leaders
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Dr Nanda Shrestha",
                role: "Sr Adviser",
                img: "/assets/img/adviser1.jpeg",
                text:
                  "Senior strategic advisor with extensive industry knowledge",
              },
              {
                name: "Dr Gopal Gyawali",
                role: "Adviser",
                img: "/assets/img/patron4.jpeg",
                text:
                  "Technical advisor specializing in pharmaceutical sciences",
              },
              {
                name: "Shiva Prasad Ghimire",
                role: "Adviser",
                img: "/assets/img/adviser3.jpeg",
                text:
                  "Business development and regulatory affairs advisor",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white transition p-8 text-center hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg"
              >
                <div className="flex justify-center mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>

                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-green-700 bg-blue-50 rounded-full">
                  <UsersRound className="w-4 h-4" />
                  {member.role}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUDIT COMMITTEE ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#096e3b] mb-2">
              Audit Committee
            </h3>
            <p className="text-gray-600">
              Ensuring transparency and compliance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basanta Ghimire",
                role: "Co-ordinator",
                img: "/assets/img/co-ordinator.jpeg",
                text:
                  "Oversees audit processes and compliance procedures",
              },
              {
                name: "Narayan Prasad Panthi",
                role: "Member",
                img: "/assets/img/member1.jpeg",
                text:
                  "Financial audit and internal controls specialist",
              },
              {
                name: "Santosh Atreya",
                role: "Member",
                img: "/assets/img/member2.jpeg",
                text:
                  "Risk assessment and regulatory compliance expert",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white  transition p-8 text-center  hover:bg-green-50 border border-gray-100 hover:border-green-300 rounded-lg"
              >
                <div className="flex justify-center mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>

                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-green-700 bg-blue-50 rounded-full">
                  <Users className="w-4 h-4" />
                  {member.role}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
