import React from 'react'
import * as images from '../../../assets/index'

const Team = () => {
  return (
    <>
      <section>
        <div className="container px-6 py-8 mx-auto">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-black text-center text-gray-800 lg:text-4xl">Designed & Built By <span className='text-[#ff007b]'>RBK KEF Cohort - 1</span></h1>
            <p className="mt-6 text-center text-normal text-gray-500 dark:text-gray-500">The creators of this platform are none other than RBK students.</p>
          </div>

          <div className="grid gap-4 mt-8 grid-cols-2 justify-center">
            {/* Repeat this structure for each team member */}
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-28 h-28 lg:w-48 lg:h-48 mx-auto rounded-2xl bg-cover"
                  style={{ backgroundImage: `url(${member.imageSrc})` }}
                ></div>
                <div className="mt-2">
                  <h2 className="text-sm lg:text-lg font-semibold text-gray-700">{member.name}</h2>
                  <span className="mt-1 text-xs lg:text-sm font-medium text-gray-600">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team

const teamMembers = [
  {
    name: "Moenes Mannai",
    role: "Full Stack Developer",
    imageSrc: images.moenes.src,
  },
  {
    name: "Iheb Machraoui",
    role: "Full Stack Developer",
    imageSrc: images.iheb.src,
  },
  // {
  //   name: "Fawez Ferjaoui",
  //   role: "Full Stack Developer",
  //   imageSrc: images.fawez.src,
  // },
  // {
  //   name: "Houssem Sellami",
  //   role: "Full Stack Developer",
  //   imageSrc: images.houssem.src,
  // },
  // {
  //   name: "Amine Bouguerra",
  //   role: "Full Stack Developer",
  //   imageSrc: images.amine.src,
  // },
];
