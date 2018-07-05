//imdbHome
var imdbHome = function() {
    //list of vars 
    var searchBar = element(by.id('navbar-query'));
    var searchBtn = element(by.id('navbar-submit-button'));

    //get function MUST IMPLEMENT
    this.get = async function(){
        await browser.get('https://www.imdb.com/');
    };
    
    //helper functions
    this.enterSearch = async function(query){
        await searchBar.sendKeys(query);
    };
    this.getSearchBarText = function() {
        return searchBar.getText();
    };
    this.performSearch = function(){
        searchBtn.click();
    };
    this.enterAndPerformSearch =  function(query) {
        searchBar.sendKeys(query);
        // searchBar.sendKeys(protractor.Key.ENTER);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

}
//CRITICAL, MUST IMPLEMENT
module.exports = new imdbHome();