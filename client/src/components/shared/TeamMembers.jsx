import React from "react";
import teamMembers from "../utils/team";

const TeamMembers = () => {
  const firstFourMembers = teamMembers.slice(0, 2); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {firstFourMembers.map((member, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-6">
        <div className="text-left">
          <h2 className="text-xl font-semibold text-secondary-dark">{member.name}</h2>
          <p className="text-secondary text-sm">{member.role}</p>
        </div>
        <div className="mt-4 text-sm">
          <p className="text-secondary-dark font-medium">
            Email: <a href={`mailto:${member.email}`} className="text-secondary">{member.email}</a>
          </p>
          <p className="text-secondary-dark font-medium">
            Phone: <a href={`tel:${member.phone}`} className="text-secondary">{member.phone}</a>
          </p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TeamMembers;
