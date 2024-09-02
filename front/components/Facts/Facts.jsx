import React from 'react';
import { FaUsers, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import { RiUserVoiceFill } from "react-icons/ri";

const facts = [
  { icon: <RiUserVoiceFill className="text-[#296747] w-12 h-12 mb-3 inline-block" />, title: "178", description: "Testimonials" },
  { icon: <FaUsers className="text-[#296747] w-12 h-12 mb-3 inline-block" />, title: "+200", description: "Satisfied Client" },
  { icon: <FaFileAlt className="text-[#296747] w-12 h-12 mb-3 inline-block" />, title: "66", description: "Case Studies" },
  { icon: <FaMapMarkerAlt className="text-[#296747] w-12 h-12 mb-3 inline-block" />, title: "1", description: "Tunis, Tunisia" }
];

const Facts = () => {
  return (
    <section className="text-neutral-600 body-font">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 text-center py-4 md:grid-cols-4">
          {facts.map((fact, index) => (
            <div key={index} className="border-2 border-gray-100 px-4 py-6 rounded-3xl">
              {fact.icon}
              <h2 className="title-font font-medium text-base text-gray-900">{fact.title}</h2>
              <p className="leading-relaxed text-sm">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facts;
