# JavaScript Project Template

This repo houses a barebones structure for building web apps. I borrowed much
of this structure from how we've done things at work, so
[Kevin Ennis](http://github.com/kevincennis) gets all the credit here.

## Components

- AMD-style dependency management (via requirejs)
- Full Mocha test suite integration
- Coverage reports (via blanket)
- Optimized concat/build using r.js/almond (not currently uglified)

## Getting started

```
sudo npm install -g grunt-cli
npm install
```

## Run the unit tests

```
npm test
```

## Run the full build

```
grunt
```

## Start a local static server for development

```
grunt express:dev
```

This launches a server @ http://localhost:8675/
