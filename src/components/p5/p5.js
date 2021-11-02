import React from "react";
import { Helmet } from "react-helmet";

export const P5 = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
          integrity="sha512-N4kV7GkNv7QR7RX9YF/olywyIgIwNvfEe2nZtfyj73HdjCUkAfOBDbcuJ/cTaN04JKRnw1YG1wnUyNKMsNgg3g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Helmet>
      {children}
    </>
  );
};
