---
layout: academic
permalink: /
title: "Home"
display_title: "Qisheng Zhao"
description: "Qisheng Zhao, Embodied Manipulation Algorithm Engineer at Manifold AI, focusing on VLA and WAM pre-training."
redirect_from:
  - /about/
  - /about.html
---

<div class="profile-intro">
  <img class="profile-photo" src="{{ '/images/ZQS-03.png' | relative_url }}" alt="Qisheng Zhao" width="174" height="174">
  <div>
    <p class="profile-name">Qisheng Zhao (<span class="name-zh" lang="zh">赵祺晟</span>)</p>
    <p>{{ site.author.role }}<br>{{ site.author.employer }}</p>
    <p class="profile-email">
      <span class="email-row"><span class="email-label">Personal Email:</span><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></span>
      <span class="email-row"><span class="email-label">Work Email:</span><a href="mailto:{{ site.author.work_email }}">{{ site.author.work_email }}</a></span>
    </p>
  </div>
</div>

## About

My current focus is pre-training **VLA and WAM** foundation models for embodied manipulation. My earlier work spans vision-language navigation (VLN), autonomous exploration and navigation, and multi-robot collaborative planning.

At Peking University, I worked with [Prof. Zhongkui Li (李忠奎)](https://www.zhongkuili-pku.com/cn/) and [Prof. Meng Guo (国萌)](https://mengguo.github.io/personal_site/index.html).

{% include background.html %}

## Publications

<p class="author-note">* Equal contribution</p>
<div class="paper-list">
  {% assign papers = site.publications | sort: 'date' | reverse %}
  {% for paper in papers %}{% include paper-row.html paper=paper %}{% endfor %}
</div>

## Projects

<div class="project-list">
  {% assign featured_projects = site.data.projects | where: 'featured', true %}
  {% for project in featured_projects %}{% include project-row.html project=project link_title=true %}{% endfor %}
</div>

<p class="all-projects-link"><a href="{{ '/projects/' | relative_url }}">View all projects & demos →</a></p>
