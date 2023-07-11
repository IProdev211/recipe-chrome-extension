# Project Name

Recipe App

## Tech Stack

- React
- TypeScript
- Material-UI (Mui)
- Webpack

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

### `git clone <repository-url>`

2. Install dependencies:

### `npm install`

3. Build the application:`

### `npm run build`

4. The `/dist` folder will be created at the root of the app.

5. Load the extension into Chrome:

- Open Chrome and navigate to the Extensions page by typing `chrome://extensions` into the address bar.
- Click the "Load unpacked" button and select the `dist` directory in your project.
- Test your extension by reloading the Extensions page and clicking on the extension icon.

## Proxy Server

The provided API endpoint may not work in the frontend due to CORS error. To resolve this, a proxy server was created using Express.js. The proxy server can be found in `api/index.js`.
