import Image from 'next/image';

const KeyFeatures = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col gap-2">
          <img width="100" height="100" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-time-management-resume-flaticons-lineal-color-flat-icons.png" alt="external-time-management-resume-flaticons-lineal-color-flat-icons"/>
            <h3 className="text-xl font-semibold mb-4">Time Management</h3>
            <p>
              Effortlessly organize your schedule and prioritize tasks with intuitive AI-powered suggestions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col gap-2">
            <img width="100" height="100" src="https://img.icons8.com/bubbles/50/gps-device.png" alt="gps-device"/>
            <h3 className="text-xl font-semibold mb-4">Coursework Navigation</h3>
            <p>
              Seamlessly navigate through your courses with tailored recommendations and study aids.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center flex-col gap-2">
          <img width="100" height="100" src="https://img.icons8.com/dusk/64/bot--v1.png" alt="bot--v1"/>
            <h3 className="text-xl font-semibold mb-4">AI Support</h3>
            <p>
              Receive personalized study tips, reminders, and insights based on your academic progress and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
