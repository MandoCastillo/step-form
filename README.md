# This is a test for an architecture for react apps

## We're going to use the next libraries and technologies

1. [Typescript](https://www.typescriptlang.org/)
2. [Redux Toolkit](https://redux-toolkit.js.org/)
3. [React Query](https://react-query.tanstack.com/)
4. [React Hook Form](https://react-hook-form.com/)
5. [Tailwind](https://tailwindcss.com/)
6. [Storybooks](https://storybook.js.org/)
7. [Testing Library](https://testing-library.com/)
8. [ESLint](https://eslint.org/)
9. [Prettier](https://prettier.io/)
10. [Husky](https://typicode.github.io/husky/)

### Installation
```
yarn add @reduxjs/toolkit react-redux
```
```
yarn add react-query
```
```
yarn add react-hook-form
```
```
yarn add -D tailwindcss
yarn tailwindcss init
```
```
# Add Storybook:
npx sb init
# Need to install the following packages: y
```
```
npm info "eslint-config-airbnb@latest" peerDependencies

yarn add -D eslint-config-airbnb eslint@^8.2.0 eslint-plugin-jsx-a11y eslint-plugin-import@eslint-plugin-react@ eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss
```

### Configurations

#### Tailwind
```
```
#### ESlint - Prettier
```
```
#### Husky
```
```

### Folder Structure
```
src
  - assets
  - components
    - Button
      - ...
      - Button.tsx
      - Button.stories.tsx
      - index.ts
  - components-layout
    - Sidebar
      ...
      - Sidebar.tsx
      - Sidebar.stories.tsx
      - index.ts
  - constants
  - helpers
  - hooks
    - useSearch
      - useSearch.ts
      - useSearch.test.tsx
      - index.ts
  - pages
    - Home
      - components
        - HomeGraph
          - ...
          - HomeGraph.tsx
          - HomeGraph.test.tsx
          - index.ts
  - routes
  - schemas
  - services
  - redux
```

***src/assets***
> It contain the assets like images, css & fonts.

***src/components***
> It contains the reusable atomic & molecular components. Each component folder will contain the component, test & documentation file

***src/components-layout***
> It contains components as sidebar, footer, navbar or page container, these components aren't atomic.They are making with some components

***src/constants***
> Eg : Regex & other application generic constant

***src/helpers***
> It contains the reusable helper functions

***src/helpers***
> It contains the reusable custom hooks

***src/pages***
> It contain the whole page component

***src/schema***
> It contain the page routes

***src/routes***
> It contain the schema files using the [`yup`](https://www.npmjs.com/package/yup)

***src/service***
> It contain all request functions. We're going to use [`axios`](https://www.npmjs.com/package/axios) for rest request and [`graphql-request`](https://www.npmjs.com/package/graphql-request) for graphql request.

***src/redux***
> It contains the redux-toolkit files


### Component Structure
***Simple component***
> It can be a button, input, header, every component without more logic, preferably only receive props.
```
Button.css (optional) we can separate tailwind code in this file but it isn't necessary
Button.stories.tsx - Storybook stories
Button.test.tsx - Jest + testing-library unit tests
Button.tsx - Component
Button.types.ts - TS types
index.ts - Re-exports
```

***Custom component***
> This component has custom and more logic for that we're going to do a new file with the suffix `logic.ts`, this file is similar to a custom hook but holy works for this component.

```
{...Simple component Structure}
HomeGraph.logic.ts
```
> This new file will control all user interactions and requests for data. We'll use `React Query` to make requests agnostic to the backend type.

