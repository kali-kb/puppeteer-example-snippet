///// list of hackernews from y-combinator using puppeteer ////

const puppeteer = require('puppeteer')

let func = async() => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://news.ycombinator.com', {
        waitUntil: 'networkidle2',
    })
    // await page.pdf({path: 'scraper.pdf', format: 'a4'}) generates pdf on current path
    //page.screenshot({path})  generates image file of site
    // console.log(site)
    const data = await page.evaluate(() => {

        const titles = []
        const values = document.querySelectorAll('.titlelink') //pupeteer -> browser
        for(i=0; i<values.length; i++){
            titles.push(values[i].innerText)
        }
        return {
            newsTitles: titles
        }
    })
    // console.log(data)
    await browser.close()
}

func()