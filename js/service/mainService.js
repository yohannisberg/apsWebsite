angular.module('apsApp').service('mainService', function($http, $stateParams){

  this.forWeather=function(){
    return $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+$stateParams.zip+",us&appid=c564d7d14ebfc62e9a19d46594f5be0e").then(function(response){
      return response.data;
    })
  }

var firstLink = '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=3609205700/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://apsmusic.bandcamp.com/album/southbound">Southbound by A.P.S.</a></iframe>;'

  this.apsShows=[
    {
    date: "2017-03-27",
    venue: "Cairo",
    city: "Arlington Heights, IL",
    zip: "60004"
  }
]

  this.apsAlbums=[
    {
      title: "LIVE ON NEW YEAR'S EVE",
      date: "COMING 2017",
      cover: "./pictures/live.jpg",
      tracks: [
        "1. CUT DOWN THE SUN",
        "2. PLAY WITH FIRE",
        "3. THE RULEBREAKER",
        "4. BLITZKRIEG BOP (RAMONES COVER)",
        "5. MONSTER",
        "6. BREATHE",
        "7. END OF THE WORLD",
        "8. YOU WRECK ME",
        "9. EPIPHANY",
        "10. CRYPTIC STORIES",
        "11. LET ME GO",
        "12. BACK AROUND",
        "13. MIDNIGHT"
      ]},
    {
      title: "SOUTHBOUND",
      date: "RELEASED 2015",
      cover: "./pictures/southbound.jpg",
      embedLink: firstLink,
      tracks: [
        "1. PLAY WITH FIRE",
        "2. BACK AROUND",
        "3. SPEEDSTER",
        "4. LET ME GO",
        "5. THE WATERS",
        "6. BREATHE",
        "7. THE RULEBREAKER",
        "8. RITUALS",
        "9. AT THE DANCE",
        "10. CRYPTIC STORIES",
        "11. HOME"
      ]},
      {
      title: "OH! GRAVITY - THE SINGLE",
      date: "RELEASED 2014",
      cover: "./pictures/ohgravity.jpg",
      tracks: [
        "1. OH! GRAVITY (SWITCHFOOT COVER)"
      ]},
      {
      title: "CUT DOWN THE SUN - THE SINGLE",
      date: "RELEASED 2013",
      cover: "./pictures/cutdownthesun.jpg",
      tracks: [
        "1. CUT DOWN THE SUN",
        "2. YOU WRECK ME (TOM PETTY COVER)"
      ]},
      {
      title: "HOLY WATER - THE SINGLE",
      date: "RELEASED 2012",
      cover: "./pictures/holywater.jpg",
      tracks: [
        "1. HOLY WATER",
        "2. EPIPHANY (STAIND COVER)"
      ]},
      {
      title: "NO (LOVE IV) ME",
      date: "RELEASED 2012",
      cover: "./pictures/nolove.jpg",
      tracks: [
        "1. NO (LOVE IV) ME",
        "2. MONSTER (ABANDONED POOLS COVER)"
      ]},
  ]

});
