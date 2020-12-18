function log(a,b){document.write(a+": " + b +"</br></br>")}

var easy = 1/10,
    medium = 2/5;
    hard = 4/5;

var articles = [
	"GitHub has grown tremendously over the years because it provides a comprehensive set of features needed by development teams of all shapes and sizes. But it doesn't quite do everything. Suppose you are one of those developers who is looking for a feature that GitHub does not yet support. Maybe you would like to automate some of the more mundane tasks you deal with, such as following up with contributors who did not label an issue they created. Or maybe you would like to automatically close any branches or pull requests that have not been touched in months. Whatever your need is, you are probably not alone. The good news is that GitHub Apps offer a way for you to fill the gaps and automate processes in your repository. The better news is that someone else might have already built the solution you need. In this module, you learn how to automate DevOps processes by using GitHub Apps that handle repetitive tasks, enforce team policies, and maintain a tidy repository.",
	"We believe that men will be punished for their own sins, and not for Adam’s transgression.",
	"We believe that through the Atonement of Christ, all mankind may be saved, by obedience to the laws and ordinances of the Gospel."
];
  
function processText(text, level){ 
  var textArray = text.split(" "),
      wordsToExtract = Math.floor(textArray.length * level),  
      words = [],
      indexes = [];  
  
  for(var i = 0; i < wordsToExtract; i++){
    selection = Math.floor(Math.random() * textArray.length ); 
    if(indexes.indexOf(selection)){
      words.push( "<span class='word'>" + textArray[selection] + "</span>");
      textArray[selection] = "<span class='hidden'>" + textArray[selection] + "</span>"
    }
    else{
      i--;
    } 
    indexes.push(selection);
  }
  
  return{
    sentence: textArray,
    words: words
  }
}

data = processText(articles[0], easy);

$("#sentence").html(data.sentence.join(" "));
$("#words").html(data.words.join(" ")); 

var clickedValue;

$("span.word").on('click', function(){
  $("span.word").removeClass('clicked');
  clickedValue = $(this).text();
  $(this).addClass('clicked');
  $("span.hidden").addClass("target");
});

$("span.hidden").on('click', function(){
  matchValue = $(this).text();
  if(matchValue === clickedValue){
    $(this).removeClass("hidden").removeClass("target").addClass("correct");
    $(".target").removeClass("target");
    $(".clicked").remove();
    if( $(".word").length === 0 ){
      alert("you win!");
    }
  }
});