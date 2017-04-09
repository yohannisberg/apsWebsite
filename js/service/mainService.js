angular.module('apsApp').service('mainService', function($http, $stateParams){

  this.forWeather=function(){
    return $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+$stateParams.zip+",us&appid=c564d7d14ebfc62e9a19d46594f5be0e").then(function(response){
      return response.data;
    })
  }

var firstLink = '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=3609205700/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://apsmusic.bandcamp.com/album/southbound">Southbound by A.P.S.</a></iframe>;'

  this.apsShows=[
    {
    date: "2017-02-25",
    venue: "Real Time Sports Bar",
    city: "Elk Grove Village, IL",
    zip: "60007"
  },
    {
    date: "2017-01-20",
    venue: "Cairo's Ale House",
    city: "West Chicago, IL",
    zip: "60185"
  },
  {
  date: "2016-12-31",
  venue: "Lee Street Sports Bar & Games",
  city: "Des Plaines, IL",
  zip: "60016"
  },
  {
  date: "2016-11-19",
  venue: "Richie's Bar and Restaurant",
  city: "Schiller Park, IL",
  zip: "60176"
  },
  {
  date: "2016-10-01",
  venue: "Lee Street Sports Bar & Games",
  city: "Des Plaines, IL",
  zip: "60016"
  },
  {
  date: "2016-08-13",
  venue: "Lee Street Sports Bar & Games",
  city: "Des Plaines, IL",
  zip: "60016"
},
{
date: "2016-07-22",
venue: "The Harbor's Edge",
city: "Waukegan, IL",
zip: "60085"
},
{
date: "2016-07-15",
venue: "Moe's Tavern",
city: "Chicago, IL",
zip: "60618"
},
{
date: "2016-06-25",
venue: "The Harbor's Edge",
city: "Waukegan, IL",
zip: "60085"
},
{
date: "2016-06-18",
venue: "Jaxx Pub & Grill",
city: "Glendale Heights, IL",
zip: "60139"
},
{
date: "2016-06-12",
venue: "Chicago Loop Sports Bar & Grill",
city: "Streamwood, IL",
zip: "60107"
},
{
date: "2016-05-25",
venue: "Arcada Theatre",
city: "St Charles, IL",
zip: "60174"
},
{
date: "2016-05-18",
venue: "Lamplighters Tavern & Grill",
city: "Palatine, IL",
zip: "60067"
},
{
date: "2016-04-21",
venue: "Maple Ave Pub",
city: "Lisle, IL",
zip: "60532"
},
{
date: "2016-04-01",
venue: "Reilly's Roadhouse",
city: "Romeoville, IL",
zip: "60446"
},
{
date: "2016-03-23",
venue: "Juliana's Restaurant",
city: "Chicago, IL",
zip: "60659"
},
{
date: "2016-03-03",
venue: "Richie's Bar and Restaurant",
city: "Schiller Park, IL",
zip: "60176"
},
{
date: "2016-02-18",
venue: "Maple Ave Pub",
city: "Lisle, IL",
zip: "60532"
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
