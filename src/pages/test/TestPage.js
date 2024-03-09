import { useEffect, useState, useMemo } from "react";

function TestPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const person = useMemo(() => {
    return { firstName, lastName };
  }, [firstName, lastName]);

  useEffect(() => {
    console.log("person:", person);
  }, [person]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleActiveChange = (e) => {
    setIsActive(e.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        className="fx-input"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="fx-input"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={handleActiveChange}
        />
        Active
      </label>

      <p>Person: {JSON.stringify(person)}</p>
    </form>
  );
}

export default TestPage;
