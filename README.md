# wcag-github-actions

This is a demo repository to illustrate how to test web accessibility using Github Actions.

## Folder structure

    .
    ├── ...
    ├── src
    │    ├──.github
    │    │     └── workflows                 # The GitHub Actions workflows
    │    │           ├── workflowName.yml
    │    │           └── ...
    │    └── components                      # Custom components
    │          ├── Component.tsx
    │          └── ...
    └── ...

## Requirements & GitHub Extension

- [Axe](https://www.deque.com/axe/)
- [Axe linter](https://github.com/marketplace/axe-linter)
- [Pa11y](https://pa11y.org/)

## Source

This repo is based on this project:
- [a11y](https://github.com/bolonio/a11y-github-actions)
- More info on [a11y-project](https://www.a11yproject.com/) 
