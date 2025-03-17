# Web Accessibility Test - GitHub Actions

This is a demo repository to illustrate how to test web accessibility (based on [wcag](https://www.w3.org/TR/wcag-3.0/)) using Github Actions.

## Folder structure

    .
    ├── .github
    │      └── workflows                      # The GitHub Actions workflows
    │             ├── axe_test.yaml           # Accessibility Test library
    │             └── lighthouse_report.yaml  # Accessibility Report library
    |             └── pa11y_test.yaml         # Accessibility Test library
    ├── public
    ├── src
	|    |
	│    └── App.tsx                       	  # React app
	│    └── ...                       	  
    |	 |
    │    └── components                       # Custom components
    │           ├── image.jpeg
    │           └── ...
    └── ...

## Demo

- Demo project is based on a [React](https://react.dev/) web application
- To start the React app ( _App.tsx_ ):

```
npm start
```

## Requirements

- [Axe](https://www.deque.com/axe/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [Pa11y](https://pa11y.org/)

## Extensions

- [Axe linter](https://github.com/marketplace/axe-linter)
- [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

## Source

This repo is based on this project/documentation:
- [a11y](https://github.com/bolonio/a11y-github-actions)
- More info on [a11y-project](https://www.a11yproject.com/)