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

Team: Harsh Gaglani, Sohan Gupta, Sanat Nair, and Caden Page.

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

## Limitations

This was a short training comparison on one dataset. Error–uncertainty correlation measures association with error; it does not establish that uncertainty is calibrated. The results should be read within this experimental setup.

These notes summarize the team's final presentation and project documentation.
