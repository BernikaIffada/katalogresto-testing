const assert = require('assert');

Feature('Liking Restos');

Scenario('liking one resto', async ({ I }) => {
    I.amOnPage('/');

    I.waitForVisible('.post-item__content a');
    I.seeElement('.post-item__content a');
    const firstResto = locate('.post-item__content a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.post-item');
    const likedRestoName = await I.grabTextFrom('.post-item__content');

    assert.strictEqual(firstRestoName, likedRestoName);
});

// Buat skenario lagi buat yang unliking nya

Scenario('unliking one resto', async ({ I }) => {
    I.amOnPage('/');
    I.waitForVisible('.post-item__content a');
    I.seeElement('.post-item__content a');

    const firstResto = locate('.post-item__content a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);

    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.post-item');

    const likedRestoName = await I.grabTextFrom('.post-item__content');
    assert.strictEqual(firstRestoName, likedRestoName);

    I.seeElement('.post-item__content a');
    const firstRestoFav = locate('.post-item__content a').first();
    I.click(firstRestoFav);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.dontSeeElement('.post-item');
});
