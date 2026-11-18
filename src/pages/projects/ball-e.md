---
layout: ../../layouts/ProjectLayout.astro
title: 'Ball-E: Autonomous Basketball Robot'
summary: 'An undergraduate robotics competition project integrating navigation, embedded control, targeting, and scoring.'
tags:
  - Embedded systems
  - Autonomous navigation
  - Robotics competition
---

## Overview

Ball-E is an autonomous competition robot designed to navigate from a randomized starting position, identify the correct basket from IR-beacon signals, and execute a shooting sequence.

<div class="project-gallery">
  <figure class="project-figure">
    <img src="/images/projects/balle-robot.webp" alt="Ball-E physical robot with competition trophies" width="1200" height="1600" loading="lazy" />
    <figcaption>The physical robot and competition trophies, from the project repository.</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="/images/projects/balle-cad.webp" alt="Ball-E mechanical CAD assembly" width="956" height="960" loading="lazy" />
    <figcaption>The robot assembly in CAD.</figcaption>
  </figure>
</div>

## System design

A Raspberry Pi handles mission logic, positioning, target selection, and shooting-state progression. A Pololu A-Star 32U4 handles motor timing, encoder feedback, and PID line following. The two exchange command packets and telemetry over serial.

The sensing and actuation stack includes ultrasonic range sensors, a QTR line-sensor array, three IR-receiver channels, differential drive, and a servo-controlled aiming and launch mechanism.

## Demonstrated capabilities

- Autonomous navigation and alignment using field geometry, range sensing, and line following.
- Basket selection from left, middle, and right IR-beacon inputs.
- Coordination of navigation, aiming, and the shooting sequence through a mission-state controller.
- Hardware tuning for motor bias, line-following oscillation, electrical noise, and sensor dropouts.

The repository includes separate navigation, shooting, and competition-run videos. Some mission phases use timed transitions; explicit state estimation and non-blocking fault recovery are documented directions for improvement.

[Code and competition videos](https://github.com/cadenpage/Ball-E)
