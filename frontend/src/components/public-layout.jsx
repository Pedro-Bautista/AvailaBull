import React from "react";
import { Outlet } from "react-router-dom";

import "./public-layout.scss";

export default function PublicLayout() {
  return (
    <>
      <header className="public-header">
        <h1>Fabric Stack</h1>
      </header>
      <main className="public-content">
        <div
          class="tk-blob"
          style={{
            "--time": "20s",
            "--amount": "5",
            "--fill": "#dbbff988",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
            <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
          </svg>
        </div>
        <Outlet />
      </main>
    </>
  );
}
