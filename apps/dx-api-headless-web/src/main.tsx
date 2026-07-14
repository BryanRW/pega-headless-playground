import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProviders } from "./app/AppProviders";
import { bootstrapSession } from "./app/bootstrapSession";
import App from "./App.tsx";
import "./styles/globals.css";

void bootstrapSession();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
