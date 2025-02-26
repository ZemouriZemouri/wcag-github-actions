# wcag-github-actions

This is a demo repository to illustrate how to test web accessibility using Github Actions.

## Folder structure

    .
    ├── .github
    │      └── workflows                      # The GitHub Actions workflows
    │             ├── axe_test.yaml           # Accessibility Test library
    │             └── lighthouse_report.yaml  # Accessibility Report library
    |             └── pa11y_test.yaml         # Accessibility Test library
    ├── public
    ├── src
    │    └── components                       # Custom components
    │           ├── image.jpeg
    │           └── ...
    └── ...

## Requirements

- [Axe](https://www.deque.com/axe/)
- [Pa11y](https://pa11y.org/)

## GitHub Extension

- [Axe linter](https://github.com/marketplace/axe-linter)

## Source

This repo is based on this project/documentation:
- [a11y](https://github.com/bolonio/a11y-github-actions)
- More info on [a11y-project](https://www.a11yproject.com/) 
