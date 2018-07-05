//imdbFilm
var imdbFilm = function() {
    //vars
    var filmTitle = $('.title_wrapper > h1');
    // var filmTitle = element(by.className('title_wrapper'))
    var filmCriticalRating = element(by.css('span.metacriticScore score_favorable.titleReviewBarSubItem'))
    var firstCast = element(by.css('.cast_list a'));

    //get pg
    this.get = async function(url){
        browser.get(url);
    };

    //helper
    this.getFilmTitle = function(){
        return filmTitle.getText();
    };
    this.getFilmRating = function(){
        return filmCriticalRating.getText();
    };
    this.getFirstCastName = function() {
        return firstCast.getText();
    };
    this.goToFirstCast = function() {
        firstCast.click();
    };

};

module.exports = new imdbFilm();