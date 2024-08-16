import React from "react";

// Utility function to handle common text styles
const textStyle = (size = "sm", color = "gray-900", weight = "normal") => {
    return `text-${size} text-${color} font-${weight}`;
  };
  
  // Utility function to handle padding
  const padding = (x = "6", y = "4") => {
    return `px-${x} py-${y}`;
  };
  
  // Utility function for flex and alignment
  const flexAlignCenter = (justify = "start") => {
    return `flex items-center justify-${justify}`;
  };
  
  // Utility function for border and hover effects
  const borderAndHover = () => {
    return `border-b hover:bg-gray-100`;
  };
  
  // Utility function for common table styles
  const tableBaseStyle = () => {
    return "min-w-full bg-white border border-gray-200";
  };
  
  // Utility function for text colors based on rating
  const ratingColor = (rating) => {
    return rating >= 4 ? "text-green-500" : "text-red-500";
  };



const technicians = [
  {
    clientId: "#PVC123",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 4.5,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  // Repeat for more rows
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
  {
    clientId: "#PVC124",
    name: "Ruturaj Deshmukh",
    contact: "234567890",
    email: "client@example.com",
    experience: "4yrs 2mo",
    rating: 2.0,
    reviews: 10,
    profileImage: "./public/profileimage.jpg",
  },
];

const TechnicianTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Technician table</h2>
      <p className="text-gray-600 mb-4">View all the technicians, their rating, and availability.</p>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client ID</th>
              <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
              <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year of Experience</th>
              <th className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating (out of 5)</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map((technician, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{technician.clientId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                  <img src={technician.profileImage} alt={technician.name} className="w-8 h-8 rounded-full mr-2" />
                  {technician.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{technician.contact}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{technician.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{technician.experience}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                  <span className={`mr-2 ${technician.rating >= 4 ? "text-green-500" : "text-red-500"}`}>★</span>
                  {technician.rating} ({technician.reviews})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default TechnicianTable;