"use strict";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/jquery/jquery.min.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/jquery-easing/jquery.easing.min.js";
import "./assets/js/sb-admin-2.min.js";

// import "startbootstrap-sb-admin-2/vendor/jquery/jquery.js";
// import "startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.js";
// import "startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.js";
// import "startbootstrap-sb-admin-2/js/sb-admin-2.js";
// import "startbootstrap-sb-admin-2/vendor/chart.js/Chart.js";
// import "startbootstrap-sb-admin-2/js/demo/chart-area-demo.js";
// import "startbootstrap-sb-admin-2/js/demo/chart-pie-demo.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
