import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-sky py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-display font-bold text-primary-900 mb-4">
              YOUR JOURNEY,<br />
              <span className="text-accent-500">OUR EXPERTISE</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Travel Technology • Distribution • Solutions
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Empowering journeys across the globe with technology, trust and seamless travel solutions.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-600 text-xl">✓</span>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Trusted & Secure</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-600 text-xl">💳</span>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Best Price Guarantee</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-600 text-xl">🎧</span>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">24/7 Support</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary-600 text-xl">🌍</span>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Worldwide Coverage</p>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-sky-200 to-primary-200 rounded-2xl flex items-center justify-center text-6xl">
              ✈️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
