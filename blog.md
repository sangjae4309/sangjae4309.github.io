---
layout: null
title: "Blog — Sangjae Park"
permalink: /blog/
---
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="alternate" type="text/plain" href="{{ '/llms.txt' | relative_url }}" title="LLM & AI Crawler Index">

{% seo %}
    <link rel="stylesheet" href="{{ "/assets/css/style.css?v=" | relative_url }}">
  </head>
  <body class="post-page-body">
    <header class="post-top-nav">
      <div class="post-top-nav-inner">
        <a href="{{ '/' | relative_url }}" class="brand-name">Sangjae Park</a>
        <nav class="post-top-links" aria-label="Primary navigation">
          <a href="{{ '/' | relative_url }}">Home</a>
          <a href="{{ '/blog/' | relative_url }}" class="active">Blog</a>
        </nav>
      </div>
    </header>

    <main class="blog-index-shell">
      <div class="blog-index-header">
        <h1>Notes &amp; Articles</h1>
        <p>Notes on RTL/SoC microarchitecture, FPGA &amp; High-Level Synthesis (HLS), and deep learning systems.</p>
      </div>

      <div class="blog-index-list">
        {% for post in site.posts %}
        <article class="blog-index-item">
          <div class="blog-index-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
            <span class="meta-dot">·</span>
            <span>{{ post.reading_time | default: "6 min read" }}</span>
            {% if post.tags %}
            <span class="meta-dot">·</span>
            <span class="blog-index-tags">{{ post.tags | join: " / " }}</span>
            {% endif %}
          </div>
          <h2 class="blog-index-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          {% if post.summary %}
          <p class="blog-index-summary">{{ post.summary }}</p>
          {% endif %}
        </article>
        {% endfor %}
      </div>
    </main>
  </body>
</html>
