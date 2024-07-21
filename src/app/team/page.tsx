import Head from 'next/head';
import Image from 'next/image';

const Developers = () => {
  // Data for developers
  const developers = [
    {
      name: 'Orji Peter',
      role: 'Product Manager/UI Designer',
      image: '/orji.jpeg', // Place your images in the public folder
      description:
        'Peter ensures the development of Compass Ai remains on track, emphasizing quality assurance and user feedback.',
    },
    {
      name: 'Obuh Daniel',
      role: 'Developer',
      image: '/obuh.jpeg',
      description:
        "With over 4 years of experience in software engineering, Obuh spearheaded the technical architecture of Compass Ai.",
    },
    {
      name: 'Maro Prosper',
      role: 'AI Specialist/ UX Researcher',
      image: '/maro.jpeg',
      description:
        "Prosper's expertise in artificial intelligence drives Compass Ai's intelligent features and personalized recommendations.",
    },
    {
      name: 'Ayara Elijah',
      role: 'Content Strategist',
      image: '/ayara.jpeg',
      description:
        "Elijah's strategically shapes the content within Compass Ai to empower students through informative interactions."
    },
   
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Meet the Developers - Compass Ai</title>
        <meta name="description" content="Meet the developers behind Compass Ai." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Meet the Developers Behind Compass Ai</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((developer, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={developer.image}
                  alt={developer.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{developer.name}</h2>
                  <p className="text-sm text-gray-700 mb-4">{developer.role}</p>
                  <p className="text-sm text-gray-700">{developer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-4 bg-gray-200 text-center">
        <p className="text-sm text-gray-600">Join us on our mission to transform education!</p>
      </footer>
    </div>
  );
};

export default Developers;
