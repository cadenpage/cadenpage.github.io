---
layout: ../../layouts/ProjectLayout.astro
title: 'Rotom: Robot Learning and Manipulation Platform'
summary: 'A robot-arm project begun during undergraduate study, combining mechanical design, control, perception, and learned-policy deployment.'
tags:
  - Robot learning
  - ROS 2
  - Manipulation
---

## Overview

Rotom is my custom 4-DoF robot arm, built around Feetech STS3215 servos and a Jetson Orin Nano. The project connects robot design and low-level motor control to ROS 2, visual servoing, demonstration collection, and imitation learning.

<div class="project-gallery">
  <figure class="project-figure">
    <img src="/images/projects/rotom-hardware.webp" alt="Physical Rotom robot arm with an ArUco-tagged tool" width="1600" height="1550" loading="lazy" />
    <figcaption>Rotom hardware, from the project repository.</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="/images/projects/rotom-cad.webp" alt="CAD assembly of the Rotom arm" width="1026" height="1044" loading="lazy" />
    <figcaption>The mechanical design in CAD.</figcaption>
  </figure>
</div>

## Control and integration

I developed a reduced task-space controller for tabletop motion rather than commanding an unconstrained 6D Cartesian twist to a 4-DoF mechanism. The controller maintains planar position and tool pitch, limits task-space velocity and acceleration, and solves a reduced joint configuration with an analytic wrist-pitch relation.

The teleoperation path is:

`Mac webcam → MediaPipe hand tracking → UDP → ROS task-space commands → controller → motor bridge → arm`

The same interface accepts learned-policy actions. Demonstrations are recorded with camera images, joint state, and task-space actions, converted into a LeRobot-compatible dataset, and used by a separate diffusion-policy training repository. The deployed policy consumes a front-camera image and four joint states and outputs planar action increments `[dx, dy]`.

## Demonstrated milestones

- Closed-loop ArUco marker following on the physical arm through MoveIt Servo and the motor bridge.
- Webcam-based task-space teleoperation for collecting real-robot demonstrations.
- A complete data-collection, training, and ROS policy-deployment path using the same action interface as teleoperation.
- Improvements to stale-transform handling, command smoothing, camera stability, and ROS middleware configuration during hardware integration.

The current learning setup uses a fixed camera and controlled tabletop tasks. Broader task generalization and quantitative policy benchmarking remain separate evaluation work.

## Code and demonstrations

[Robot platform and demonstration videos](https://github.com/cadenpage/rotom) · [Diffusion-policy training](https://github.com/cadenpage/diffusion-policy)
