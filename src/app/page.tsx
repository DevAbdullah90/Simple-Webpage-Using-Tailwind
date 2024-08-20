"use client"
import { headers } from "next/headers";
import Image from "next/image";
import Typewriter from 'typewriter-effect';



export default function(){
  return (
     
    // <--------------------------header---------------------->
<div>

    <header className="text-gray-600 body-font shadow-md flex justify-between items-center">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img 
  src="../images/Untitled design.png" 
  className="w-16 h-16 text-white p-1 rounded-full" 
  alt="Tailblocks logo" 
/>      <span className="ml-3 text-xl">Abdullah<span className="ml-3 text-xl text-yellow-500">Kashif</span></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-8 ">
    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
    <a href="#" className="text-gray-600 hover:text-gray-900">Skills</a>
    <a href="#" className="text-gray-600 hover:text-gray-900">Projects</a>
    <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dark Mode
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>



<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi, I am </h1>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400"><Typewriter
  options={{
    strings: ['Abdullah Kashif', 'Frontend Developer' , 'Tech Creator'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">Frontend developer crafting engaging digital experiences. Passionate about tech content <br/> and exploring the potential of AI to shape the future of development.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">Download CV</button>
      </div>
    </div>
    <div className="w-64">
    <img className="object-cover object-center rounded-full border-slate-950 border-4" alt="hero" src="../images/Untitled design.png"/>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font bg-yellow-300">
  <div className="container px-5 py-20 mx-auto">
    <div className="text-center mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">My Online Presence</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
      A brief overview of my growing developer community and impact across various platforms.
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">50+</h2>
        <p className="leading-relaxed">GitHub Followers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">100+</h2>
        <p className="leading-relaxed">LinkedIn Followers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">100+</h2>
        <p className="leading-relaxed">YouTube Subscribers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5,000+</h2>
        <p className="leading-relaxed">YouTube Views</p>
      </div>
    </div>
  </div>
</section>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our team is a dynamic blend of creativity and expertise, dedicated to delivering innovative solutions. From UI design to system management, each member brings a unique skill set to the table, ensuring we stay ahead in the industry.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Abdullah Kashif</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Hafsa Kamali</h2>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Mohammad Noman</h2>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Ahmed</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Mrs Zia</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Izhar QaimKhani</h2>
            <p className="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Iqra Ikram</h2>
            <p className="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Noor Fatima</h2>
            <p className="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Harisa</h2>
            <p className="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="text-gray-600 body-font bg-yellow-300">
  <div className="container px-3 py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Projects</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Discover our innovative projects that blend creativity and technology to deliver exceptional results. Each project is a testament to our dedication and expertise.</p>
    </div>
    <div className="flex flex-wrap -m-4 cursor-pointer">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="../coca cola.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-yellow-700 bg-yellow-200 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">REFRESHING MOMENTS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Coca-Cola: The Real Thing</h1>
            <p className="leading-relaxed">Capture the essence of refreshment with Coca-Cola. Whether you're enjoying a meal, celebrating with friends.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="../website landing.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-yellow-700 bg-yellow-200 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">EXPLORE OUR COURSES</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Master Your Skills Online</h1>
            <p className="leading-relaxed">Explore courses to elevate your career and personal growth. From coding to business, our programs cater to all levels.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <div className="flex relative ">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg " src="../images/text to.avif "/>
          <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-yellow-700 bg-yellow-200 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">EASY TO USE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Text-to-Speech Converter</h1>
            <p className="leading-relaxed">Easily transform any written content into natural-sounding speech. Whether you're developing applications.</p>
          </div>
        </div>
      </div>
    

    </div>
  </div>
</section>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Testinomial</h1>

      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-yellow-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">"Working with Abdullah Kashif has been a fantastic experience. As an individual, Abdullah Kashif consistently delivers high-quality work on time, exceeding our expectations every step of the way. Their dedication, creativity, and attention to detail are truly commendable. We couldn’t be happier with the results and look forward to future collaborations."</p>
      <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">MEHAK ALAMGIR</h2>
      <p className="text-gray-500">Senior Software Developer</p>
    </div>
  </div>
</section>




<footer className="text-gray-600 body-font bg-yellow-300">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img 
  src="../images/Untitled design.png" 
  className="w-16 h-16 text-white p-1 rounded-full" 
  alt="Tailblocks logo" 
/>      <span className="ml-3 text-xl">Abdullah<span className="ml-3 text-xl text-yellow-500">Kashif</span></span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© All right reserved —
      <a href="https://github.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@abdullahkashif</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500" href="https://www.facebook.com/profile.php?id=61555341789020">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href="http://localhost:3000/">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" >
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/abdullah-kashif-6961a931b/">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>


</div>

  )
}