import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-700">
        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
