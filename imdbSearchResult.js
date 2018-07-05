//imdbSearchResult
var imdbSearchResult = function(){
    //var
    // var searchResult = element.all($('.findList')).all($('.result_text'));

    var searchResult = element(by.css('.result_text'));
    var searchResultLink = element(by.css('.result_text > a'));

    //get page
    this.get = async function(url){
        await browser.get(url);
    };

    //helper functions
    this.getSearchResults = function(){
        return searchResult;
    };
    this.getSearchResultLink = function() {
        return searchResultLink;
    }
    /*
    this.getSearchResultCount = function(){
        return searchResult.count();
    }
    this.getSearchResultByIndex = function(index) {
        return searchResult[index];
    };
    */
}

module.exports = new imdbSearchResult()