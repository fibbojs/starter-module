import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import { FComponentEmpty, FCuboid, FOrbitCamera, FScene } from '@fibbojs/3d'
import { fDebug } from '@fibbojs/devtools'
import './style.css'
import { CustomController } from '../../src'

(async () => {
  // Initialize the scene
  const scene = new FScene()
  scene.init()
  await scene.initPhysics()
  // Debug the scene
  if (import.meta.env.DEV)
    fDebug(scene)

  // Add ambient light
  const light = new THREE.AmbientLight(0xFFFFFF)
  scene.scene.add(light)

  // Create a ground
  const ground = new FCuboid(scene, {
    position: { x: 0, y: -0.1, z: 0 },
    scale: { x: 15, y: 0.1, z: 15 },
  })
  ground.initRigidBody({
    rigidBodyType: RAPIER.RigidBodyType.Fixed,
  })
  ground.setColor(0x348C31)
  scene.addComponent(ground)

  // Create a cube
  const cube = new FCuboid(scene, {
    position: { x: 0, y: 1, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
  })
  cube.initRigidBody({
    rigidBodyType: RAPIER.RigidBodyType.Fixed,
  })
  cube.controller = new CustomController({ component: cube })
  scene.addComponent(cube)

  // Add orbital camera controls
  scene.camera = new FOrbitCamera({
    target: new FComponentEmpty(scene),
  })
})()
