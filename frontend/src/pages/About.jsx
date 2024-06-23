import React from 'react';

function About() {
  return (
    <div className='about-container bg-gray-800'>
    <section className="text-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="text-4xl font-extrabold text-center mb-4">About Us</h2>
      <div className="text-center text-gray-300 mb-8 lg:mb-16 sm:text-xl">
        <p>Welcome to our company! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tellus non ex dapibus fermentum.</p>
        <p>Nulla ornare justo in ex commodo, at viverra lectus congue. Nunc bibendum augue vitae orci maximus, in convallis est pulvinar.</p>
        <p>Proin auctor turpis in eros molestie, id elementum sem dignissim. Mauris varius justo eu mauris ultricies, sit amet luctus felis efficitur.</p>
      </div>
      <div className="text-center">
        <p className="text-gray-300">For more information, feel free to reach out via our <a href="#" className="text-primary-500 hover:underline">Contact Us</a> page.</p>
      </div>
    </section>
    </div>
  );
}

export default About;
