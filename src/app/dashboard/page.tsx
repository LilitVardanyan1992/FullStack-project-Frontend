"use client";
import MainLayout from "@/components/MainLayout";
import ListItem from "@/components/ListItem";
import GoogleReviews from "@/components/GoogleReviews";
import { getUsers } from "@/utils/userApi";
import { useEffect, useState } from "react";

export interface User {
  id: number;
  username: string;
  surname: string;
  email: string;
}

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
        setLoading(false);
      } catch (error) {
        setError("Error fetching users. Please try again later.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        const isInsideUserList = event.target.closest(".user-list");
        if (!isInsideUserList) {
          setSelectedUser(null);
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to handle selection of a user
  const handleUserSelect = (user: User) => {
    setSelectedUser(user); // Set the selected user
  };

  const handleCloseReviews = () => {
    setSelectedUser(null);
    console.log(selectedUser); // Reset selectedUser to null
  };

  return (
    <MainLayout>
      <div
        className={`bg-lightGray flex justify-between h-screen py-[16px] pl-[64px] max-md:pl-[50px] ${
          !selectedUser ? "pr-[27px max-md:pr-[10px]" : ""
        }`}
      >
        {/* Left side: List of users */}
        <div
          className={`flex-grow-1 overflow-auto ${
            selectedUser
              ? "w-1/2 pr-[16px] overflow-y-scroll scrollbar-thin  scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track"
              : "w-full pr-[37px] overflow-y-scroll scrollbar-thin  scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track"
          } `}
        >
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <div>
              {users.map((user: User, index) => (
                <ListItem
                  key={index}
                  user={user}
                  isSelected={selectedUser === user}
                  onSelect={() => handleUserSelect(user)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right side: Google Reviews */}
        <div
          className={`flex-grow-1 h-screen w-1/2 ${
            selectedUser ? "block" : "hidden"
          } pl-[8px] rounded-t-lg `}
        >
          {/* Display Google Reviews only when a user is selected */}
          {selectedUser && (
            <GoogleReviews
              userId={selectedUser.id}
              onClose={handleCloseReviews}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
