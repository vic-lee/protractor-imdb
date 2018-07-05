//imdbStar
var imdbStar = function(){
    
    var name = element(by.css('h1.header > span'));

    this.get = async function(url){
        await browser.get(url);
    };

    this.getNameText = function() {
        return name.getText();
    };
    
};

module.exports = new imdbStar();