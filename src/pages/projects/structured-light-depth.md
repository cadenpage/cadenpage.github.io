---
layout: ../../layouts/ProjectLayout.astro
title: 'SLICE: Depth Estimation via Passive Structured Light Cues'
summary: 'Undergraduate mechanical engineering capstone, April 2026.'
tags:
  - Undergraduate capstone
  - Structured light
  - Depth estimation
---

## Overview

This team project investigated whether an LED and a passive optical mask could create useful depth cues without a conventional projector. The prototype used a fixed camera, swappable masks, and calibration experiments at endoscopy-like working distances.

Team: Caden Page, Nikhil Pai, Lambert Ike, and Robin Sambuis. The project was supported by the [HeRo Lab (Human-Enabled Robotic Technology)](https://sites.utexas.edu/herolab/) at UT Austin.

<figure class="project-figure narrow-figure">
  <img src="/images/projects/slice-fixture.webp" alt="Calibration fixture CAD with a vertically adjustable target and depth scale" width="890" height="1321" loading="lazy" />
  <figcaption>The team's calibration-fixture CAD, reproduced from the final presentation.</figcaption>
</figure>

## Methods

The project used two depth-estimation pipelines:

- A CNN baseline that predicts one scalar depth from a captured image.
- A dense pipeline using four phase-shifted captures and an ambient frame. It recovers and unwraps phase, predicts a global depth anchor, and estimates per-pixel residual shape.

Known flat-plane depths and ramp geometry provided ground truth. Image preprocessing included camera undistortion and region-of-interest selection. Evaluation included model-based depth measurements and a human depth-perception survey.

## Reported results

The final presentation reports a 0.73 mm flat-plane mean depth error, 2.43 mm ramp dense mean absolute error, and 0.13 mm relative shape error. Relative shape error removes the map-level depth offset; it is different from absolute depth accuracy.

The ramp evaluation used 40 phase stacks: five heights, four ramp orientations, and two repeats per setting. The documented early dense models had 8–10 mm dense MAE; separating a global depth anchor from local residual shape reduced the reported dense MAE to 2.43 mm.

<figure class="project-figure">
  <img src="/images/projects/slice-depth.webp" alt="Ramp modulation, recovered phase, valid mask, ground truth, predicted depth, and prediction error" width="1600" height="923" loading="lazy" />
  <figcaption>Ramp reconstruction and error maps from the final presentation. The reported 0.13 mm relative error removes map-level bias.</figcaption>
</figure>

<figure class="project-figure narrow-figure">
  <img src="/images/projects/slice-scalar.webp" alt="Four structured-light input images labeled with actual and predicted scalar depths" width="968" height="952" loading="lazy" />
  <figcaption>Scalar-depth evaluation shown in the team's final presentation.</figcaption>
</figure>

## Limitations

Validation used controlled flat planes and ramps. Tissue, motion, irregular surfaces, and specular surfaces were not validated. Integration into endoscopic hardware remained future work.

These notes summarize the team's final presentation and project documentation.
