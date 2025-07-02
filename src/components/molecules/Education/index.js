import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Bachelor of Science (B.Sc)
              </h3>
              <p className="text-sm text-neutral font-semibold">2018 - 2021</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I pursued my B.Sc in MPC, where I gained a solid foundation in
              analytical and logical thinking. I remained focused on
              skill-building. During and after my degree, I transitioned into
              web development and became proficient in the MERN stack and modern
              web technologies.
            </p>
            <b>Percentage: 80%</b>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Intermediate – MPC
              </h3>
              <p className="text-sm text-neutral font-semibold">2016-2018</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Completed my intermediate education with a focus on core science
              subjects. This phase helped me develop a strong interest in
              problem-solving and technology.
            </p>
            <b>Percentage: 90%</b>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-sm text-neutral font-semibold">2015 - 2016</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Successfully completed my schooling with a focus on basic
              sciences, mathematics, and foundational subjects.
            </p>
            <b>Percentage: 90%</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
