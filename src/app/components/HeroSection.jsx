"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import jsPDF from "jspdf";
import "jspdf-autotable";
import NavLink from "./NavLink";

const HeroSection = () => {
  const navLinks = [
    {
      title: "Hire",
      path: "#contact",
    },
  ];

  const [resumeURL, setResumeURL] = useState(
    "https://i.ibb.co/yy88yG5/Ashutosh-CV.jpg"
  );

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(resumeURL);
      const blob = await response.blob();
      const filename = "resume.pdf";

      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Embed the resume PDF into the document
      const dataUrl = URL.createObjectURL(blob);
      doc.addImage(dataUrl, "JPEG", 15, 40, 180, 240);

      // Save the document
      doc.save(filename);

      // Revoke the object URL to free up resources
      URL.revokeObjectURL(dataUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const handleDownloadImgBB = () => {
    // Update the ImgBB link for the CV image
    const imgBBURL = "https://i.ibb.co/yy88yG5/Ashutosh-CV.jpg";
    window.open(imgBBURL, "_blank");
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ashutosh Singh Jat",
                1000,
                "Front-End Developer",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a web developer in the initial stage of my career, I bring a
            fresh perspective and a passion for coding. With a solid foundation
            in programming languages and web development tools, I am eager to
            tackle any project and contribute to a dynamic team. I am excited to
            learn, grow, and make a meaningful impact in the field of web
            development.
          </p>
          <div>
            <button className="px-3 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
            </button>
            <button
              onClick={handleDownloadImgBB}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/image/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
