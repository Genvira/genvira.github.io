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
viral_engineering:
  - image_path: /assets/images/home/stock-images/pexels-photo-5726794-600.webp
    srcset: "/assets/images/home/stock-images/pexels-photo-5726794-216.webp 216w, /assets/images/home/stock-images/pexels-photo-5726794-360.webp 360w, /assets/images/home/stock-images/pexels-photo-5726794-600.webp 600w, /assets/images/home/stock-images/pexels-photo-5726794-1000.webp 1000w"
    sizes: (max-width 37.5em) calc(100vw-2em), 41vw
    image_class: aspect-ratio__3-2
    title: Viral Engineering
    alt: A woman looking through a microscope 
    excerpt: |
      Genvira specializes in viral engineering. We design, construct and characterize customized RNA/DNA viruses which are non-pathogenic, long term stability and have low immunogenicity and high transduction efficiency. These viruses are utilized in:
      - Cancer Immunotherapy
      - Gene therapy
      - Vaccines

cancer_immunotherapy_gene_therapy:
  - image_path: /assets/images/home/stock-images/pexels-photo-4033148-600.webp
    srcset: "/assets/images/home/stock-images/pexels-photo-4033148-216.webp 216w, /assets/images/home/stock-images/pexels-photo-4033148-360.webp 360w, /assets/images/home/stock-images/pexels-photo-4033148-600.webp 600w, /assets/images/home/stock-images/pexels-photo-4033148-1000.webp 1000w"
    sizes: (max-width 37.5em) calc(100vw-2em), 41vw
    image_class: aspect-ratio__3-2
    title: Cancer Immunotherapy & Gene Therapy
    alt: Man Doing A Sample Test In The Laboratory 
    excerpt: Our bioengineered DNA viruses such as Adeno-associated viruses (AAVs) and Myxoma viruses are used to help deliver genes of interest into target mammalian cells and tissues which then generates new instructions for the cells to control the progression of diseases such as cancers, retinal disorders, etc. We also conduct a wide range of functional bioassays to screen and test the potency and immunogenicity of our bioengineered viruses.

vaccines:
  - image_path: /assets/images/home/stock-images/pexels-photo-3735747-600.webp
    srcset: "/assets/images/home/stock-images/pexels-photo-3735747-216.webp 216w, /assets/images/home/stock-images/pexels-photo-3735747-360.webp 360w, /assets/images/home/stock-images/pexels-photo-3735747-600.webp 600w, /assets/images/home/stock-images/pexels-photo-3735747-1000.webp 1000w"
    sizes: (max-width 37.5em) calc(100vw-2em), 41vw
    image_class: aspect-ratio__3-2
    title: Viral Engineering
    alt: Person Holding Test Tubes
    excerpt: Our world-class laboratory and experts can create a vaccine for all your research and clinical needs. For example, because our SARS CoV-2 pseudoviruses don’t replicate, they are safe and can easily be applicable in vitro and in vivo studies by researchers who don’t have BSL3 and BSL laboratories.

feature_row:
  # Row 1
  - image_path: /assets/images/home/svg-icons/virus-lab-research-test-tube.svg
    image_type: svg
    title: Cell and Viral Engineering
    excerpt: Delivering high-quality engineered vectors and cells
    item_class: "feature-row__small-image feature-row__square-image"

  - image_path: /assets/images/home/svg-icons/route.svg
    image_type: svg
    title: End-to-End Engineering
    excerpt: From product design to engineering, production, & testing
    item_class: "feature-row__small-image feature-row__square-image"

  - image_path: /assets/images/home/svg-icons/heartbeat.svg
    image_type: svg
    title: Formulation
    excerpt: Achieve viral stability before and after delivery
    item_class: "feature-row__small-image feature-row__square-image"

  # Row 2
  - title: Responsive layouts
    image_type: svg
    image_path: /assets/images/home/svg-icons/flask.svg
    excerpt: In vitro viral vector characterization
    item_class: "feature-row__small-image feature-row__square-image"

  - title: Animal Models
    image_type: svg
    image_path: /assets/images/home/svg-icons/veterinary-care.svg
    excerpt: In vivo efficacy studies
    item_class: "feature-row__small-image feature-row__square-image"

  - title: Process Development and Small-Scale Production
    image_type: svg
    image_path: /assets/images/home/svg-icons/pills-3-bold-duotone.svg
    excerpt: Optimization of process and yield
    item_class: "feature-row__small-image feature-row__square-image"

  # Row 3
  - title: FDA Regulatory Filings
    image_type: svg
    image_path: /assets/images/home/svg-icons/document-medicine-bold-duotone.svg
    excerpt: IND & CMC filing expertise
    item_class: "feature-row__small-image feature-row__square-image"

  - title: GLP-Like Studies
    image_type: svg
    image_path: /assets/images/home/svg-icons/lab-research-rounded.svg
    excerpt: Studies under GLP guideline
    item_class: "feature-row__small-image feature-row__square-image"

  - title: MVS to BDS Production
    image_type: svg
    image_path: /assets/images/home/svg-icons/heart-plus-rounded.svg
    excerpt: Transition and scalability consultation
    item_class: "feature-row__small-image feature-row__square-image"
---

<!-- Three images section -->
{% include feature_row
  id="viral_engineering"
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

## Our Services
{% include feature_row %}

## Supported by
{% include supported_by %}
