// import React from "react";

// const About = () => {
//   return <div>About goes here</div>;
// };

// export default About;
import React from "react";
import proFile1 from "../assets/images/Profile1.jpg";
import proFile2 from "../assets/images/Profile2.jpg";
import proFile5 from "../assets/images/Profile5.jpg";
import proFile4 from "../assets/images/Profile4.jpg";
import whyUs from "../assets/images/whyus.jpg";
import customerCentered from "../assets/images/customerCentered.jpg";

function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Our Team */}
      <section className="pt-32">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src={proFile4}
              alt="Team Member"
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Trey Anizi</h3>
            <p className="text-teal-500">Founder</p>
            <p className="mt-2 text-gray-600 text-sm">
              As the driving force behind our platform,Tracy ensures that our
              marketplace remains innovative, user-friendly, and aligned with
              our mission to make online advertising effortless for everyone
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src={proFile5}
              alt="Team Member"
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Jeffries</h3>
            <p className="text-teal-500">Co-Founder</p>
            <p className="mt-2 text-gray-600 text-sm">
              With expertise in web development and software engineering, Dzidm
              builds and optimizes our platform, ensuring a smooth, secure, and
              fast experience for all users.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src={proFile1}
              alt="Team Member"
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Naomi</h3>
            <p className="text-teal-500">Marketing Strategist</p>
            <p className="mt-2 text-gray-600 text-sm">
              Naomi brings creativity and insight into making our platform
              visible to the right audience. From social media to digital
              campaigns, they ensure our users always stay engaged.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src={proFile2}
              alt="Team Member"
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Mr Hihihi</h3>
            <p className="text-teal-500">Customer Experience</p>
            <p className="mt-2 text-gray-600 text-sm">
              Passionate about helping people, Mr. Hihihi is dedicated to making
              sure every user gets the support they need. From troubleshooting
              to guiding users through the platform, they ensure an excellent
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Middle Section: Image + Why Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {/* Placeholder image on the left */}
          <img
            src={whyUs}
            alt="Office"
            className="w-full h-auto rounded shadow"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-600 mb-4">Why Us</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            voluptate ea repudiandae delectus sed labore dolor enim optio ad!
          </p>
          <p className="text-gray-600 mb-4">
            Adipisci dolore reprehenderit est ex numquam voluptate, ex
            voluptatibus odio consequuntur per quo praesentium dicta laboriosam
            necessitatibus aspernatur tenetur perspiciatis!
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Adipisci dolore reprehenderit</li>
            <li>Accusamus dicta laborum</li>
            <li>Defectus sed labore</li>
          </ul>
        </div>
      </section>

      {/* Customer Centered Co. */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-teal-600 mb-4">
            Customer Centered Co.
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            voluptas ea repudiandae delectus sed labore dolor enim optio ad!
          </p>
          <p className="text-gray-600 mb-4">
            Aliquid placeat reprehenderit est ex numquam voluptate, ex
            voluptatibus odio consequuntur per quo praesentium dicta laboriosam
            necessitatibus aspernatur tenetur perspiciatis!
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Adipisci dolore reprehenderit</li>
            <li>Accusamus dicta laborum</li>
            <li>Defectus sed labore</li>
          </ul>
        </div>
        <div>
          {/* Placeholder image on the right */}
          <img
            src={customerCentered}
            alt="Happy Customer"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
