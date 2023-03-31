---
title: Structure and organisation - Contributing
published: false
banner:
  type: error
  behaviour: persistent
  content: Contributing to the Godfile is currently disabled until stable release.
modified: 2023-03-30T06:05:16.526Z
---


# Structure and Organisation


## Directory-based routing

Internally, the application routes each request that does not match a prebuilt route to a file in the `/src/content/` directory.

!> Whether this behaviour changes on a static build has not been determined.

To create a new route, simply create a `.md` file in its correct location. However, there are a few caveats with locating and naming files.


### `index.md`

A file with the name `index.md` will automatically route to the name of its immediate parent directory. This behaviour is similar to many webservers and should not present any unexpected behaviour.

For example, take the following structure into account:

```text
content/
├─ example/
│  └─ index.md
└─ about.md
```

This will create the following routes:

```text
/example
/about
```

!> Notice that even though example is technically a directory, its route has **no trailing slash**. This is to maintain consistency between routes. Don't view this folder as a filesystem, instead imagine routes and groups of routes.


### Routes in the UI

You can navigate to a route by entering its address into the search bar of your browser. This is an expected behaviour. However, creating routes does not mean it will update the navigation component in the UI.

**The sidebar will __not__ update to display your newly created route**.

This is an intended side effect of the navbar being hardcoded into the Svelte layout. As the structure of the syllabus does not change often, and it would be less performant to dynamically update the navbar, it will remain static until further notice.


## Frontmatter

All markdown documents utilise frontmatter to retrieve page-specific information from the write-up into the app.

```yaml
---
pageTitle: Example page
published: true
---
```

x> This page is incomplete.