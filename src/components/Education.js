import React from "react";

export default function Education() {
  return (
    <section id="education">
    <div className="container px-5 py-10 mx-auto">
      <div className="mb-20">
        <h1 className="text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Education
        </h1>
        <h2 className="text-center title-font sm:text-lg text-3xl mb-4 font-normal text-white grid grid-cols-4 grid-flow-row gap-2">
          <h3>
            Makers Academy
              <dl className="mb-8 leading-relaxed font-light">
              An intensive and highly selective 16 week coding boot camp based in London. The course focuses on equipping students with the know-how to constantly learn and develop their programming ability in a holistic environment. The course not only focuses on coding but also other crucial soft skills such as teamwork, how to work in an agile environment and methods to manage a healthy work-life balance.
              </dl>
          </h3>
          <p>
            Cass Business School
              <dl>
              Year 1: Management BSc
              </dl>
          </p>
          <p>
            A-Levels
            <dl>
            Biology, Economics, Mathematics: BBB
            </dl>
          </p>
          <p>
            GCSEs
            <dl>
            2A*s & 8As
            </dl>
          </p>
        </h2>
      </div>
    </div>
  </section>
  );
}