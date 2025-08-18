---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: "/assets/images/home/stock-images/pexels-photo-4021781-1280.webp"
  overlay_image_set:
    - url: "/assets/images/home/stock-images/pexels-photo-4021781-1920.webp"
      size: 2x # 1920w
    - url: "/assets/images/home/stock-images/pexels-photo-4021781-1280.webp"
      size: 1x # 1280w
  overlay_image_set_2:
    - url: "/assets/images/home/stock-images/pexels-photo-4021781-1920.webp"
      size: 1920w
    - url: "/assets/images/home/stock-images/pexels-photo-4021781-1280.webp"
      size: 1280w
    - url: "/assets/images/home/stock-images/pexels-photo-4021781-854.webp"
      size: 854w
    - url: "/assets/images/home/stock-images/pexels-photo-4021781-640.webp"
      size: 640w
  actions:
    - label: "About Us"
      url: "/about"
title: Genvira
excerpt: >
  We Build Innovative Viral Based Therapeutics<br />

head_scripts:
  - url: /assets/js/plugins/svg-inject.js

# Three images section
viral_based_therapeutics:
  - image_path: "/assets/images/home/stock-images/pexels-photo-5726794-600.webp"
    srcset:
      - url: "/assets/images/home/stock-images/pexels-photo-5726794-1000.webp"
        size: 1000w
      - url: "/assets/images/home/stock-images/pexels-photo-5726794-600.webp"
        size: 600w
      - url: "/assets/images/home/stock-images/pexels-photo-5726794-360.webp"
        size: 360w
      - url: "/assets/images/home/stock-images/pexels-photo-5726794-216.webp"
        size: 216w
    sizes:
      - "(max-width 37.5em) calc(100vw-2em)"
      - "41vw"
    image_class: aspect-ratio__3-2
    title: Viral-based Therapeutics
    alt: A woman looking through a microscope 
    excerpt: |
      Genvira specializes in viral engineering.
      We design, construct, and characterize customized RNA/DNA viral vectors that are **non-pathogenic, genetically stable, exhibit low immunogenicity, and deliver high transductions efficiency***.
      Our platform underpins pipeline and partnered programs in:

      - Cancer Immunotherapy
      - Gene therapy
      - Vaccines

cancer_immunotherapy_gene_therapy:
  - image_path: /assets/images/home/stock-images/pexels-photo-4033148-600.webp
    srcset:
      - url: "/assets/images/home/stock-images/pexels-photo-4033148-1000.webp"
        size: 1000w
      - url: "/assets/images/home/stock-images/pexels-photo-4033148-600.webp"
        size: 600w
      - url: "/assets/images/home/stock-images/pexels-photo-4033148-360.webp"
        size: 360w
      - url: "/assets/images/home/stock-images/pexels-photo-4033148-216.webp"
        size: 216w
    sizes:
      - "(max-width 37.5em) calc(100vw-2em)"
      - "41vw"
    image_class: aspect-ratio__3-2
    title: Cancer Immunotherapy & Gene Therapy
    alt: Man Doing A Sample Test In The Laboratory 
    excerpt: |
      Our bioengineered viruses are built to deliver genes of interest to targeted mammalian cells and tissues, providing new cellular instructions to modulate diseases including **cancers** and **rare disease**. Our development engine integrates **potency, durability, and immunogenicity** assays to rank candidates, de-risk translation, and advance the most promising vectors into **preclinical and co-development** pathways.

vaccines:
  - image_path: /assets/images/home/stock-images/pexels-photo-3735747-600.webp
    srcset:
      - url: "/assets/images/home/stock-images/pexels-photo-3735747-1000.webp"
        size: 1000w
      - url: "/assets/images/home/stock-images/pexels-photo-3735747-600.webp"
        size: 600w
      - url: "/assets/images/home/stock-images/pexels-photo-3735747-360.webp"
        size: 360w
      - url: "/assets/images/home/stock-images/pexels-photo-3735747-216.webp"
        size: 216w
    sizes:
      - "(max-width 37.5em) calc(100vw-2em)"
      - "41vw"
    image_class: aspect-ratio__3-2
    title: Vaccines
    alt: Person Holding Test Tubes
    excerpt: |
      We are advancing **vector-enabled cancer vaccines** and co-developing programs with partners to move rapidly from discovery to IND.
      Our platform encodes **tumor neoantigens and immune modulators** into optimized viral vectors to drive durable, tumor-specific T-cell responses. 
---

<!-- Three images section -->
# Viral Vectors
<h2 style="display: none;">What we do</h2>
{% include feature_row
  id="viral_based_therapeutics"
  type="left"
  hx="h3"
  class="no-bottom-border"
%}
{% include feature_row
  id="cancer_immunotherapy_gene_therapy"
  type="right"
  hx="h3"
  class="no-bottom-border"
%}
{% include feature_row
  id="vaccines"
  type="left"
  hx="h3"
  class="no-bottom-border"
%}
<!-- End Three images section -->

## Supported by
{% include supported_by %}
