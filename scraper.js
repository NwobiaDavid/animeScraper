const puppeteer = require('puppeteer');

async function getAnime(){
  const browser = await puppeteer.launch({
    headless: 'new',
  });

  const page = await browser.newPage();
  await page.goto('https://gogoanimehd.io/');

  await page.screenshot({ path: 'screenshot.png' }); 

  const elements = await page.$x('//*[@id="load_recent_release"]/div[2]/ul');

  for (const elementHandle of elements) {
    const src = await page.evaluate(el => el[0].textContent, elementHandle);
    console.log(src);
  }


  browser.close();
}

getAnime();