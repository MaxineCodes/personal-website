---
title: "Simple Recursive C++ CPU Raytracer"
slug: "bubblesrt"
date: "2025-01-01"
thumbnail: "/projects/bubbles_rt_thumbnail.png"
description: "A simple CPU raytracer written in C++ I made in 2022"

banner: "https://cdnb.artstation.com/p/assets/images/images/081/980/627/large/maxine-meijboom-bubblesrender-metallic-01.jpg"
tags: ["Technical", "C++", "Raytracing", "Graphics"]
software: ["C++"]
featured: true
---

## Overview

A simple CPU raytracer written in C++ I made in 2022, supporting only the simplest SDF primitive, a sphere. It supports basic lambertian diffusion scattering, as well as dielectrics with refraction and metallic scattering.
It runs on a single CPU core without offloading any work to the GPU. Performance is abysmal and rendering a non-noisy image at higher resolution can take minutes. However, this project really got my feet wet in using mathematics and programming to turn abstract 3D data into a super cool image! Graphics programming is a lot of fun and this is the first of many to come.

![Banner](https://cdnb.artstation.com/p/assets/images/images/081/980/627/large/maxine-meijboom-bubblesrender-metallic-01.jpg)
![Render Result 1](https://cdnb.artstation.com/p/assets/images/images/081/980/661/large/maxine-meijboom-result-28-9-2022.jpg)
![Render Result Glass](https://cdna.artstation.com/p/assets/images/images/081/980/634/large/maxine-meijboom-bubblesrender-glass-02.jpg)
![Render Result 2](https://cdnb.artstation.com/p/assets/images/images/081/980/639/large/maxine-meijboom-renderoutput-22-06-2023.jpg)
![Render Result 0](https://cdnb.artstation.com/p/assets/images/images/081/980/659/large/maxine-meijboom-result-16-9-2022.jpg)
