import Image from 'next/image';

const DownloadSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Download Compass Ai Today and Transform Your Academic Experience!
        </h2>
        
        <p className="text-lg mb-6 text-gray-700">
          This is an Android app you are about to download. 📱
        </p>

        <div>
          <a
            href="https://drive.google.com/file/d/1oEDQDRYBT879MQFivh2moAVwcAGcZ_nw/view?usp=sharing"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Download Now
          </a>
        </div>

        <div className="mt-8">
          <p className="text-gray-700 text-sm mt-6">
            Not compatible with your Android device? Try this alternative:
          </p>
          <a
            href="https://drive.google.com/file/d/1oF6LlR6cwnJtocrClYqeAb_ZBIoSd74G/view?usp=sharing" // Replace with your alternative link
            className="text-blue-600 hover:underline"
          >
            Explore alternative options
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
