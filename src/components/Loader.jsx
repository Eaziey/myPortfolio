import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* 
        Provide variables here so you can tweak them per instance if needed.
        We also set the mask color and its dark mode override via CSS vars. 
        The mobile scaling replaces the old `zoom` hack.
      */}
      <div
        className={[
          "loader relative",
          "[--duration:3s]",
          "[--primary:#38b6ff]",
          "[--primary-light:#00a6ff]",
          "[--primary-rgba:rgba(204,0,255,0.04)]",
          "[--mask-bg:#000000] dark:[--mask-bg:#ffffff]",
          "max-[480px]:scale-[0.44]",
        ].join(" ")}
      >
        <div className="box box0">
          <div />
        </div>
        <div className="box box1">
          <div />
        </div>
        <div className="box box2">
          <div />
        </div>
        <div className="box box3">
          <div />
        </div>
        <div className="box box4">
          <div />
        </div>
        <div className="box box5">
          <div />
        </div>
        <div className="box box6">
          <div />
        </div>
        <div className="box box7">
          <div />
        </div>
        <div className="ground">
          <div />
        </div>
      </div>
    </div>
  );
};

export default Loader;