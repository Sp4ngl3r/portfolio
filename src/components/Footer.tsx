import React from "react";
import BorderMagicButton from "./ui/buttons/border-magic-button";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-10 mb-[50px]" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer grid"
          className="w-full h-full opacity-50"
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your
          <span className="text-purple"> digital presence</span> to the next
          level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss on how I can help you to
          achieve your goals.
        </p>

        <a href="mailto:hemanth921941@gmail.com">
          <BorderMagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; {currentYear} Hemanth Kumar
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-8 md:mt-0">
          {socialMedia.map((profile) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={profile.id}
            >
              <a href={profile.link} target="_blank" rel="noreferrer">
                <img
                  src={profile.img}
                  alt={profile.name}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
