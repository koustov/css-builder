---
name: Attribute Request Feature
about: The idea of this template to request for new CSS attribute(s)
title: Attribute definition request for X
labels: enhancement
assignees: ''

---

## Attribute Prefix
Attributes start with X

## Is for an entire prefix or partial implementation 
Full

## If partial, mention segment count
NA

## Definition template

All the attribute definitions are maintained under [definitions](/src/definitions ) directory and here is the template
Template:
```
[
  {
    "display": "<Display Name>",
    "description": "<A very simple description, not going much technical>",
    "link": "<External link to get more details>",
    "propertyName": "<Underneath attribute name>",
    "valuetemplate": "<The template for the value>",
    "categories": ["<A list of categories this attribute can belong>"], 
    "tags": "<A comma separated values for adding tags which is more internal for filter/search etc>",
    "controls": [<List of controls that is required to build the value>]
  }
]
```
