---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: https://images.pexels.com/photos/4021781/pexels-photo-4021781.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1300&dpr=1
  actions:
    - label: "About Us"
      url: "/about"
title: Genvira
excerpt: >
  We Build Innovative Viral Based Therapeutics<br />

feature_row:
  # Row 1
  - image_path: https://files.svgcdn.io/covid/virus-lab-research-test-tube.svg
    title: Cell and Viral Engineering
    excerpt: Delivering high-quality engineered vectors and cells
    item_class: "feature-row__small-image"

  - image_path: https://files.svgcdn.io/material-symbols/route.svg
    title: End-to-End Engineering
    excerpt: From product design to engineering, production, & testing
    item_class: "feature-row__small-image"

  - image_path: https://files.svgcdn.io/fontisto/heartbeat.svg
    title: Formulation
    excerpt: Achieve viral stability before and after delivery
    item_class: "feature-row__small-image"

  # Row 2
  - title: Responsive layouts
    image_path: https://files.svgcdn.io/icon-park-twotone/flask.svg
    excerpt: In vitro viral vector characterization
    item_class: "feature-row__small-image"

  - title: Animal Models
    image_path: https://files.svgcdn.io/map/veterinary-care.svg
    excerpt: In vivo efficacy studies
    item_class: "feature-row__small-image"

  - title: Process Development and Small-Scale Production
    image_path: https://files.svgcdn.io/solar/pills-3-bold-duotone.svg
    excerpt: Optimization of process and yield
    item_class: "feature-row__small-image"

  # Row 3
  - title: FDA Regulatory Filings
    image_path: https://files.svgcdn.io/solar/document-medicine-bold-duotone.svg
    excerpt: IND & CMC filing expertise
    item_class: "feature-row__small-image"

  - title: GLP-Like Studies
    image_path: https://files.svgcdn.io/material-symbols/lab-research-rounded.svg
    excerpt: Studies under GLP guideline
    item_class: "feature-row__small-image"

  - title: MVS to BDS Production
    image_path: https://files.svgcdn.io/material-symbols/heart-plus-rounded.svg
    excerpt: Transition and scalability consultation
    item_class: "feature-row__small-image"

supported_by:
  - url: https://feddev-ontario.canada.ca/
    image_path: /assets/images/supported-by/feddev-canada.svg
    alt: FedDev
  - url: https://www.ontario.ca/page/government-ontario
    image_path: /assets/images/supported-by/province-of-ontario.svg
    alt: Government of Ontario
  - url: https://www.mitacs.ca/
    image_path: /assets/images/supported-by/mitacs-logo-blue.svg
    alt: Mitacs
  - url: https://www.investottawa.ca/
    image_path: /assets/images/supported-by/invest-ottawa.svg
    alt: Invest Ottawa
  - url: https://www.obio.ca/
    image_path: /assets/images/supported-by/obio.svg
    alt: Obio
---

<!-- Three images section -->
{%
  include image_with_text
  reverse="true"
  image_path="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1134&h=675&dpr=1"
  alt="A woman looking through a microscope"
  text = 
"
### Viral Engineering
Genvira specializes in viral engineering. We design, construct and characterize customized RNA/DNA viruses which are non-pathogenic, long term stability and have low immunogenicity and high transduction efficiency. These viruses are utilized in:
- Cancer Immunotherapy
- Gene therapy
- Vaccines
"
%}
{%
  include image_with_text
  image_path="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1134&h=675&dpr=1"
  alt="Man Doing A Sample Test In The Laboratory"
  text = 
"
### Cancer Immunotherapy & Gene Therapy
Our bioengineered DNA viruses such as Adeno-associated viruses (AAVs) and Myxoma viruses are used to help deliver genes of interest into target mammalian cells and tissues which then generates new instructions for the cells to control the progression of diseases such as cancers, retinal disorders, etc. We also conduct a wide range of functional bioassays to screen and test the potency and immunogenicity of our bioengineered viruses.
"
%}
{%
  include image_with_text
  reverse="true"
  image_path="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1134&h=675&dpr=1"
  alt="Person Holding Test Tubes"
  text = 
"
### Vaccines
Our world-class laboratory and experts can create a vaccine for all your research and clinical needs. For example, because our SARS CoV-2 pseudoviruses don’t replicate, they are safe and can easily be applicable in vitro and in vivo studies by researchers who don’t have BSL3 and BSL laboratories.
"
%}
<!-- End Three images section -->

## Our Services
{% include feature_row %}

## Supported by
{% include supported_by %}
