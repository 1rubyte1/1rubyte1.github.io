var $=jQuery.noConflict();jQuery(function($){
$("#bubble").each(function(){$(".cover").pobubble({color:"#ffffff",ammount:10,min:.1,max:.2,time:60,vertical:true,horizontal:true,style:'circle'});});$("#snow").each(function(){posnow();});$("#star").each(function(){postars($('.cover')[0]).init();});
$(".video").each(function(){$(".stop-button").click(function(){$(".stop-button").toggleClass('fa-play').toggleClass('fa-pause');
var videoBG=document.getElementById("video");if(videoBG.paused)
videoBG.play();else videoBG.pause();});
$(".volume-button").click(function(){$(".volume-button").toggleClass('fa-volume-off').toggleClass('fa-volume-up');$("video").prop('muted',!$("video").prop('muted'));});});});
function refresh(){
var count = Math.floor(Math.random() * videoArray.length);
document.getElementsByTagName('source')[0].src = "videos/" + videoArray[count];video.load();}
var videoArray = ["Highschool dxd Timmy ecchi amv ( Этти аниме ).mp4","[GAP] AMV - DIVA (Ecchi).mp4","「AMV」- Тебе понравится.mp4","「AMV」Anime Mix- Murder Melody.mp4","【AMV】Toxic.mp4","► Oppai ♬ AMV.mp4","Akiba's Trip「 Amv」– Naughty Or Nice.mp4","AMV - Determination 720p.mp4","AMV - The Witchtrip - Bestamvsofalltime Anime MV.mp4","Bad Girlfriend AMV.mp4","HIPS SWING!.mp4","Ecchi amv Bad dog (online-video-cutter.com).mp4","Sword Art Online AMV - Unbreakable [Sakura-con 2013 Entry] [HD].mp4","1.mp4","2.mp4","To Love Ru Fãs AMV Tributo 06 - Especial [Mimimi].mp4","3.mp4","6.mp4","7.mp4"];
