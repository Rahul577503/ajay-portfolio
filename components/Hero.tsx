import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className=" py-20 ">
      <div className="container mx-auto  max-w-7xl flex flex-col-reverse gap-5 md:flex-row  justify-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="mx-auto">
            <Image
              src="/ajay.jpg"
              alt="Ajay Kanaujiya"
              width={300}
              height={500}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Ajay Kanaujiya
          </h1>
          <p className="font-semibold text-xl mb-8">
            Hi! 👋 I’m Ajay Kanaujiya, an independent developer specialized in
            Ruby on Rails, Sidekiq, Hotwire, TailwindCSS, PostgreSQL, Redis,
            ElasticSearch, Docker, Terraform, and AWS.
          </p>
          <Link
            href="#"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Learn More About Me{" "}
            <HiArrowNarrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
