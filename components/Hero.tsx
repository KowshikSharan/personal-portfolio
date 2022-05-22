import React from "react";
import Image from "next/image";
import githubLogo from "../public/assets/github.png";
import linkedinLogo from "../public/assets/linkedinFilled.png";
function Hero() {
  return (
    <div className="h-screen w-screen flex bg-slate-800 flex-col">
      <div className="h-5/6 justify-center items-center flex flex-col">
        <div className="text-white text-3xl font-semibold">
          Hi, I am Kowshik.{" "}
        </div>
        <div className="text-white text-2xl">
          I am a full stack developer. I also develop cross platform mobile
          apps.{" "}
        </div>
        <div className="flex mt-20">
          <div className="mr-10">
            <a href="https://github.com/KowshikSharan" target="_blank">
              <Image
                src={githubLogo}
                className="opacity-80 hover:opacity-100"
              />
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/kowshik-sharan-subramanian/"
            target="_blank"
          >
            <Image
              src={linkedinLogo}
              width={70}
              height={70}
              objectFit="contain"
              className="opacity-80 hover:opacity-100"
            />
          </a>
        </div>
      </div>
      <div className="text-white items-end justify-center flex h-1/6">
        <div>Learn More about what I do</div>
      </div>
    </div>
  );
}

export default Hero;
