import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./index.css";
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App/>);