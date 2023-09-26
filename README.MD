# Web Scraping API using Puppeteer and Express.js

This is a simple Node.js application that provides a RESTful API for web scraping using Puppeteer and Express.js. It allows you to scrape data from [gogoanime](https://gogoanimehd.io/) based on a search query.

## Getting Started

To set up and run the application, follow these steps:

### Prerequisites

- Node.js: Ensure you have Node.js installed on your system.

### Installation

1. Clone the repository or download the code:

   ```bash
   git clone https://github.com/NwobiaDavid/animeScraper.git
   ```

2. Navigate to the project directory:

   ```bash
   cd animeScraper
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   node scraper.js
   ```

   The server will be running on port 4000 by default. You can modify the port in the `app.listen` line of the `scraper.js` file.


2. Use the API by sending a POST request to `http://localhost:4000/scrape` with a JSON payload containing the `searchQuery` property. For example:

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"searchQuery": "naruto"}' http://localhost:4000/scrape
   ```

   Replace `"naruto"` with your desired search query.

### API Endpoint

- **POST /scrape**: This endpoint accepts a JSON request body with a `searchQuery` parameter and scrapes data from the specified website based on the query.

### Error Handling

- If the `searchQuery` is missing from the request body, the API will respond with a 400 Bad Request error.

- If an error occurs during scraping, the API will respond with a 500 Internal Server Error and provide an error message.

## Dependencies

- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.

- [Puppeteer](https://pptr.dev/): A Node library for controlling headless Chrome or Chromium browsers.

## Author

- Your Truly, me😁

## Documentation

The full documentation/guide on how to use the api is located at [DOCUMENTATION.MD](DOCUMENTATION.MD).
