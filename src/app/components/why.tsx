import { AcademicCapIcon, AdjustmentsIcon, LightBulbIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Compass Ai?</h2>
        <p className="text-lg mb-12">
          Designed by students, for students, Compass Ai understands the challenges of university life in Nigeria. Harnessing the latest in artificial intelligence, our app adapts to your unique needs, ensuring you stay on track and excel in your studies.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <AcademicCapIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student-Centered Design</h3>
            <p>
              Developed by students who understand the unique challenges of university life in Nigeria.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <AdjustmentsIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adaptive AI</h3>
            <p>
              Our app uses the latest AI technology to adapt to your unique academic needs.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
            <LightBulbIcon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stay on Track</h3>
            <p>
              Personalized reminders and study tips to ensure you stay on top of your coursework.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center lg:flex-row  ">
          <Image
            src="/proff.png" // Replace with your download image path
            alt="Download Compass Ai"
            width={400}
            height={600}
            className="rounded-lg "
          />
          <Image
            src="/view3.png" // Replace with your download image path
            alt="Download Compass Ai"
            width={400}
            height={600}
            className="rounded-lg "
          />
          <Image
            src="/bots.png" // Replace with your download image path
            alt="Download Compass Ai"
            width={400}
            height={600}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
