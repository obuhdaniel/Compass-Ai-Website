import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <br /><span className="text-blue-900 text-7xl">Compass Ai:</span> <br />Your Ultimate Academic Companion
          </h1>
          <p className="text-lg mb-6">
            Empower your journey through university with Compass Ai, the innovative app designed to streamline your academic life. Whether you're managing coursework, tracking deadlines, or seeking personalized AI-driven support, Compass Ai is here to guide you every step of the way.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image
            src="/viewleft2.png" // Replace with your mockup image path
            alt="Compass Ai App Mockup"
            width={400}
            height={600}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
