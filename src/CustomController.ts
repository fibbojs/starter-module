import { FController as FControllerCore } from '@fibbojs/3d'
import type { FControllerOptions } from '@fibbojs/3d'

/**
 * @description A custom controller for a component.
 */
export class CustomController extends FControllerCore {
  constructor(options: FControllerOptions) {
    super(options)
  }

  /**
   * @description Update the controller. Should be called every frame.
   * The purpose of `onFrame` on FController is to update the component's transform in the desired way.
   * Any rendering process should be done on the component, not here.
   * @param delta The time since the last frame.
   */
  onFrame(delta: number): void {
    // Rotate the component by 1 degree every frame
    this.component.rotationDegreeX += 1
  }
}
