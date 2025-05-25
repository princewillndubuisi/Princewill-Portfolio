import { Html, useProgress } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="text-muted-foreground text-2xl text-center font-normal"
    >
      {progress}% Loaded
    </Html>
  );
};
