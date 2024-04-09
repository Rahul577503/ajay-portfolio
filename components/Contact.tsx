import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

import Button from "./Button";
const Contact = () => {
  return (
    <section id="contact">
      
      <div className="flex flex-col  md:items-center md:justify-between px-4 py-16 max-w-2xl mx-auto">
        <div className="text-center md:text-left">
        <h1 className="my-10 text-center font-bold text-4xl">
        Contact-me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
          <p className=" mb-8">
            Hi! I’m Ajay Kanaujiya, an independent developer specialized in Ruby
            on Rails, Sidekiq, Hotwire, TailwindCSS, PostgreSQL, Redis,
            ElasticSearch, Docker, Terraform, and AWS. If you have any questions
            or would like to get in touch, please use the button below to send
            me an email.
          </p>
        </div>
        <Button/>
        
      </div>
    </section>
  );
};

export default Contact;
