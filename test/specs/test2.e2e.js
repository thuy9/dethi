describe('Demo test', function () {
    it('My first test', async () => {
        browser.url('https://www.bestprice.vn/')
        browser.pause(5000)
        await $('input[name="From"]').click();
        $$('input[placeholder="Mã sân bay, Tên sân bay, Tên thành phố..."]')[0].setValue("Han");
        await $$('.tt-highlight')[0].click();
        $$('input[placeholder="Mã sân bay, Tên sân bay, Tên thành phố..."]')[1].setValue("Ho C");
        await $('strong*=SGN').click();
        await $$('i[class="icon-search-form ico-calendar"]')[0].click();
        await browser.scroll(0, 200)
        await $$('td')[29].click();
        await $$('i[class="icon-search-form ico-calendar"]')[1].click();
        await browser.scroll(200, 0)
        await $$('td')[39].click();
        await $$('#flight_passenger')[0].click();
        await $$('.ico-plus')[7].click();
        await $$('#flight_passenger')[0].click();
        await $$('button[type="submit"]')[0].click();
        await browser.scroll(0, 0)
        var money = $$('#label_flight_select_VJHANSGNVJ-1131-21 span')[0];
        console.log(await money.getText());
        await expect(money).toHaveText('700.000đ')
    })
})