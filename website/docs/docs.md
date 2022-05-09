---
id: docs
title: Choosing your format
sidebar_label: Documentation purposes
sidebar_position: 6
# pagination_next: 
pagination_prev: html
---

The word *documentation* can be interpreted differently by many different people. For some, documentation will be API references or developer docs allowing for use of some complicated framework for their purposes; for others, it will be knowledge bases or simple user manuals.

### Markdown

[Markdown](/docs/md.md) is one of the most versatile markup languages, which allows it to be used in a variety of different documentation projects. It became the go-to language of documentation for open-source projects. With the help of static site generators you can quickly create a website that will showcase your documentation in a digestible way for users.

#### Docs-as-code

Markdown became lately also the basis of "docs-as-code" philosophy in documentation. It focuses on creation of docs in such a way as to create as little friction as possible between docs team and developers.
This is done by utilizing:

* Markdown, whose simple and lightweight syntax ensures that anyone, also from outside of a docs team, can contribute.
* Git for version control.
* Static site generators that create website out of MD files.

All of this makes for an approach that ensures devs and docs team are working in unison.

### HyperText Markup Language

[HTML](/docs/html.md) is commonly referred to as the most basic building block of the internet, in conjunction with CSS, which is responsible for appearance, and JavaScript which is responsible for backend of a webpage. HTML makes up the whole of web.

HTML is more of an output format than input format, meaning you will usually write in some other format (for example Markdown or DITA XML) and then convert it to a HTML output to publish your work on your webpage. However, there are cases where HTML is a writing format, for example knowledge bases in tools like Zendesk or Salesforce.

### Extensible Markup Language

[XML](/docs/xml.md), or more specifically DITA XML, is used mostly by big enterprises that need to publish a lot of documentation at the same time. Those enterprises utilize DITA XML in tandem with a robust Component Content Management System (CCMS), a repository of assets that are building blocks of documentation which can be picked up and inserted into a topic when needed. Moreover, CCMS usually also has either integration with popular version control systems like git, or has a proprietary solution implemented.

#### Darwin Information Typing Architecture

[DITA](/docs/xml.md/#darwin-information-typing-architecture) is especially useful thanks to the possibility of *single-sourcing* and *content reuse*.

Single sourcing - a concept in which document is written once and then stored separately from formatting layers. This allows the content to be published to multiple different outputs at the same time, where publishing tool will make sure to use proper formatting layer for each of the outputs.

Reuse - a practice in which a subset of content is created only once and then inserted whenever needed in the documentation through use of reference.
This allows for simultaneous update to multiple sets of docs whenever the aforementiond content that is reused has changed. You update one piece of content and all its reuses in other sets of docs will be updated accordingly.
