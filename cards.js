var App = function(){
  // Create a BasicCard constructor.
  var BasicCard = function(front, back){
    if (!(this instanceof BasicCard)) {
     return new BasicCard(front, back);
   }
    var self = this;
    self.front = front;
    self.back = back;
  };

  var sally = new BasicCard('Where did Sally go?', '...down to the seashore.');
  console.log(sally.front);
  console.log(sally.back);

  // Create a ClozeCard constructor.
  var ClozeCard = function(text, deletion){
    if (!(this instanceof ClozeCard)) {
     return new ClozeCard(text, deletion);
   }
    var self = this;
    self.text = text;
    self.deletion = deletion;
    self.result = this.createResult();
  };

  //delete deletion from text
  ClozeCard.prototype.createResult = function(){
      if(this.text.indexOf(this.deletion) != -1){
        return this.text.replace(this.deletion,'...');
      }else{
        return this.deletion + ' not found in sentence';
      }
    };

  var mary = new ClozeCard('mary had a little lamb', 'hotdog');
  console.log(mary.text);
  console.log(mary.deletion);
  console.log(mary.result);
};

App();
