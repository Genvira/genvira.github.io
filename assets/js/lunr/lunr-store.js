---
# A JS array of articles in the collections
layout: none
---

var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}
    {%- for doc in docs -%}
      {%- if doc.header.teaser -%}
        {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}
      {
        "type": "collection",
        "title": {{ doc.title | jsonify }},
        "keywords": {{ doc.keywords | jsonify }},
        "excerpt":
          {%- if site.search_full_content == true -%}
            {{ doc.content | markdownify | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
            strip_html | strip_newlines | normalize_whitespace | jsonify }},
          {%- else -%}
            {{ doc.content | markdownify | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
            strip_html | strip_newlines | normalize_whitespace | truncatewords: 50 | jsonify }},
          {%- endif -%}
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | relative_url | jsonify }},
        "teaser": {{ teaser | relative_url | jsonify }}
      }{%- unless forloop.last and l -%},{%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}{%- if site.lunr.search_within_pages -%},
  {%- assign pages = site.pages | where_exp: 'doc', 'doc.search != false' | where_exp: 'doc', 'doc.title != null' -%}
  {%- for doc in pages -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
  {
    "type": "page",
    "title": {{ doc.title | jsonify }},
    "keywords": {{ doc.keywords | jsonify }},
    "excerpt":
        {%- if site.search_full_content == true -%}
          {{ doc.content | markdownify | newline_to_br |
            replace:"<br />", " " |
            replace:"</p>", " " |
            replace:"</h1>", " " |
            replace:"</h2>", " " |
            replace:"</h3>", " " |
            replace:"</h4>", " " |
            replace:"</h5>", " " |
            replace:"</h6>", " "|
          strip_html | strip_newlines | normalize_whitespace | jsonify }},
        {%- else -%}
          {{ doc.content | markdownify | newline_to_br |
            replace:"<br />", " " |
            replace:"</p>", " " |
            replace:"</h1>", " " |
            replace:"</h2>", " " |
            replace:"</h3>", " " |
            replace:"</h4>", " " |
            replace:"</h5>", " " |
            replace:"</h6>", " "|
          strip_html | strip_newlines | normalize_whitespace | truncatewords: 50 | jsonify }},
        {%- endif -%}
      "url": {{ doc.url | absolute_url | jsonify }}
  }{%- unless forloop.last and l -%},{%- endunless -%}
  {%- endfor -%}
{%- endif -%}]
