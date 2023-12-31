// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
require("driver");


  async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();

    
    await driver.get("https://www.zoomcar.com/in/pune")
    await driver.manage().window().setRect({ width: 856, height: 839 })
    await driver.findElement(By.css(".car-list-card:nth-child(1) > .car-list-card-image > img")).click()
    await driver.findElement(By.css(".location-calendar-container")).click()
    {
      const element = await driver.findElement(By.css(".location-calendar-container"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.css(".z-thump")).click()
    await driver.findElement(By.css(".car-list-card:nth-child(2) .car-list-card-distance")).click()
    await driver.executeScript("window.scrollTo(0,53)")
    await driver.findElement(By.css(".location-list-items-item:nth-child(1)")).click()
    await driver.findElement(By.css("div:nth-child(1) .calendar-v2-month-dates-week:nth-child(4) > .calendar-v2-month-dates-week-day:nth-child(7) > .calendar-v2-month-dates-week-day-value")).click()
    await driver.findElement(By.css(".calendar-v2-time-slider-button-submit-button")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css(".car-search-list .car-item-search-container-image-container-action-button > img")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.close()


  }

  test_case();