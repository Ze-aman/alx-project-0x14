import React from "react";

const MovieCard: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Movie Title</h2>
      <p className="text-sm text-gray-500">Movie description goes here.</p>
    </div>
  );
};

export default MovieCard;
