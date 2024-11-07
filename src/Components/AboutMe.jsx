import React from "react";

const AboutMe = () => {
  return (
    <div className="H1About md:p-5 min-h-screen ">
      <div className="absolute left-[8%]  ">
        <h1 className=" font-bold text-4xl">About Me</h1>
      </div>
      <div className=" md:flex md:p-[78px 60px]">
        <div className=" text-xl p-[30px] font-light">
          <p className="pt-8 pb-2">
            My name is{" "}
            <span className="text-orange-500">Laghishetty Madhu</span>, and I
            graduated from the University of Mumbai with a bachelor's degree in
            Computers.
          </p>
          <p className="pt-3 pb-2">
            During my university years, I developed a keen interest in
            programming and networking, constantly seeking opportunities to
            learn new concepts and techniques in the field.
          </p>
          <p className="pt-3 pb-2">
            Since graduating, I have dedicated myself to expanding my skills and
            knowledge in React, continuously learning and staying up to date
            with the latest advancements in the framework.
          </p>
          <p className="pt-3 pb-2">
            I am passionate about applying my expertise to develop innovative
            web solutions and contribute to projects that push the boundaries of
            web development.
          </p>
          <p className="pt-3 pb-2">
            As part of my learning journey, I discovered{" "}
            <span className="text-orange-500">React</span>, a powerful{" "}
            <span className="text-orange-500">JavaScript library</span> for
            building user interfaces. I was instantly captivated by its speed
            and efficiency in website development, as well as its ease of
            maintenance. Motivated by this, I delved into React and embarked on
            a freelancing journey, assisting clients in leveraging React to
            create modern and dynamic websites.
          </p>
          <p>I enjoy learning technologies that interest me</p>
          <p className="pt-3 pb-2">
            Professional interests: "I am particularly interested in front-end
            development and user interface design." Personal interests: "In my
            free time, I enjoy [mention hobbies or interests, like reading,
            coding challenges, or design].
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
