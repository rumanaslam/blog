import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/kl.jpg"
      width={500}
      height={500}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        ABOUT ME
      </h1>
      <p className="mb-8 leading-relaxed">
      Hello! I&#39;m Ruman, a passionate web developer dedicated to continuously enhancing my skills and knowledge in HTML, CSS, JavaScript, Next.js, and TypeScript. With a goal to expand my expertise in Python and AI frameworks, I&#39;m committed to sharing my knowledge and experience with the world and working towards becoming a successful entrepreneur, driven by my motto &#39;Learn, Grow, Repeat&#39;.
      </p>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default page
