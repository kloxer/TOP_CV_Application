import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserInput from "./form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserInput />
  </StrictMode>
);
