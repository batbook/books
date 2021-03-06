var path=document.URL.split("?")[1].split("&")
if(!path[0].split("=")[1]){
  location.href="home.html"
}
fetch("https://www.googleapis.com/books/v1/volumes?download=DOWNLOAD_UNDEFINED&filter=FILTER_UNDEFINED&langRestrict=it&libraryRestrict=LIBRARY_RESTRICT_UNDEFINED&maxAllowedMaturityRating=MAX_ALLOWED_MATURITY_RATING_UNDEFINED&orderBy="+ (Boolean(path[1]) ?((path[1]=="order=n") ? "newest" : "relevance"): "relevance")+"&printType=BOOKS&q="+decodeURI(path[0].split("=")[1]))
    .then(response => response.json())
    .then(data => {vue.json=data;console.log(data.items)});


Vue.component('libri', {
   template: '#libri-template',
    data: function () {
    return {

      backcover:false,
      buy:false,
      //isbn:vue.json.items[].volumeInfo.industryIdentifiers[0].identifier
      //json:vue.json
    }
  },
});

 var vue=new Vue({
  el:'#app',

  data: {
    value:document.URL.split('?')[0],
    title:path[1],
    select:'bo',
    search:decodeURI(path[0].split("=")[1]),

    json:null,
    links:{
      googlePlay:'https://play.google.com/store/search?q=',
      kobo:'https://www.kobo.com/kb/kb/search?query=',
     // giunti:'https://www.giunti.it/ricerca?q=',
      //Bompiani:'https://www.bompiani.it/catalogo/',
      //mondadori:'https://www.mondadoristore.it/search/?g=',
      //Penguin:'https://www.penguinrandomhouse.com/search/cazzo?q=',
      //hoepli:'https://www.hoepli.it/libro/cazzo/',
      //Feltrinelli:'https://www.feltrinellieditore.it/opera/opera/'
      amazonit:'https://www.amazon.it/s?k=',
      amazonKindle:"https://www.amazon.com/s?i=digital-text&k=",
     // HamperCollinsIT:"https://www.harpercollins.it/risultati-della-ricerca/?keyword=",
    }
  },

})