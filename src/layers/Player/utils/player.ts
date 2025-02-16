import { Group, Raycaster, Vector3 } from "three";
import { Api } from "@react-three/cannon";
import { MutableRefObject } from "react";
import { PlayerState } from "../types/player";

export function createPlayerState(
  bodyApi: Api<Group>[1],
  position: MutableRefObject<Vector3>,
  velocity: MutableRefObject<Vector3>,
  lockControls: MutableRefObject<boolean>,
  raycaster: Raycaster
): PlayerState {
  return {
    position: {
      set: (pos: Vector3) => {
        bodyApi.position.copy(pos);
        position.current.copy(pos);
      },
      get: () => position.current,
    },
    velocity: {
      set: (vec: Vector3) => {
        bodyApi.velocity.copy(vec);
        velocity.current.copy(vec);
      },
      get: () => velocity.current,
    },
    controls: {
      lock: () => (lockControls.current = true),
      unlock: () => (lockControls.current = false),
      isLocked: () => lockControls.current,
    },
    raycaster,
  };
}
