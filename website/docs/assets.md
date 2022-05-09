---
id: assets
title: Embedding the assets
sidebar_label: Embedding the assets
sidebar_position: 5
pagination_next: docs
pagination_prev: xml
---

Apart from text-based content in your documentation, there may be a necessity of adding assets like images or videos.

### Images/GIFs

While both MD and HTML provide a way to embed images into your documents, HTML is slightly more malleable, giving you the native option to resize your images by appending an image tag with `width` and `height` attributes, though neither `width` nor `height` attributes are mandatory.

In the case of Markdown, there is no native way to change size of images (unless you resize the files themselves with some other graphical software), but you can embed HTML syntax inside .md files.

Example of image/gif insertion in Markdown:

```markdown
![alt text](path to image on the web or local)
```

Example of image/gif insertion in HTML:

```html
<img src="path to image on the web or local" alt="alt text for photo">
```

Example of image/gif insertion in DITA XML:

```xml
<image href="images/sample.png" placement="break"><alt>Sample image</alt></image>
```

### Videos

In Markdown there is no native way to add videos; you can use raw HTML inside Markdown to embed the video:

```markdown
<a href="{video-url}" title="Link Title"><img src="{image-url}" alt="Alternate Text" /></a>
```

To add videos in HTML you can use `<video>` tag:

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

Example of video embedding in DITA XML:

```xml
<object width="640" height="360" data="here-goes-your-video">
    <param name="src" value="here-goes-the-link"/>
    <param name="movie" value="here-goes-the-link"/>
    <param name="allowFullScreen" value="true"/>
    <param name="allowscriptaccess" value="always"/>
</object>
```
