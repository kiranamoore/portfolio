import React, { useEffect, useRef } from "react";

// Dynamically import the model-viewer library only on the client
const ModelViewer3D = ({
  src,
  alt,
  ar = false,
  autoRotate = true,
  cameraControls = true,
  style = {},
}: {
  src: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only import on client
    import("@google/model-viewer");
  }, []);

  return (
    <div ref={ref} style={style}>
      {/* @ts-expect-error - model-viewer is a custom element that TypeScript doesn't recognize */}
      <model-viewer
        src={src}
        alt={alt || "3D model"}
        ar={ar ? "true" : undefined}
        auto-rotate={autoRotate ? "true" : undefined}
        camera-controls={cameraControls ? "true" : undefined}
        style={{ width: "100%", height: "100%", background: "#222", borderRadius: "1rem" }}
        shadow-intensity="1"
        exposure="1"
        interaction-prompt="auto"
        touch-action="pan-y"
      />
    </div>
  );
};

export default ModelViewer3D; 