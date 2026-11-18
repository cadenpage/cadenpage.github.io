---
layout: ../../layouts/ProjectLayout.astro
title: Probabilistic Vision Modeling
summary: 'Undergraduate course project comparing CNN and transformer models for monocular depth regression and per-pixel uncertainty.'
tags:
  - Undergraduate course project
  - Monocular depth
  - Uncertainty estimation
---

## Overview

This team project compared a FastDepth CNN baseline and a Dense Prediction Transformer (DPT) for depth estimation from RGB images. Both models were adapted to predict depth and per-pixel uncertainty.

Team: Caden Page, Harsh Gaglani, Sohan Gupta, and Sanat Nair.

## Methods

The comparison used NYU Depth V2 data with a shared train/test split and consistent RGB-depth pairing. Pretrained backbones were frozen while decoders and parallel depth/uncertainty heads were trained for five epochs.

Training used a heteroscedastic Laplace negative log-likelihood with a scale-invariant centered residual in log-depth space. Evaluation considered raw and median-scaled depth error, error–uncertainty correlation, and qualitative uncertainty maps.

## Reported results

The final presentation reports:

| Model | Unscaled RMSE | Median-scaled RMSE | Unscaled error–uncertainty correlation |
| --- | ---: | ---: | ---: |
| FastDepth | 0.955 | 0.752 | 0.474 |
| DPT | 14.984 | 0.513 | 0.772 |

DPT had lower median-scaled error, while FastDepth had lower unscaled error. This distinction matters: stronger relative scene geometry does not necessarily imply correct metric depth scale.

## Qualitative comparison

<figure class="project-figure">
  <img src="/images/projects/depth-reference.webp" alt="RGB piano scene and corresponding ground-truth depth" width="1309" height="397" loading="lazy" />
  <figcaption>Input scene and ground truth from the final presentation. The printed sample-level metrics are separate from the aggregate table above.</figcaption>
</figure>

<figure class="project-figure">
  <img src="/images/projects/depth-dpt.webp" alt="DPT prediction, uncertainty, and absolute error for the piano scene" width="1428" height="372" loading="lazy" />
  <figcaption>DPT: predicted depth, predicted uncertainty, and absolute error.</figcaption>
</figure>

<figure class="project-figure">
  <img src="/images/projects/depth-fastdepth.webp" alt="FastDepth prediction, uncertainty, and absolute error for the same scene" width="1225" height="397" loading="lazy" />
  <figcaption>FastDepth: the corresponding depth, uncertainty, and error maps.</figcaption>
</figure>

## Limitations

This was a short training comparison on one dataset. Error–uncertainty correlation measures association with error; it does not establish that uncertainty is calibrated. The results should be read within this experimental setup.

These notes summarize the team's final presentation and project documentation.
