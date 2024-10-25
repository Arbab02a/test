import React from 'react';
import about from "../assets/about.jpg";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
const About = () => {
  return (
    <section className="text-[#00024A] body-font bg-[#C6C6D2]">
      <div className="container px-5 py-28 mx-auto">
        <h1 className="text-6xl lg:text-7xl sm:text-6xl font-bold text-center title-font mb-16 text-[#00024A]">About Us</h1>

        <div className="flex flex-wrap -m-4">
          {/* Who We Are Section */}
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className=" text-[#00024A] bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-64 rounded w-full object-cover object-center mb-6"
                src={about}
                alt="Who We Are"
              />
              <h2 className="text-4xl text-[#00024A] font-bold title-font mb-2">Who We Are?</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className=" bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-64 rounded w-full object-cover object-center mb-6"
                src={mission}
                alt="Our Mission"
              />
              <h2 className="text-4xl  font-bold title-font mb-4">Our Mission</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="xl:w-1/2 md:w-1/2 mx-auto p-4">
            <div className=" bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-64 rounded w-full object-cover object-center mb-6"
                src={vision}
                alt="Our Vision"
              />
              <h2 className="text-4xl text-center font-bold title-font mb-4">Our Vision</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
