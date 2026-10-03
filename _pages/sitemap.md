---
layout: academic
title: "Sitemap"
permalink: /sitemap/
---

- [Home]({{ '/' | relative_url }})
- [Publications]({{ '/publications/' | relative_url }})
- [Projects]({{ '/projects/' | relative_url }})
- [Blogs]({{ '/blogs/' | relative_url }})
- [Education]({{ '/' | relative_url }}#education)
- [Experience]({{ '/' | relative_url }}#experience)

## Papers

{% assign papers = site.publications | sort: 'date' | reverse %}{% for paper in papers %}
- [{{ paper.title }}]({{ paper.url | relative_url }})
{% endfor %}

[XML sitemap]({{ '/sitemap.xml' | relative_url }})
