
import React from "react";

const visits = [
    {
      type: "Normal Visit",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: true, // true for green tick, false for red cross
    },
    {
      type: "Normal Visit",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: false,
    },
    {
      type: "Cleaning Cycle",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: true,
    },
    {
      type: "Cleaning Cycle",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: false,
    },
  ];

const Work = () => {
  const visits = [
    {
      type: "Normal Visit",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: true, // true for green tick, false for red cross
    },
    {
      type: "Cleaning Cycle",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: false,
    },
    {
        type: "Normal Visit",
        date: "12/11/22",
        plantId: "ABCDE12345",
        plantName: "Surya solar plant",
        clientId: "ruturaj24004",
        clientName: "Ruturaj Deshmukh",
        location: "Pune",
        remarks: "Remarks",
        status: true, // true for green tick, false for red cross
      },
    {
      type: "Cleaning Cycle",
      date: "12/11/22",
      plantId: "ABCDE12345",
      plantName: "Surya solar plant",
      clientId: "ruturaj24004",
      clientName: "Ruturaj Deshmukh",
      location: "Pune",
      remarks: "Remarks",
      status: false,
    },
  ];

  return (
    <div className="p-4">
      {visits.map((visit, index) => (
        <div
          key={index}
          className="p-4 mb-4 bg-white rounded shadow-md flex items-start w-2/6"
        >
          <div className="mr-4">
            {visit.status ? (
              <span className="text-green-500">✅</span>
            ) : (
              <span className="text-red-500">☑️</span>
            )}
          </div>
          <div>
            <div className="font-bold text-lg">{visit.type}</div>
            <div>Date: {visit.date}</div>
            <div>
              Plant: {visit.plantId} {visit.plantName}
            </div>
            <div>
              Client: {visit.clientId} {visit.clientName}
            </div>
            <div>Plant Location: {visit.location}</div>
            <div>Work Remarks: {visit.remarks}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
