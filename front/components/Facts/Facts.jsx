import React from 'react';
import { FaUsers, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import { RiUserVoiceFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Facts = () => {
  const { t } = useTranslation('global'); // Use useTranslation hook for translations

  const facts = [
    {
      icon: <RiUserVoiceFill className="text-[#296747] w-12 h-12 mb-3 inline-block" />,
      title: t("Facts.testimonials.title"), // Translated title
      description: t("Facts.testimonials.description") // Translated description
    },
    {
      icon: <FaUsers className="text-[#296747] w-12 h-12 mb-3 inline-block" />,
      title: t("Facts.satisfiedClients.title"), // Translated title
      description: t("Facts.satisfiedClients.description") // Translated description
    },
    {
      icon: <FaFileAlt className="text-[#296747] w-12 h-12 mb-3 inline-block" />,
      title: t("Facts.caseStudies.title"), // Translated title
      description: t("Facts.caseStudies.description") // Translated description
    },
    {
      icon: <FaMapMarkerAlt className="text-[#296747] w-12 h-12 mb-3 inline-block" />,
      title: t("Facts.location.title"), // Translated title
      description: t("Facts.location.description") // Translated description
    }
  ];

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
};

export default Facts;
