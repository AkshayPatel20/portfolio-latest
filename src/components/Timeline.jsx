import React from 'react';

const items = [
  { time: "SEM V", title:"NMITD College App", desc: "College app with multiple features for students and staff.", img: "/img/nmitd-apps.png", link: "https://drive.google.com/open?id=1IKYMfxE72GIvs6T-I4VRKJlL4ca2ye27" },
  { time: "SEM IV", title:"AP CINEMAS", desc: "A full-featured movie booking website with seat selection.", img: "/img/movie-book.png", link: "https://github.com/AkshayPatel20/movie-booking-website/tree/master/moviebookingsystem" },
  { time: "SEM III", title:"Library Management System", desc: "Manage books, users, and borrowing records efficiently.", img: "/img/lib.png", link: "https://github.com/AkshayPatel20/Library-Management-System" },
  { time: "SEM I", title:"Early Bird Clothing", desc: "E-commerce clothing store with online payments and catalog.", img: "/img/earlybird.png", link: "http://earlybird-clothing.000webhostapp.com/" }
];

export default function Timeline() {
  return (
    <div className="container py-20">
      <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900">Completed Projects (MCA)</h2>

      <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-yellow-400 before:translate-x-[-50%]">
        {items.map((item, idx) => (
          <div 
            key={item.time} 
            className={`flex flex-col md:flex-row items-center justify-between mb-16 relative
              ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="md:w-5/12">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-sm font-semibold text-yellow-600 mb-2">{item.time}</p>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-4 inline-block text-sm font-medium text-yellow-600 hover:text-yellow-800 underline transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="md:w-2/12 flex justify-center relative">
              <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-md z-10"></div>
            </div>

            <div className="md:w-5/12 flex justify-center md:justify-start">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-64 h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
