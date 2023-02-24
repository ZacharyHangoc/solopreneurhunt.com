var listTopics =[
    "Twitter Monetize",
    "Indie Hacking",
    "Web Design",
    "Copywriting",
    "Sales",
    "Youtube",
    "Dropshipping",
    "Writing",
    "Personal Growth",
    "Health",
    "Fitness",
    "E-Commerce",
    "Coaching",
    "Affiliate marketing",
    "Spirituality",
    "Graphic design",
    "Freelancing",
    "Podcast",
    "Marketing",
    "SMMA"
  ];   

    //the solopreneur topics array
function printTopicsBtn() {
    for (var i = 0; i < listTopics.length; i++) {
       var btn = document.createElement("button");
       var t = document.createTextNode(listTopics[i]);
       btn.appendChild(t);
       document.querySelector(".button-list").appendChild(btn);
       console.log(document.querySelectorAll(".topics-container button")[i]);
       document.querySelectorAll(".topics-container button")[i].classList.add("button-75");
    }
}
printTopicsBtn(); // call the topics button creator function
