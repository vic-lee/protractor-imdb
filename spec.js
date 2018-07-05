//spec
var imdbHome = require('./imdbHome');
var imdbSearchResult = require('./imdbSearchResult');
var imdbFilm = require('./imdbFilm');
var imdbStar = require('./imdbStar');

//this is a useless comment

//branch1 testing
//testing 

//expected conditions
// var EC = protractor.ExpectedConditions;
// var textContains = EC.textToBePresentInElementValue();

//import pages

describe('idmb test', function(){

    var searchPhrase = 'Toy Story'

    it('should perform search', async function(){
        //work on non-angular website 
        browser.ignoreSynchronization = true;
        await imdbHome.get();
        imdbHome.enterAndPerformSearch(searchPhrase);
        // imdbHome.performSearch();
    });

    it('should get results', async function(){
        var currentURL = await browser.getCurrentUrl();
        await imdbSearchResult.get(currentURL);
    });

    it('results should open', async function(){
        var link = element(by.linkText(searchPhrase));
        link.click();
        var currentURL = await browser.getCurrentUrl();
        //get film page
        await imdbFilm.get(currentURL);
        expect(imdbFilm.getFilmTitle()).toContain(searchPhrase);
    });

    it('should rate result', function(){
        // expect(imdbFilm.getFilmRating()).toBeNonEmptyString();
    });

    it('should see #1 cast', async function(){
        //go to #1 cast
        imdbFilm.goToFirstCast();   //succeed
        var currentURL = await browser.getCurrentUrl();
        await imdbStar.get(currentURL);
    });

    //test your ability to go back a page
    it('should see director', function(){
        
    });
    
})

//TODO
//check that each test has expects 
//make string comparisons case insensitive