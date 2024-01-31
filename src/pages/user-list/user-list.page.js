import { useState, useEffect } from "react";
import UserList from "../../components/user-list/user-list.component";
import SearchBox from "../../components/search-box/search-box.component";

const UserListPage = () => {
  const [userList, setUserList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  const userListFiltered = userList.filter((user) =>
    user.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <section className="user-list-page">
      <h3>User list page</h3>
      <SearchBox handleChange={onSearchChange} />
      <UserList users={userListFiltered} />
    </section>
  );
};

export default UserListPage;
