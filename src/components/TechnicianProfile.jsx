import React from "react";


const TechnicianProfile = () => {
  const technician = {
    name: "Ruturaj Deshmukh",
    id: "TID_123",
    contactNo: "1234567890",
    email: "technician@mail.com",
    password: "12345asdfgh",
    experience: "4 years 2 months",
    rating: 4.5,
    reviews: 10,
    profileImage: "./public/profileimage.jpg", // Replace with an actual image URL
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-96 padding-120"> {/* Added border and shadow */}
      <div className="flex items-start">
        <img
          src={technician.profileImage}
          alt={technician.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base">{technician.name}</div>
              <div className="text-gray-500 text-sm">#{technician.id}</div>
            </div>
            <div className="flex items-center text-green-500">
              <span className="mr-1 text-sm">★</span>
              <span className="text-sm">{technician.rating}</span>
              <span className="text-gray-500 text-xs ml-1">({technician.reviews})</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="text-xs">
              <span className="font-medium">Contact No: </span>
              {technician.contactNo}
            </div>
            <div className="text-xs">
              <span className="font-medium">Email Id: </span>
              {technician.email}
            </div>
            <div className="text-xs">
              <span className="font-medium">Password: </span>
              {technician.password}
            </div>
            <div className="text-xs">
              <span className="font-medium">Experience: </span>
              {technician.experience}
            </div>
            <div className="text-xs">
              <span className="font-medium">Password: </span>
              XXXXXXXXXX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianProfile;
