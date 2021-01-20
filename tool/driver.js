const { Builder } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path // 必要，不能删除

let driver = ''

module.exports = {
  get: () => {
    if (!driver) {
      driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build()
    }
    return driver
  },
  quit: () => {
    driver.quit()
  },
  checkIsPresence: async (driver, element) => { // 检查是否存在
    try {
      await driver.findElement(By.css(element))
      return true
    } catch  {
      return false
    }
  }
}
