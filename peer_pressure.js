function start() {
  hidedrink();
  hide();
  hidecomp();
}
//I created a function to hide 3 buttons that will be used in the text adventure
function Story() {
  if (document.getElementById("user_name").innerHTML == "What would you do? (Peer Pressure)") {
     document.getElementById("user_name").innerHTML = new_town;
     document.getElementById("body").src = "HPHS.jpg";
     //https://www.youtube.com/watch?v=u4tuUvTmtxg
   } else if (document.getElementById("user_name").innerHTML == new_town) {
      document.getElementById("user_name").innerHTML = enter_store;
      document.getElementById("body").src = "dressshopping.gif";
      //http://giphy.com/search/mean-girls-clothes/5
   } else if (document.getElementById("user_name").innerHTML == enter_store) {
      document.getElementById("user_name").innerHTML = shoplift;
      document.getElementById("body").src = "should.jpg";
      //http://www.actualorganics.com/finding-out-what-you-really-want/
      show();
      hidenext();
   } else if (document.getElementById("user_name").innerHTML == yes){
      document.getElementById("user_name").innerHTML = arrival_yes;
      document.getElementById("body").src = "party.jpg";
      //http://sweet-pics.site/w/what-happens-at-a-high-school-house-party.html
   } else if (document.getElementById("user_name").innerHTML == no){
      document.getElementById("user_name").innerHTML = arrival_no;
      document.getElementById("body").src = "party.jpg";
      //http://sweet-pics.site/w/what-happens-at-a-high-school-house-party.html
   } else if (document.getElementById("user_name").innerHTML == arrival_no){
      document.getElementById("user_name").innerHTML = alcohol;
      document.getElementById("image").src = "what.jpg";
      //https://chelseamappas.wordpress.com/2014/10/16/oc-sober-31-day-challenge/
   } else if (document.getElementById("user_name").innerHTML == arrival_yes){
      document.getElementById("user_name").innerHTML = alcohol;
      document.getElementById("body").src = "what.png";
      //https://chelseamappas.wordpress.com/2014/10/16/oc-sober-31-day-challenge/
   } else if (document.getElementById("user_name").innerHTML == alcohol){
      document.getElementById("user_name").innerHTML = offer;
      document.getElementById("body").src = "gettingadrink.jpg";
      //https://www.buzzfeed.com/fernandagmeirelles/which-how-i-met-your-mother-house-should-you-live-1t7bb?utm_term=.xr38nbjM8#.km6BKDXeB
   } else if (document.getElementById("user_name").innerHTML == offer){
      document.getElementById("user_name").innerHTML = drink_choice;
      document.getElementById("body").src = "holding.jpg";
      //http://centrreabilitacii.ru/news/uchenye-vyyasnili-chto-sluzhba-v-armii-dlya-zhenshchin-grozit-alkogolizmom/
      hidenext();
      showdrink();
   } else if (document.getElementById("user_name").innerHTML == yes_d){
      document.getElementById("user_name").innerHTML = monday;
      document.getElementById("body").src = "money.jpg";
      //http://www.instablogs.com/five-most-corrupt-countries-of-the-world.html
   } else if (document.getElementById("user_name").innerHTML == no_d){
      document.getElementById("user_name").innerHTML = goodmonday;
      document.getElementById("body").src = "lunch.jpg";
      //https://wl-static.fotolia.com/jpg/00/84/47/87/400_F_84478763_yXihqr4cUBxDB5sfQqQXQeZMkSam1G1q.jpg
   } else if (document.getElementById("user_name").innerHTML == goodmonday){
      document.getElementById("user_name").innerHTML = strong;
      document.getElementById("body").src = "strong.jpg";
      //http://www.picshunger.com/quotes/inspiring-quotes/
      hidenext();
   } else if (document.getElementById("user_name").innerHTML == monday){
      document.getElementById("user_name").innerHTML = picture;
      document.getElementById("body").src = "buyusdrugsorelse.jpg";
      //http://www.shutterstock.com/nl/cat.mhtml?keyword_search=1&amp;searchterm=domm&pl=77643-108110&utm_medium=Affiliate&utm_campaign=Idee+Inc.&utm_source=77643&irgwc=1
   } else if (document.getElementById("user_name").innerHTML == picture){
      document.getElementById("user_name").innerHTML = corner;
      document.getElementById("body").src = "puppet.jpg";
      //http://lasic-art.deviantart.com/art/marionette-106507291
   } else if (document.getElementById("user_name").innerHTML == corner){
      document.getElementById("user_name").innerHTML = steal;
      document.getElementById("body").src = "stealingmoney.jpg";
      //https://www.dailyworth.com/posts/2296-10-habits-to-get-rich
   } else if (document.getElementById("user_name").innerHTML == steal){
      document.getElementById("user_name").innerHTML = tyler;
      document.getElementById("body").src = "tylermorgan.jpg";
      //http://medicalxpress.com/news/2015-02-easier-access-prescription-drugs-teens.html
   } else if (document.getElementById("user_name").innerHTML == tyler){
      document.getElementById("user_name").innerHTML = giving;
      document.getElementById("body").src = "pcp.jpg";
      //http://wedorecover.com/addiction/addiction-types/pcp-addiction.html
   } else if (document.getElementById("user_name").innerHTML == giving){
      document.getElementById("user_name").innerHTML = principal;
      document.getElementById("body").src = "choice.jpg";
      //https://unityinthetruth.com/tag/occult/
      showcomp();
      hidenext();
    } else if (document.getElementById("user_name").innerHTML == comply){
       document.getElementById("user_name").innerHTML = day;
       document.getElementById("body").src = "suspended.jpg";
       //https://ieanea.org/kidinhallway/
     } else if (document.getElementById("user_name").innerHTML == day){
        document.getElementById("user_name").innerHTML = strong;
        document.getElementById("body").src = "strong.jpg";
        //https://ieanea.org/kidinhallway/
        hidenext();
     } else if (document.getElementById("user_name").innerHTML == lie){
        document.getElementById("user_name").innerHTML = month;
        document.getElementById("body").src = "rumor.jpg";
        //https://www.shutterstock.com/search/mean%20girls?utm_medium=Affiliate&utm_campaign=Idee%20Inc.&utm_source=77643&irgwc=1
     } else if (document.getElementById("user_name").innerHTML == month){
        document.getElementById("user_name").innerHTML = help;
        document.getElementById("body").src = "strong2.jpg";
        //http://s3.amazonaws.com/brainfree/how-do-you-do-meditation-491.html
        hidenext();
     }
 }
//This function changes the phrases in the paragrpah with  id name user_name as you click on next or any other button.
//It also adds pictures and changes them.

function yes_click() {
  document.getElementById("user_name").innerHTML = yes;
  document.getElementById("body").src = "steal.jpg";
  hide();
  shownext();
}
//This function gives a user a specific response and image when they click on the button with the id  yes_button

function no_click() {
  document.getElementById("user_name").innerHTML = no;
  document.getElementById("body").src = "putitback.jpg";
  hide();
  shownext();
}

//This function gives a user a specific response when they click on the button with the id  no_button

function hide(){
   document.getElementById("yes_button").style.visibility = 'hidden';
   document.getElementById("no_button").style.visibility = 'hidden';
}
//This function hides the buttons used.

function show(){
  document.getElementById("yes_button").style.visibility = 'visible';
  document.getElementById("no_button").style.visibility = 'visible';
}
//This function shows the buttons used.
function shownext(){
  document.getElementById("next").style.visibility = 'visible';
}
//This function shows the next button used.
function hidenext(){
   document.getElementById("next").style.visibility = 'hidden';
 }
 //This function hides the next button used.
function hidedrink(){
    document.getElementById("YES").style.visibility = 'hidden';
    document.getElementById("NO").style.visibility = 'hidden';
 }
//This function hides the buttons used.
function showdrink(){
   document.getElementById("YES").style.visibility = 'visible';
   document.getElementById("NO").style.visibility = 'visible';
 }
//This function shows the buttons used.
function yes_drink(){
  document.getElementById("user_name").innerHTML = yes_d;
  document.getElementById("body").src = "cheers.jpg";
  hidedrink();
  shownext();
}
//This function gives a user a specific response when they click on the button assigned with this function (onclick event)
function no_drink(){
 document.getElementById("user_name").innerHTML = no_d;
 document.getElementById("body").src = "home.png";
 hidedrink();
 shownext();
}
//This function gives a user a specific response when they click on the button assigned with this function (onclick event)
function tell() {
  document.getElementById("user_name").innerHTML = comply;
  document.getElementById("body").src = "free.jpg";
  hidecomp();
  shownext();
}
//This function gives a user a specific response when they click on the button assigned with this function (onclick event)
function notell() {
  document.getElementById("user_name").innerHTML = lie;
  document.getElementById("body").src = "questionable.jpg";
  hidecomp();
  shownext();
}
//This function gives a user a specific response when they click on the button assigned with this function (onclick event)
function hidecomp(){
   document.getElementById("comp").style.visibility = 'hidden';
   document.getElementById("no_comp").style.visibility = 'hidden';
}
//This function hides buttons
function showcomp(){
  document.getElementById("comp").style.visibility = 'visible';
  document.getElementById("no_comp").style.visibility = 'visible';
}
//This function shows buttons
var new_town = 'You are new in town and don\'t know anyone at your new school. By your third day, you feel very lonely and you desperately want friends. On the way to your second period precalculus class, two girls approach you. They introduce themselves as Sam and Alex. They ask you "Wanna come to our party on Saturday?" You enthusiastically agree, eager to make new friends.';
var enter_store = 'On Friday, Sam and Alex take you shopping for a dress to wear to the party. You find the perfect dress. Sam says "That would look great on you!" Alex agrees, and says "Totally! Ok, now let\'s go get a burger or something. I\'m starving!" You follow Sam and Alex, thinking that they were headed towards the cashier, but they pass the line. Confused, you say "Hey guys, the cashier is here." The girls giggle, as though keeping a secret. Alex says "Cashier? Are you seriously gonna pay for that dress? It\'s really expensive!" She\'s right, you think to yourself. But it\'s so pretty! You are sad as you realize you really can\'t afford it."You\'re right," you concede. "I\'ll go put it back..." Sam and Alex exchange glances. "No silly, just take it," Sam says causually. "Come on, let\'s go."';
var shoplift = 'Will you shoplift the dress?';
var yes = 'You agree reluctantly, ignoring everything your parents have taught you about stealing and how terribly wrong it is."Finally, we can get food!" Alex says. You can practically feel your heart thumping in your throat as you evade the security and step outside with the stolen dress shoved in your bag. You don\'t get caught by the cops- instead remorse catches you. You trudge home with a heavy heart and feelings of regret.';
var no = 'Sam glares at you condescendingly. "You\'re such a loser. You COULD have had an awesome dress, but I guess you don\'t really care about the party." Alex says "Yeah, you\'re really weak. Whatever, at least we can get food now." You feel belittled and surprised that these girls could consider doing something so wrong, but they are your only friends, so you decide to stick with them for now. You go home early and try to forget that Sam and Alex called you weak.';
var arrival_no = 'You arrive at the party expecting a small group of people, but it looks like the whole school is here! You feel really awkward and out of place because everyone else seems to know each other. Suddenly, you see two familiar faces. Sam and Alex! You sigh a breath of relief as they approach. "Hey you made it! Too bad you couldn\'t wear that awesome dress though... This is alright," Alex says, scannning your clothes over with judgemental eyes. You feel really embarrassed, and for a moment you regret your decision at the mall on Friday. Sam says, "Whatever, it\'s history... Let\'s go grab a drink."';
var arrival_yes= 'You arrive at the party expecting a small group of people, but it looks like the whole school is here! You feel really awkward and out of place because everyone else seems to know each other. Suddenly, you see two familiar faces. Sam and Alex! You sigh a breath of relief as they approach. "Hey you made it! You look amazing, you have to take risks in your life to have fun," Alex says in reference to Friday. You silently applaud yourself for making that decision. Sam says, "Let\'s go grab a drink."';
var alcohol = 'The three of you stroll over to the table where there are a bunch of bottled drinks, none of which you recognize. Upon closer examination, you realize why. "Guys... is this," you say hesitantly. "Alcohol?"';
var offer = '"Yeah," says Sam, handing one to you. "This one\'s my favorite!" Alex grabs another one, pops it open and yells "Bottoms up!" To your surprise, both girls chug the alcohol. Minutes pass, and you\'re still clutching the bottle Sam gave you in a death grip. Sam and Alex look like they are having the time of their lives, dancing and chatting with other popular kids. They call over to you, "Drink it already!" and "Come have a good time!"';
var drink_choice = 'You stare down at the bottle. You mentally make a list of all the reasons you shouldn\'t. "I can\'t drink this, I\'m underaged! I could get in serious trouble." Then you think of the positives... but there is only one. To have a good time tonight and make friends and not be so awkward. Will you drink the alcohol?'
var yes_d = 'Even though the cons clearly outweigh the pros, you make an exception because you really want to stop feeling so out of place. You pop open the bottle and take a sip. The taste alone makes you gag. Some shady-looking guys laugh at your inexperience. That makes you mad, and determined to belong.  You chug the whole thing with indignation. The liquor is bitter and corrosive as it flows down your throat. Sam says "Woo! Atta girl!" and Alex gives you more drinks. You feel so at peace and happy that you are finally accepted. After the 5th drink, you black out and have no memory of the rest of the night.';
var no_d = 'You decide not to drink and leave the party, deciding not risk anything. Sam and Alex are not who you thought they were. You smile as you leave, as you champion yourself for not giving into peer pressure.';
var goodmonday= 'You decide that Sam and Alex are not the type of friends you want, so you distance yourself from them. You make new friends during lunch and surround yourself with people who strive to be better all the time.';
var monday = 'At school on Monday, you try to avoid Sam and Alex but they find you on the way to your Italian class. They ask you for $50. "Why?" you inquire. "So you can buy us more PCP," answers Sam. "You guys do drugs too? And you want ME to buy them for you?!" By now you really want to get away from them.';
var picture = '"No way! I\'m outta here," you say, turning to leave. But Alex shoves her phone in your face. You have never been so mortified in your life. The phone shows a picture of you passed out, naked on someone\'s bed. Alex says, "Here\'s the deal, sweetie! If you don\'t buy us drugs, then we\'ll Snap this pic to everyone!"';
var corner = 'You feel like an weak animal that\'s been cornered. "Alright. I\'ll do it," you mumble. "Aww what did she say, Sam? I can\'t hear her little baby voice." "I said I\'ll do it!" I say shamefully. "I\'ll give it to you on Thursday." Sam says, "No, you have until Wednesday." "Fine!" you blurt, almost in tears. They laugh at their domination over you, and continue on their way. You go to your Italian class, wondering how you even got in this mess.';
var steal = 'Where will you get money? When you get home, you wait until your mom is in the kitchen. Then you sneak into her room and steal $50 dollars from her purse. Shoving the bills into your school bag, you sigh wearily.';
var tyler = 'You have only been in this school for 3 weeks, yet you already know who the drug dealer for your grade is. Tyler Morgan. You approach him and ask him for PCP. He gives hands it to you as he eyes you skeptically. You get out of there as fast as you can. You can hear Tyler chuckling behind you.';
var giving = 'Later that day, Sam and Alex find you and you give them the drugs. "Sweet! You\'re not so lame after all!" says Alex. "So you won\'t show the pic, right?" you ask. "No sis, you\'re clean now." Sam replies.';
var principal = 'You feel so relieved. The day is going well. In your precalculus class, you get back a test you took last week. You smile at the large and bold 100% at the top of the paper. You completely forget about the past week\'s struggles. Next period in Physics class, you are an active participator. You feel so mentally light now, like you can do anything. Then the teacher says that you are requested in the Principal\'s office. Your heart jumps in your throat. Your legs feel like jelly as you walk downstairs. In the office, the principal isn\'t alone. Your mom is there too! The principal peers over his glasses and asks you, "Young lady, do you know why you\’re here? If you are honest, then the consequences will not be so bad." Will you comply?';
var comply = '"Yes, sir…" you say, staring down. "I bought drugs from someone at school to give to two girls because they blackmailed me with a nude photo of me. They threatened to show everyone if I didn\'t do what they said…"';
var lie = '"N-No," you stutter. You glance at your mom, who is glaring at you and looks concerned at the same type. The principal sighs. "You were seen today giving drugs to two girls in the hallway…" Your heart beats so fast that you stop listening to to him. You just wish you could turn back time, to when you met Sam and Alex. But you can\'t.';
var day = 'You are suspended for a mere two days for your actions. Although your parents are upset that you stole from your mom, they are relieved that you were so honest in the end.';
var month = 'As a result of your actions, the principal suspends you for a month. You\'ll have a lot to catch up with academically when you return, and you\'ll be regarded as a drug dealer. Your parents find out that you stole from your mom, and you lose their trust. And who knows how infamous you\'ll become around school?';
var help = 'Lying only prolongs problems. With more lies, comes more problems. It\’s always best to tell the truth, even if it feels like the hardest thing in the world at the moment. You can look back and feel proud that you had the guts to tell the truth.';
var strong = 'It\'s always easy to be strong. The pressure of doing things to make others accept you can be nerve-wracking. It\'s best to make decisions that would make you happy. Never do something that would make you full of regret in the future. Once you spend a day, you don\'t get a second chance at reliving that day. Spend your time wisely and productively. Most importantly, remember to have fun and smile.';
//These are variables used in the function story to make it look more organized.
