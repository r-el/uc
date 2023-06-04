import React, { useContext } from "react";
import { createRoot } from "react-dom/client";

import UserContext, { UserProvider } from "./Services/UserContext.js";

createRoot(document.getElementById("root")).render(
  <UserProvider value={{ id: 1, name: "Ariel" }}>
    <Child />
  </UserProvider>
);

function Child() {
  const { id, name } = useContext(UserContext);
  return <div>{[id, ": ", name]}</div>;
}
