import React from 'react';
import Image from 'next/image';

interface Award {
    title: string;
    description: string;
    image: string;
  }
  
  
export default function Awards() {
    const awards: Award[] = [
        {
          title: 'Internship in Web Development',
          description: 'Internship at CodeSoft in web development, gaining valuable experience in frontend and backend technologies.',
          image: '/award01.jpg',
        },
        {
          title: 'Internship in Full-Stack Development',
          description: 'Certification from Bharat Interns for completing the full-stack development program, covering frontend, backend, and database management skills.',
          image: '/award02.jpg',
        },
      ];
      

  return (
    <section id='skills'>
 <div className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">My Awards and Certificates</h1>
      <p className="text-gray-400 mb-8">
        Here are some of the awards and certificates I have received in recognition of my achievements and contributions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={award.image}
              alt={award.title}
              width={400}
              height={400}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{award.title}</h2>
            <p className="text-gray-400 mb-4">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
   
  );
}