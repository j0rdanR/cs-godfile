---
title: Changelog
desc: The latest updates to the Godfile application
preview: ""
published: true
modified: 2023-03-31T01:29:52.887Z
banner:
  type: ""
  behaviour: ""
  content: ""
---


# Changelog

!> This is the application changelog. You can track changes and merges on the Github repository.

## `Version 0.0.5 Pre Alpha`

This is not a stable release of the application. It is a preview version intended for proof of concept. While content is accessible, you may encounter many issues working with the app.

### Changes

- Added support for the Frontmatter CMS Vscode extension. You can now manage content with a GUI.
- UI now shows when the document was last updated. This value must be updated manually once you finish making changes.
- While viewing the Godfile, there is now a sidebar to make navigation easier.

### Issues

- The web app is not responsive. You may encounter issues when viewing it on smaller screens
- Preview mode is permanently enabled for all users. There is no way to authenticate a user as eligible for previews.
- Large tables overflow from the `<main>` container, being hidden from the view by the table of contents.
- There is currently no way to inject data from Svelte to a markdown file. Mdsvex makes this possible, but it has not been setup.
- Inserting a banner from frontmatter isn't detected by Tailwind, and as a result, styles don't apply until refresh.
- I need to setup a basic design system for the UI. Currently it is just a free for all, where elements may appear inconsistent.