// Use Next.js's Image component for optimized image loading
import { useEffect, useRef } from 'react';
import virtualcrafters from "../assets/virtualcrafters.mp4";

const ClipOne = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={virtualcrafters} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-5">EXPLORE THE WORLD</h1>
        <div>
          <button type="button" className="bg-white text-black px-5 py-2 rounded-lg shadow-lg hover:bg-gray-300">
            Explore
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ClipOne;
