import React from 'react'
import * as images from '../../assets/index'
import Link from 'next/link';



const CohortDetail = (props) => {
    let cohort = props.element
  return (
    <>
     <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md hover:shadow-xl rounded-lg border">
    <Link href={`/cohort-detail?cohortId=${cohort._id}`} // Assuming cohort._id is the identifier
    key={cohort._id}> 
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-lg" src={images.cover.src} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">Region : {cohort.region}</h3>
          <h2 className="text-gray-900 title-font text-lg font-semibold">RBK COHORT - {cohort.name}</h2>
          <p className="mt-1">N° Students : {cohort?.students?.length}</p>
          <p className="mt-1 text-xs">Date : {cohort.date}</p>
        </div>
      </Link>
      </div>
    </>
  )
}

export default CohortDetail