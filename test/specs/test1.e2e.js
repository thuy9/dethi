describe('Demo test', function () {
    it('My first test', async () => {
        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
        browser.url('https://google.com/')
        browser.pause(2000)
        await $('[name="q"]').setValue("WebdriverIO");
        // await $('button[type="submit"]').click();
        browser.keys('Enter')
    })
})