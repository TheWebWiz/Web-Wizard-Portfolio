import React from "react";
import Nav from "../Components/Nav/Nav";
import "./About.css";

function About() {
  return (
    <main>
      <Nav />
      <section className="img-section">
        {/* need to be acceptable and needs image refactoring for webpages */}
        <figure>
          <img
            src="./images/meandtiffboating20120.jpg"
            alt="Me and My wife out on our boat on Lake Erie"
          />
          <figcaption>
            Me and my wife taking our boat out on Lake Erie in 2020. Boating is
            one of my favorite hobbies, there is nothing like being out on the
            water, and feeling the waves crash agents your haul.
          </figcaption>
        </figure>
        <figure>
          <img
            src="./images/puppieschristmas2022.jpg"
            alt="A photo of me and my wives dogs"
          />
          <figcaption>
            Our puppies first christmas! On the left is my dog Rot(short for
            Rotheford), who is a Australian Shepard. While on the right is my
            wifes dog Luna, who is a mix between a Poodle and a German Shepard.
          </figcaption>
        </figure>
        <figure>
          <img src="./images/me_on_boat.jpg" alt="Me on a boat on land" />
          <figcaption>
            This is my boat. It is named The Unrealable and takes on the Great
            Lakes with utter beauty. We have taken as far north as Lake Saint
            Clare, and have many more trips planned!
          </figcaption>
        </figure>
        <figure>
          <img
            src="./images/puppies2022.jpg"
            alt="Me and My wives dogs resting in her truck"
          />
          <figcaption>
            One of the days I worked late at my previous job, my wife surprised
            me and the puppies with a surprise visit. They where just as happy
            as I was!
          </figcaption>
        </figure>
        <figure>
          <img
            src="./images/meandtiffchrismas2020.jpg"
            alt="Me and my wife at christmas time in 2020"
          />
          <figcaption>
            Me and my wife during Christmas time in 2020. I always have a smile
            when she is next to me.
          </figcaption>
        </figure>
      </section>
      <section className="info-section">
        <h2>A Little More About Me...</h2>
        <p>
          My Computer Science journey started in 2019. Originally I was wanting
          to become a gaming developer. I ended up moving to northern Ohio for
          more job prospects in the field I wanted to work in and I met a girl
          who wanted to live by the lake, what can I say. Once I was settled, I
          eventually was hired by a small cannabis start up in Huron, Ohio.
          Although I was still learning coding, it began to take the back seat
          to the new work I was doing in the cannabis business.
        </p>
        <p>
          I soon became the safety coordinator of the company, mainly because of
          my past in construction safety, and my programming education had
          officially taken a rest. In 2021, I became the company's main safety
          and training specialist. This finally gave me an avenue to learn web
          development and programming again to create structured training
          courses and classes for my fellow employees to take. I needed to know
          basic HTML and CSS to perfect the look and feel of my courses. I used
          my previous education plus the MDN documentation to create truly
          unique and highly functional courses.
        </p>
        <p>
          Unfortunately, I was laid off in Dec 2022, but this did give me the
          time to fully resume my education path. I am currently learning to
          become a software engineer with a heavy focus on JavaScript. I am very
          fluent in HTML, CSS, and at basic Javascript, and have at put my hands
          on many different techs and libraries such as SASS, GitHub, React,
          Node.js, Redux, and more! If you have any questions please email me
          via the contact button or for more info please see my LinkedIn, and
          Github profiles. Thank You.
        </p>
      </section>
    </main>
  );
}

export default About;
