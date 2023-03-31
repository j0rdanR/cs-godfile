---
title: Styling documents - Contributing
published: true
banner:
    type: error
    behaviour: persistent
    content: Contributing to the Godfile is currently disabled until stable release.
---

*[HTML]: Hyper Text Markup Language

# Styling

This site uses mdsvex and variety of Remark/Rehype plugins to create rich content with a simplified syntax and developer experience.

Due to the complexity and uniqueness of markdown used on this site, this document outlines the features available to authors.


## Using Svelte components

The site's content is located in the `/src/content` directory, which allows you to import components using the `$lib` alias syntax. Alternativly, you may use an absolute path.

```md
<!-- example.md -->
<script>
    import Component from '$lib/Component.svelte';
</script>

# Example document

<Component />

> Some other markdown
```

!> While not mandatory, it is highly encouraged that you denote all files containing Svelte code with the `.svelte.md` syntax. This is purely semantics, as all files are resolved as Svelte components anyways (even if pure markdown).


## Rich text

All the basic markdown syntax can be applied. [Markdown Guide's](https://www.markdownguide.org/basic-syntax/) documentation is a good resource to start with.

For example, define a table like this:

```md
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

And it will look like this:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |


### Links

#### Internal

There is currently no way to define internal links. You must use the basic Markdown syntax with a relative URL.

There are plans to implement the `remark-wiki-link` plugin to use a syntax like `[[Example Page]]` to redirect to `/example-page`


#### External

External links will always open in a new tab. You can define them using the basic Markdown syntax.


### Emojis

You can use emoji codes such as `:smile:` to render emojis easily :smile:. Alternatively, you can use emoji shortcodes like `:-)`.


### Code blocks

The default inline and fenced code blocks work, with the ability to specify a language for syntax highlighting in fenced blocks. If you wish to add a title to a code block, you can use this syntax:

```
\```js title="helloWorld.js"
function helloWorld() {}
\```
```

Looks like:

```js title="helloWorld.js"
function helloWorld() {}
```


### Abbreviations

Sometimes you may use an abbreviation multiple times across a single file. This allows you to write the full name once, and the parser will automatically detect all uses of the abbreviation.

```md title="Define an abbreviation"
*[HTML]: Hyper Text Markup Language
```

Then anytime you write HTML it will look like this (Hint: hover over the word).

?> Always define abbreviations at the top of the file, underneath the metadata section, but always above the page's content. Keeping abbreviations in one place makes it easier to find them.



## Stylistic elements

### Hints/Banners

```md
!> Info
?> Warning
x> Error
```

!> Info

?> Warning

x> Error