import React from 'react';
import {motion} from 'framer-motion';
const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-[8.5rem] mx-auto">
           <motion.h1
          className="text-5xl text-center mb-10 -mt-4 sm:text-5xl md:text-6xl font-bold title-font my-4 text-[#00024A]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         Our Portfolio
        </motion.h1>
        <div className="flex flex-wrap -m-4">
          {[
            {
              category: 'CATEGORY',
              title: 'The Catalyzer',
              image: 'https://dummyimage.com/720x400',
              description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
              views: '1.2K',
              comments: 6
            },
            {
              category: 'CATEGORY',
              title: 'The 400 Blows',
              image: 'https://dummyimage.com/721x401',
              description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
              views: '1.2K',
              comments: 6
            },
            {
              category: 'CATEGORY',
              title: 'The 400 Blows',
              image: 'https://dummyimage.com/721x401',
              description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
              views: '1.2K',
              comments: 6
            },
            {
              category: 'CATEGORY',
              title: 'The 400 Blows',
              image: 'https://dummyimage.com/721x401',
              description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
              views: '1.2K',
              comments: 6
            },
            {
              category: 'CATEGORY',
              title: 'The 400 Blows',
              image: 'https://dummyimage.com/721x401',
              description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
              views: '1.2K',
              comments: 6
            },
            {
              category: 'CATEGORY',
              title: 'Shooting Stars',
              image: 'https://dummyimage.com/722x402',
              description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
              views: '1.2K',
              comments: 6
            },
          ].map((item, index) => (
            <div className="p-4 md:w-1/3" key={index}>
              <div className="h-full  bg-[#00024A] border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.image} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">{item.category}</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">{item.title}</h1>
                  <p className="leading-relaxed text-white mb-3">{item.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {item.views}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {item.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
