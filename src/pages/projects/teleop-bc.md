---
layout: ../../layouts/ProjectLayout.astro
title: Learning from Demonstration in MuJoCo
summary: 'An undergraduate imitation-learning project connecting human teleoperation, behavioral cloning, and autonomous rollouts.'
tags:
  - Imitation learning
  - MuJoCo
  - PyTorch
---

## Overview

TeleOp-BC studies behavioral cloning for a simulated box-pushing task. Demonstrations can be collected with a keyboard or MediaPipe hand tracking, and a learned policy then controls the same environment autonomously.

## Human teleoperation

<figure class="project-figure">
  <video controls loop muted playsinline preload="metadata" poster="/images/projects/teleop-human.webp" width="640" height="215" aria-label="Human hand-tracking teleoperation of the MuJoCo cube">
    <source src="/images/projects/teleop-human.mp4" type="video/mp4" />
    <a href="/images/projects/teleop-human.mp4">Open the teleoperation demonstration</a>.
  </video>
  <figcaption>My webcam hand-tracking input alongside the MuJoCo pushing simulation, from the original training demonstration.</figcaption>
</figure>

## Implementation

The MuJoCo/Gymnasium environment uses a one-dimensional slider and a randomized target. Observations contain block position, block velocity, and relative distance to the target. The policy predicts a normalized force, scaled to a maximum magnitude of 10 N.

The PyTorch policy is a `3 → 64 → 64 → 1` multilayer perceptron with a tanh output. Training and rollout use the same saved observation-normalization statistics. Evaluation compares force trajectories and total mechanical work per episode.

## Results

The repository includes four plotted evaluation episodes. In those examples, human teleoperation used roughly twice the mechanical work of the learned policy. The force traces show a smoother learned control pattern alongside more reactive human corrections.

<figure class="project-figure">
  <img src="/images/projects/teleop-work.webp" alt="Four-episode comparison of mechanical work for human and policy control" width="1470" height="804" loading="lazy" />
  <figcaption>Recorded work per episode. This is a small rollout comparison, not a general efficiency or task-success benchmark.</figcaption>
</figure>

<figure class="project-figure">
  <img src="/images/projects/teleop-force.webp" alt="Normalized force traces comparing human actions and behavioral-cloning policy actions" width="1494" height="836" loading="lazy" />
  <figcaption>Human and policy force traces, with the original repository annotations.</figcaption>
</figure>

## Scope

The task is one-dimensional and simulation-only. Noisy demonstrations and the trade-off between smooth actions and rapid correction are important limitations. The project provided an earlier testbed for the teleoperation-to-learning workflow later used with Rotom.

[Code, setup, and rollout videos](https://github.com/cadenpage/TeleOp-BC)
