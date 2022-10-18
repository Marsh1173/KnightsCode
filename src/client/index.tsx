import { ClientApp } from "./Presenter/ClientApp";
import { createRoot } from "react-dom/client";
import React from "react";

const domContainer = document.querySelector("#react-dom");
createRoot(domContainer!).render(<ClientApp />);
