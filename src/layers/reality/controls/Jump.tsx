import { useEffect } from "react";
import { usePlayer } from "../../reality/layers/player";
import { Vector3 } from "three";

type JumpProps = any;

export default function Jump(props: JumpProps) {
  const { velocity } = usePlayer();

  useEffect(() => {
    const jump = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === " ") {
        velocity.set(velocity.get().add(new Vector3(0, 5, 0)));
      }
    };

    document.addEventListener("keypress", jump);
    return () => {
      document.removeEventListener("keypress", jump);
    };
  }, [velocity]);

  return <></>;
}
