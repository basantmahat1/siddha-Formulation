import React from 'react';
import { Users, Award, Star } from 'lucide-react';
import ScrollUpButton from '../common/ScrollUpButton';

const boardMembers = {
  leadership: [
    {
      name: 'Prayag Lal Shrestha',
      position: 'Chairperson',
            image: '../src/assets/img/Chairman.jpeg',

      description: 'Mr. Prayag Lal Shrestha currently holds the position of Chairperson of Siddha Formulation.',
    },
    {
      name: 'Ram Chandra Poudel',
      position: 'Managing Director',
      image: '../src/assets/img/mdirector.jpeg',

      description: 'Mr. Ram Chandra Poudel currently holds the position of Managing Director of Siddha Formulation.',
    },
  ],
  directors: [
    {
      name: 'Devraj Shrestha',
      position: 'Director',
            image: '../src/assets/img/director.jpeg',

      description: 'Mr. Devraj Shrestha currently holds the position of Director of Siddha Formulation.',
    },
    {
      name: 'Badri Panthi',
      position: 'Director',
            image: '../src/assets/img/director2.jpeg',

      description: 'Mr. Badri Panthi currently holds the position of Director of Siddha Formulation.',
    },
    {
      name: 'Nama Narayan Belbase',
      position: 'Director',
            image: '../src/assets/img/director3.jpeg',

      description: 'Mr. Nama Narayan Belbase currently holds the position of Director of Siddha Formulation.',
    },
    {
      name: 'Basanta Kumar Bashyal',
      position: 'Director',
            image: '../src/assets/img/director4.jpeg',

      description: 'Mr. Basanta Kumar Bashyal currently holds the position of Director of Siddha Formulation.',
    },
    {
      name: 'Sita Bhattarai',
      position: 'Director',
      image: '../src/assets/img/director6.jpeg',

      description: 'Mrs. Sita Bhattarai currently holds the position of Director of Siddha Formulation.',
    },
    {
      name: 'Anita Thapa',
      position: 'Director',
      image: '../src/assets/img/director7.jpeg',
      description: 'Mrs. Anita Thapa currently holds the position of Director of Siddha Formulation.',
    },
  ],
};

const BoardOfDirectors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Board of Directors
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover all members of Siddha Formulation and the splendid 30 years of responsibilities.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Chairperson & Managing Director</h3>
            <p className="text-gray-600">Meet the driving forces behind Siddha Formulation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {boardMembers.leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      <Star className="h-4 w-4 mr-2" />
                      {member.position}
                    </div>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Board of Directors</h3>
            <p className="text-gray-600">Meet the dedicated members of Siddha Formulation's Board of Directors</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.directors.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{member.name}</h4>
                      <div className="text-green-600 font-semibold text-sm mt-1">{member.position}</div>
                      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   <ScrollUpButton />

    </section>
  );
};

export default BoardOfDirectors;