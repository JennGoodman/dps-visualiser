# dps-visualiser

[![Greenkeeper badge](https://badges.greenkeeper.io/PerfectionCSGO/dps-visualiser.svg)](https://greenkeeper.io/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![CircleCI](https://circleci.com/gh/PerfectionCSGO/dps-visualiser.svg?style=shield)](https://circleci.com/gh/PerfectionCSGO/perfection-tv)

## Installation

```
# Navigate to your prefered location

cd <dir>

# Clone the repository
git clone https://github.com/perfectioncsgo/dps-visualiser

# First install dependencies
yarn install

# Then start the app in dev mode
yarn dev
```

## Distribution

```
# The dist function should build you a clean artifacts/dist/ folder
yarn dist
```

## Cleaning

```
# This will remove the dist folder for you
yarn clean
```

## ESLint

```
# Check prettier integration
yarn eslint-check

# Do a lint check
yarn eslint

# Do some automatic fixes
yarn eslint-fix
```

## Code style

In settings.json we've enabled formatOnSave.

```
# Listing formatting differences
yarn prettier

# Do some automatic formatting
yarn prettier-format
```

## Unit Tests

Test results will be stored in `/artifacts/test-results/`

```
# To run jest
yarn jest

# To run the complete test set
yarn test
```

## Code Coverage

Coverage results will be stored in `/artifacts/coverage`

```
# To run coverage
yarn coverage
```

## Licence

_perfection-tv_ is available under MIT.
