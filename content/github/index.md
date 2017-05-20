---
  title: GitHub | AppsCode
  menu:
    main:
      name: GitHub
      weight: 70
  type: .redirector
  redirect_to: 'https://github.com/appscode'
---


## Getting Started on AppsCode with GO

**A `.Paginator` is provided to help building a pager menu. This is only relevant for the templates for the home page and the list pages (sections and taxonomies).**

There are two ways to configure and use a `.Paginator`:

1. The simplest way is just to call `.Paginator.Pages` from a template. It will contain the pages for *that page* .
2. Select a sub-set of the pages with the available template functions and ordering options, and pass the slice to `.Paginate`, e.g. `{{ range (.Paginate ( first 50 .Data.Pages.ByTitle )).Pages }}`.

For a given **Node**, it's one of the options above. The `.Paginator` is static and cannot change once created.

The global page size setting (`Paginate`) can be overridden by providing a positive integer as the last argument. The examples below will give five items per page:

* `{{ range (.Paginator 5).Pages }}`
* `{{ $paginator := .Paginate (where .Data.Pages "Type" "post") 5 }}`

It is also possible to use the `GroupBy` functions in combination with pagination:

```
{{ range (.Paginate (.Data.Pages.GroupByDate "2006")).PageGroups  }}
```

## Build the navigation

The `.Paginator` contains enough information to build a paginator interface.

The easiest way to add this to your pages is to include the built-in template (with `Bootstrap`-compatible styles):

```
{{ template "_internal/pagination.html" . }}
```

**Note:** If you use any filters or ordering functions to create your `.Paginator` **and** you want the navigation buttons to be shown before the page listing, you must create the `.Paginator` before it's used:

```
{{ $paginator := .Paginate (where .Data.Pages "Type" "post") }}
{{ template "_internal/pagination.html" . }}
{{ range $paginator.Pages }}
   {{ .Title }}
{{ end }}
```
