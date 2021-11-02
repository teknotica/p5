import React from "react";
import { Helmet } from "react-helmet";
import { P5 } from "../components/p5";

export const PageCube = () => (
  <P5>
    <Helmet>
      <script>{`
        let img;
        let theta = 0;
        
        function setup() {
          createCanvas(700, 700, WEBGL);
          img = loadImage("./assets/me.png");
        }
        
        function draw() {
          background("#fff8dc");
          push();
        
          rotateZ(theta * mouseX * 0.001);
          rotateX(theta * mouseX * 0.001);
          rotateY(theta * mouseX * 0.001);
        
          texture(img);
          box(160, 160, 160);
        
          theta += 0.01;
        }
      `}</script>
    </Helmet>
  </P5>
);
