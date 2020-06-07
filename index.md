---
---

# {{ site.data.settings.title }}

This is an overview of a modern book-production process, designed to produce multi-format publications from a single, version-controlled content source. Team members can work simultaneously and remotely. This process might span weeks, months or years.

{% comment %}
A phase comprises one or more stages. Each stage contains one or more tasks,
which can happen at the same time. List a phase's tasks separated by commas.
Use semicolons to separate tasks into stages.
Each task name corresponds to a markdown file in the tasks folder.
Each task's image has the same filename as the task.
{% endcomment %}

{% include phase
    name="Setup"
    tasks="conceptualisation; commission-authors, tech-infrastructure"
%}

{% include phase
    name="Creation"
    tasks="writing; ms-review; ms-development; copy-editing, design, permissions"
%}

{% include phase
    name="Production"
    tasks="digitisation, artwork, stylesheets, software-development; page-refinement, proofreading; indexing; testing"
%}

{% include phase
    name="Publication"
    tasks="deploy-and-distribute; maintenance"
    position="last"
%}
