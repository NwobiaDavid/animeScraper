# Web Scraping API Documentation

## Introduction

This is a simple Node.js application that provides a RESTful API for web scraping using Puppeteer and Express.js. It allows you to scrape data from [gogoanime](https://gogoanimehd.io/) based on a search query.

## API Endpoint

- **POST /scrape**: This endpoint accepts a JSON request body with a `searchQuery` parameter and returns scraped data.

## Request

### Endpoint

- `/scrape`

### Request Method

- POST

### Request Body

- The request body should be in JSON format.

#### Request Body Parameters

- `searchQuery` (string, required): The search query for web scraping.

**Example Request:**

```json
{
  "searchQuery": "naruto"
}
```

## Response

### Response Format

- The response will be in JSON format.

#### Success Response

- Status Code: 200 OK

- Response Body: JSON object containing scraped data.

**Example Response:**

```json
{
  "srcTxt": "https://example.com/image.jpg", // image url
  "rawText": "Naruto: Shippuden", // title
  "childText": ["action", "adventure", "supernatural"], // genre
  "descText": "A description of the anime." // description
}
```

#### Error Responses

- Status Code: 400 Bad Request
  - Response Body: JSON object with an error message if `searchQuery` is missing in the request body.

  **Example Error Response:**

  ```json
  {
    "error": "Missing searchQuery in the request body."
  }
  ```

- Status Code: 500 Internal Server Error
  - Response Body: JSON object with an error message if an error occurs during scraping.

  **Example Error Response:**

  ```json
  {
    "error": "An error occurred during scraping."
  }
  ```

## Usage

1. Start the server using the provided script or by running `node scraper.js`.

2. Send a POST request to `/scrape` with the desired `searchQuery` in the request body.

3. The API will respond with the scraped data or an error message if applicable.

## Dependencies

- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.

- [Puppeteer](https://pptr.dev/): A Node library for controlling headless Chrome or Chromium browsers.

## Author

- Your Truly, me😁
