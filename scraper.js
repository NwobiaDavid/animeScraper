const puppeteer = require('puppeteer');

async function scraper(searchQuery) {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  const searchUrl = `https://gogoanimehd.io/search.html?keyword=${encodeURIComponent(searchQuery)}`;
  await page.goto(searchUrl);

  // Click the first search result to navigate to the anime page
  await page.waitForSelector('.items a');
  await page.click('.items a:first-child');

  const [el] = await page.$x('//*[@id="wrapper_bg"]/section/section[1]/div[1]/div[2]/div[1]/img');
  const src = await el.getProperty('src');
  const srcTxt = await src.jsonValue();

  const [el2] = await page.$x('//*[@id="wrapper_bg"]/section/section[1]/div[1]/div[2]/div[1]/h1');
  const txt = await el2.getProperty('textContent');
  const rawText = await txt.jsonValue();

  // Select the parent element
  const parentElement = await page.$x('//*[@id="wrapper_bg"]/section/section[1]/div[1]/div[2]/div[1]/p[4]');

  if (parentElement.length > 0) {
    // Use XPath to select all child elements within the parent
    const childElements = await parentElement[0].$x('./a');

    if (childElements.length > 0) {
      const childText = [];

      for (const childElement of childElements) {
        const text = await childElement.evaluate(node => node.textContent);
        childText.push(text);
      }

      console.log({ srcTxt, rawText, childText });
    } else {
      console.error('No child elements found within the parent.');
    }
  } else {
    console.error('Parent element not found.');
  }

  browser.close();
}

const searchQuery = "naruto";
scraper(searchQuery);
