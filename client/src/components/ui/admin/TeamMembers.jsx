"use client"
import PrivateRoute from '@/components/shared/PrivateRoute';
import teamMembers from '@/components/utils/team';
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamMembers = () => 
{
  return (
    <section className="px-4 py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">Meet Our Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border hover:border-primary-lighter rounded-lg shadow-md p-6 text-center hover:shadow-lg  duration-300">

              <h2 className="text-xl font-semibold text-secondary mb-2">{member.name}</h2>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-secondary text-sm mb-6">{member.description}</p>
              <div className="flex justify-center space-x-4">
                {member.linkedin && (
                  <a href={member.linkedin} aria-label="LinkedIn" className="text-secondary hover:text-primary">
                    <FaLinkedin size={24} />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} aria-label="Twitter" className="text-secondary hover:text-primary">
                    <FaTwitter size={24} />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} aria-label="GitHub" className="text-secondary hover:text-primary">
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateRoute(TeamMembers);
