
const closeButton = document.getElementById("closeButton");


let quotes = [

`"The Best Way To Get Started Is To Quit Talking And Begin Doing." Walt Disney `,

`"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty." Winston Churchill`,

`"Dont Let Yesterday Take Up Too Much Of Today." Will Rogers`,

`"You Learn More From Failure Than From Success. Dont Let It Stop You. Failure Builds Character."`,

`"Its Not Whether You Get Knocked Down, its Whether You Get Up." Vince Lombardi`,

`"If You Are Working On Something That You Really Care About, You Dont Have To Be Pushed. The Vision Pulls You." Steve Jobs`,

`"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do." Rob Siltanen`,

`"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough." Og Mandino`,

`"We May Encounter Many Defeats But We Must Not Be Defeated." Maya Angelou`,

`"Creativity Is Intelligence Having Fun." Albert Einstein`,

`"Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.\"
 Tupac Shakur `,

`"Reality is wrong. Dreams are for the real."Tupac Shakur`,

 `"If you can make it through the night, theres a brighter day." 
 Tupac Shakur`,

 `"Im not a follower. Im a leader. And anyone who speaks their mind is always criticized." Tyler, the Creator` ,

 `"I think people get caught up in having an identity." Tyler, The Creator` ,

 '"People pay for what they do, and still more for what they have allowed themselves to become. And they pay for it very simply by the lives they lead. James Baldwin',

 '"I dont think about art when Im working. I try to think about life." Basquiat',

 '"You can play a shoestring if youre sincere." John Coltrane',

 '"Im a Muslim, but I think Jesus would have a drink with me. He would be cool. He would talk to me." Mike Tyson',

 '"I aint the same person I was when I bit that guys ear off." Mike Tyson',

 '"Never memorize something that you can look up." Albert Einstein' ,



];


function newQuote(){


let randomQuote = Math.floor(Math.random()*(quotes.length)); //create a random quote genertator

document.getElementById("quotesHere").innerHTML = quotes[randomQuote]; //pass random quote generator into array


closeButton.style.visibility= "visible";
}

function qClose (){


closeButton.style.visibility= "hidden";   

document.getElementById("quotesHere").innerHTML = "";





}

qclose()








