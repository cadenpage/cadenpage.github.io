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

Team: Caden Page, Nikhil Pai, Lambert Ike, and Robin Sambuis. The project was supported by the Human Enabled Robotics Laboratory at UT Austin.

## Methods

The project used two depth-estimation pipelines:

- A CNN baseline that predicts one scalar depth from a captured image.
- A dense pipeline using four phase-shifted captures and an ambient frame. It recovers and unwraps phase, predicts a global depth anchor, and estimates per-pixel residual shape.

Known flat-plane depths and ramp geometry provided ground truth. Image preprocessing included camera undistortion and region-of-interest selection. Evaluation included model-based depth measurements and a human depth-perception survey.

## Reported results

The final presentation reports a 0.73 mm flat-plane mean depth error, 2.43 mm ramp dense mean absolute error, and 0.13 mm relative shape error. Relative shape error removes the map-level depth offset; it is different from absolute depth accuracy.

## Limitations

Validation used controlled flat planes and ramps. Tissue, motion, irregular surfaces, and specular surfaces were not validated. Integration into endoscopic hardware remained future work.

These notes summarize the team's final presentation and project documentation.
