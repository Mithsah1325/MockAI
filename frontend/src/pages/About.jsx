import React from 'react';

function About() {
  return (
    <div className="about-container bg-gray-800">
      <section className="text-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="text-4xl font-extrabold text-center mb-4">Our Mission</h2>
        <div className="text-center text-gray-300 mb-8 lg:mb-16 sm:text-xl">
          <p className="mb-4">
            We are working our best to help people by utilizing our skills and knowledge.
          </p>
          <p className="mb-4">
            "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
          </p>
          <p>
            Our dedication lies in making a positive impact in our community through innovation and service.
          </p>
        </div>

        <h2 className="text-4xl font-extrabold text-center mb-4 mt-12">Our Story</h2>
        <div className="text-center text-gray-300 mb-8 lg:mb-16 sm:text-xl">
          <p className="mb-4">
            We are students at Northern Kentucky University, Kentucky, pursuing our passions in technology and community service.
          </p>
          <p className="mb-4">
            Lorem 
          </p>
          <p>
            Nulla ornare justo in ex commodo, at viverra lectus congue. Nunc bibendum augue vitae orci maximus, in convallis est pulvinar.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-1/3 ml-3">
            <img src="https://images.pexels.com/photos/5538599/pexels-photo-5538599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hobbies" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-1/3">
            <img src="https://images.pexels.com/photos/5553080/pexels-photo-5553080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hobbies" className="rounded-lg shadow-lg" />
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;
