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

![GitHub watchers](https://img.shields.io/github/watchers/koustov/css-builder.svg?logo=github&label=Watch) ![GitHub watchers](https://img.shields.io/github/issues/koustov/css-builder?logo=github&label=Issues) ![GitHub watchers](https://img.shields.io/github/stars/koustov/css-builder?logo=github&label=Stars) ![GitHub watchers](https://img.shields.io/npm/dt/react-ui-css-builder.svg?logo=npm&label=downloads)

This is a **fully flexible** css builder based on [`React`](https://facebook.github.io/react/)

## Note

The basic infrastructure is created and currently all attributes starting with **"a", "c", "d" and "e" has been incorporated**.
You are welcome to inject more and make it "full-fledged" css-builder for **everyone**
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

1. Clone the repo
2. Navigate to directory
3. Open terminal
4. Install Packages

```
yarn
```

5. Start the library

```
yarn start
```

6. Navigate to inner folder called `example`
7. Install Packages

```
yarn
```

7. Start the library

```
yarn start
```

9. Your application is running on 3000

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
