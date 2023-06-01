const assert = require('assert');

Feature('Liking Restos');

Scenario('liking one resto', async ({ I }) => {
    I.amOnPage('/');

    I.waitForVisible('.resto__title');
    I.seeElement('.resto__title a');
    const firstResto = locate('.resto__title a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.resto-item');
    const likedRestoName = await I.grabTextFrom('.resto__title');

    assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking one resto', async ({ I }) => {
    I.amOnPage('/');
    I.waitForVisible('.resto__title');
    I.seeElement('.resto__title a');

    const firstResto = locate('.resto__title a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.resto-item');

    const likedRestoName = await I.grabTextFrom('.resto__title');
    assert.strictEqual(firstRestoName, likedRestoName);

    I.seeElement('.resto__title a');
    const firstRestoFav = locate('.resto__title a').first();
    I.click(firstRestoFav);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.dontSeeElement('.resto-item');
});
