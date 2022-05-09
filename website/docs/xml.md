---
id: xml
title: Extensible Markup Language
sidebar_label: Extensible Markup Language
sidebar_position: 4
pagination_next: assets
pagination_prev: html
---

### XML

![xml logo](/img/xml-logo.svg)

[Extensible Markup Language](https://www.w3schools.com/xml/xml_whatis.asp) (XML) is a markup language similar in structure to HTML, with a major difference. Instead of using predefined tags like in HTML, you define your own tags specific to your needs. This provides an excellent way to store data in a format that is easy to process, index, search, and share.

XML tags represent the data structure and contain metadata. The data content of the tags is encoded in the way the XML standard specifies.
It's important to note that XML has spawned many other formats, for example [Scalable Vector Graphics](https://www.w3schools.com/graphics/svg_intro.asp) (SVG), a format to store vector images.

### Darwin Information Typing Architecture

[Darwin Information Typing Architecture] (DITA) is a specification of XML aimed at document types for authoring and organizing topic-oriented information. It also encompasses a set of mechanisms for combining, extending, and constraining document types. It's an open standard that is defined and maintained by the [OASIS](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=dita) DITA Technical Committee.

One of the biggest advantages of DITA XML is content reuse. Using topics that are governed by a map allows to use the same content in multiple places, while editing it only once. In my experience DITA XML is much better suited to huge sets of documentation with need for translation, like hardware user manuals where there is need for a lot of data representation. Without DITA's structured approach it would be impossible to present the information needed by the users.

#### Structure

Most important DITA elements are:

* Map - a container for topics that groups them into a publication. Map provides sequence and structure to the content.
* Task - procedures that describe how to accomplish a task.
* Concept - information containing definitions, rules, and guidelines.
* Reference - topic describing, for example, programming instructions or other reference material.
* Glossary Entry - definition of a term that is used throughout documentation.
* Troubleshooting - description of a condition that may require a fix from the reader as well as context information for the condition.
