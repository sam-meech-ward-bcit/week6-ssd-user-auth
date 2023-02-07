import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function Profile() {
  const { user, updateToken } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile: {user?.displayName}</h1>
      <button onClick={() => updateToken("")}>Log Out</button>
    </div>
  );
}
