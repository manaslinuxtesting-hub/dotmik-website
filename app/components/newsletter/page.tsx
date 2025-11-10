"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/app/constants/images";
import "aos/dist/aos.css";

// Newsletter Component
const Newsletter = () => {
  useEffect(() => {
    let myP5: any;

    const loadP5 = async () => {
      const p5Module = await import("p5");
      const p5 = p5Module.default;

      const sketch = (p: any) => {
        let x = 0;
        let y = 0;
        let a = 100; // circle size

        p.setup = () => {
          const cnv = p.createCanvas(p.windowWidth, p.windowHeight);
          cnv.parent("p5-background");
          p.noStroke();
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        p.draw = () => {
          p.clear();

          // smooth follow
          x = p.lerp(x, p.mouseX, 0.12);
          y = p.lerp(y, p.mouseY, 0.12);

          // glow effect
          p.drawingContext.shadowBlur = 400;
          p.drawingContext.shadowColor = "rgba(240, 240, 240, 0.8)";
          p.noStroke();
          p.fill(255, 255, 255, 50);
          p.ellipse(x, y, a, a);

          // enlarge smoothly on click
          if (p.mouseIsPressed) {
            a = p.lerp(a, 300, 0.1);
          } else {
            a = p.lerp(a, 220, 0.1);
          }

          // reset shadow
          p.drawingContext.shadowBlur = 0;
        };
      };

      myP5 = new p5(sketch);
    };

    loadP5();

    return () => {
      if (myP5) {
        myP5.remove();
      }
    };
  }, []);

  return (
    <div className="h-banner blog-banner lg:py-40 py-20 newsletter relative overflow-hidden flex items-center justify-center">
      {/* Background Canvas */}
      <div id="p5-background" className="absolute inset-0 z-0"></div>

      {/* Foreground Content */}
      <div
        className="relative w-full h-full mx-auto px-10 md:max-w-[1350px] z-10 text-center lg:py-40 py-20"
        data-aos="fade-up"
      >
        <Image
          src={Images.bankfooter}
          alt="Bank Footer"
          width={180}
          height={180}
          className="mx-auto pb-10"
          data-aos="fade-up"
        />

        <h2
          className="pb-4 leading-none text-center text-5xl text-white"
          data-aos="fade-up"
        >
          Accelerate Growth with Our Connected <br /> Banking
        </h2>

        <div
          className="flex flex-wrap justify-center gap-3 mt-12"
          data-aos="fade-up"
        >
          <Link href="/" className="flex items-center gap-2 banner-button">
            Launch API
          </Link>
          <Link href="/" className="flex items-center gap-2 banner-button">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
