"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas/canvas-reveal-effect";
import PhaseIcon from "./ui/canvas/phase-icon";
import Card from "./ui/canvas/card";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning and Strategy"
          icon={<PhaseIcon phase="Phase 1" />}
          description="We'll colaborate to map out your website goals, target audience and key functionalities. We'll discuss things like site structure, navigation and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development and Process update"
          icon={<PhaseIcon phase="Phase 2" />}
          description="Once we agree to the plan, I cue my edm playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Deployment and Launch"
          icon={<PhaseIcon phase="Phase 3" />}
          description="This is where the magic happens! Based on the approved design, i'll deploy and launch your website for the target audience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;
