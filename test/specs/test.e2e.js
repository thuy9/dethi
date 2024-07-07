// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url('https://the-internet.herokuapp.com/login')
//         // browser.pause(5000)
//          await $('#username').setValue("tomsmith");
//         await $('#password').setValue("SuperSecretPassword!");
//         await $('button[type="submit"]').click();
//         browser.pause(5000)
//         const myElem = await $('#flash')
//         await expect(myElem ).toHaveTextContaining('You logged into a secure area!')
//     })
// })

