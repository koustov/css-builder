<div align="center">

   <p>
    <h1>react-ui-css-builder</h1>
  </p>
  <p>
     When we say <i>"CSS for everyone"</i>
  </p>
  <p>
     Learn | Build | Code | Test
  </p>
  <p>A UI based CSS code generator for all expert level</p>

  <p>

  </p>
</div>

---

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![GitHub watchers](https://img.shields.io/github/watchers/koustov/css-builder.svg?logo=github&label=Watch) ![GitHub watchers](https://img.shields.io/github/issues/koustov/css-builder?logo=github&label=Issues) ![GitHub watchers](https://img.shields.io/github/stars/koustov/css-builder?logo=github&label=Stars) ![GitHub watchers](https://img.shields.io/npm/dt/react-ui-css-builder.svg?logo=npm&label=downloads)

This is a **fully flexible** css builder based on [`React`](https://facebook.github.io/react/)

## Note

Currently completed only subset of attributes for pending items refer **git issue** section. You are welcome to inject more and make it "full-fledged" css-builder for **everyone**
Currently its a preview build and "0.1.0" will be the first fully fledged version to consume.

Give STAR to encourage me to complete this mammoth task with more energy

**Table of Contents**

- [Demo](#demo)
- [Features](#features)
- [When do you need it?](#when-do-you-need-it)
- [Usage](#usage)
  - [Install](#install)
- [When do you need it?](#when-do-you-need-it)
- [Run it locally](#run-it-locally)
- [Supported Elements](#supported-elements)
- [How to use](#how-to-use)
- [Playground](#playground)
- [Items in queue](#items-in-queue)
- [Contribution](#contribution)
- [License](#license)

## Demo

Visit https://css-builder.vercel.app/

## Features

- React based
- Completely UI based
- All CSS attributes supported
- Customizable
- Quick and easy.
- Search attribute
- Categorized attributes
- Theme supported
  - Out of the box there are two themes
    - chalk (default)
    - dark

## 🤲 Want to Motivate?

Who doesn't need motivation? Please give the project a star(⭐) and/or share it in your dev circle.

## Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Stargazers repo roster for @koustov/css-builder](https://reporoster.com/stars/koustov/css-builder)](https://github.com/koustov/css-builder/stargazers)

## When do you need it

- You want to learn CSS while playing?
- You want to allow n'th level customization on your web app?
- You want to code CSS rapidly?
- Not sure which attribute to chose?

## Usage

- Form customization
- Tutorial
- Learning
- Rapid building

### Install 🐙

```bash
npm install react-ui-css-builder
```

or

```bash
yarn add react-ui-css-builder
```

## Run it locally

1. Fork the repo
2. Clone it from your repo
3. Navigate to directory
4. Open terminal
5. Install Packages

```
yarn
```

6. Start the library

```
yarn start
```

7. Navigate to inner folder called `example`
8. Install Packages

```
yarn
```

9. Start the library

```
yarn start
```

10. Your application is running on 3000

```
http://localhost:3000/
```

## Highlight 🔥

It was frustrating for me when iI was looking for some easy tool to build CSS using UI and couldn't find anything that helps me in the context. So built my own.

## Supported Elements

Its a HUUUUUUGE list. Will list down in sometime.

### How to use

Import css-builder component

```jsx
import { CSSBuilder } from 'react-ui-css-builder'
```

Just drop it to desired place

```jsx
<CSSBuilder
  onChange={(a, b, c) => {
    console.log('Value received')
  }}
/>
```

## Playground

Visit https://css-builder.vercel.app/

## Items in queue

- Pending attributes
- Drag/drop for sequencing

## Contribution 🍰

If you understand the importance please feel free to create issue and make pull request

Refer [code of conduct ](./CODE_OF_CONDUCT.md)

Refer [contributing ](./CONTRIBUTING.md)

## License

MIT © [Koustov](https://github.com/koustov)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://tapasadhikary.com"><img src="https://avatars.githubusercontent.com/u/3633137?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tapas Adhikary</b></sub></a><br /><a href="https://github.com/koustov/css-builder/commits?author=atapas" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/koustov"><img src="https://avatars.githubusercontent.com/u/7145967?v=4?s=100" width="100px;" alt=""/><br /><sub><b>koustov</b></sub></a><br /><a href="https://github.com/koustov/css-builder/commits?author=koustov" title="Code">💻</a> <a href="#maintenance-koustov" title="Maintenance">🚧</a> <a href="https://github.com/koustov/css-builder/pulls?q=is%3Apr+reviewed-by%3Akoustov" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/eemike07"><img src="https://avatars.githubusercontent.com/u/2515617?v=4?s=100" width="100px;" alt=""/><br /><sub><b>eemike07</b></sub></a><br /><a href="https://github.com/koustov/css-builder/commits?author=eemike07" title="Code">💻</a></td>
    <td align="center"><a href="http://oronium.com"><img src="https://avatars.githubusercontent.com/u/59858506?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Don Jose Mathew</b></sub></a><br /><a href="https://github.com/koustov/css-builder/issues?q=author%3Adontech09" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
