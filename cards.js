
// Create a BasicCard constructor.
var BasicCard = function(front, back){
  if (!(this instanceof BasicCard)) {
   return new BasicCard(front, back);
 }
  var self = this;
  self.front = front;
  self.back = back;
};

var sally = new BasicCard('Where did Sally go?', '...down to the seashore.')
console.log(sally.front);
console.log(sally.back);

// Create a ClozeCard constructor.
var ClozeCard = function(text, deletion){
  if (!(this instanceof ClozeCard)) {
   return new ClozeCard(front, back);
 }
  var self = this;
  self.text = text;
  self.deletion = deletion;
  self.result = this.createResult();
};

ClozeCard.prototype.createResult = function(){
    if(this.text.indexOf(this.deletion) != -1){
      return this.text.replace(this.deletion,'...')
    }else{
      return this.deletion + ' not found in sentence'
    }
  };

var mary = new ClozeCard('mary had a little lamb', 'hotdog');
console.log(mary.text);
console.log(mary.deletion);
console.log(mary.result);

// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
// As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:
// The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.
//
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");
//
// // "Who was the first president of the United States?"
// console.log(firstPresident.front);
//
// // "George Washington"
// console.log(firstPresident.back);
//
// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");
//
// // "George Washington"
// console.log(firstPresidentCloze.cloze);
//
// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "
//
// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "
//
// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops");
