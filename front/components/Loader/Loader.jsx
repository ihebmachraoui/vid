import React from 'react'

function page() {
  return (
    <div class="flex items-center justify-center h-screen z-50 bg-[#f0f8ff]">
    <div class="relative">
        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-green-200"></div>
        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-green-500 animate-spin">
        </div>
    </div>
</div>
  )
}

export default page