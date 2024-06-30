import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";
import * as THREE from "three";


const Model = () => {
  const [size, setSize] = useState("small");

  const [model, setModel] = useState({
    title: "iPhone 15 pro in Natural Titanium",
    color: ["#8F8A81", "FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // Camera control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    // Ensure that the camera controls and model groups are reset when the model changes
    if (cameraControlSmall.current) cameraControlSmall.current.reset();
    if (cameraControlLarge.current) cameraControlLarge.current.reset();
    if (small.current) small.current.rotation.set(0, 0, 0);
    if (large.current) large.current.rotation.set(0, 0, 0);
  }, [model, size]);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[50vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              eventSource={document.getElementById("root")}
            >
              <View track={cameraControlSmall} index={1}>
                <group ref={small} />
              </View>
              <View track={cameraControlLarge} index={2}>
                <group ref={large} />
              </View>
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <div className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
