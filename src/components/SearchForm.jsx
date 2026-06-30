import React, { useState } from 'react';

const SearchForm = () => {
  const [tripType, setTripType] = useState('roundtrip');

  return (
    <section className="bg-white py-12 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trip Type Selector */}
        <div className="flex gap-6 mb-8">
          <label className="flex items-center">
            <input
              type="radio"
              name="trip"
              value="roundtrip"
              checked={tripType === 'roundtrip'}
              onChange={(e) => setTripType(e.target.value)}
              className="w-4 h-4"
            />
            <span className="ml-2 font-medium text-neutral-700">Round Trip</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="trip"
              value="oneway"
              checked={tripType === 'oneway'}
              onChange={(e) => setTripType(e.target.value)}
              className="w-4 h-4"
            />
            <span className="ml-2 font-medium text-neutral-700">One Way</span>
          </label>
        </div>

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
          {/* From */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">FROM</label>
            <input
              type="text"
              placeholder="DXB - Dubai"
              className="w-full"
            />
          </div>

          {/* To */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">TO</label>
            <input
              type="text"
              placeholder="Select Destination"
              className="w-full"
            />
          </div>

          {/* Departure */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">DEPARTURE</label>
            <input
              type="date"
              className="w-full"
            />
          </div>

          {/* Return */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">RETURN</label>
            <input
              type="date"
              className="w-full"
            />
          </div>

          {/* Travelers */}
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">TRAVELERS</label>
            <select className="w-full">
              <option>2 Travelers</option>
              <option>1 Traveler</option>
              <option>3 Travelers</option>
              <option>4+ Travelers</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="btn-accent w-full h-12 flex items-center justify-center gap-2">
            <span>🔍</span> SEARCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
