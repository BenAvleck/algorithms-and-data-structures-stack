var Stack = function(){
  this.top = null
  this.size = 0
  this.last = null
}

var Node = function(data){
this.data = data 
this.pPrev = null
}

Stack.prototype.push = function(data){

  var node = new Node(data)
  if(this.top == null ) {this.last = node}
  node.pPrev = this.top 
  this.top = node
  this.size++

  return this.top
}

Stack.prototype.clear = function(){
  var current = this.top
  while(current.pPrev != null)
  {
    this.pop()
  }
}

Stack.prototype.pop = function() {
  temp = this.top
  this.top = this.top.pPrev
  this.size--
  return temp
}

Stack.prototype.reverseTopLast = function(){
  var dTop = this.top.data
  this.top.data = this.last.data
  this.last.data = dTop
}

Stack.prototype.reverse = function(){
  var additional = new Stack();
  var currNode = this.top;
  var addNode;
  additional.top = addNode;
for (var i = 0; i < this.size; i++) {
  addNode = new Node(currNode.data);
  addNode = addNode.pPrev;
  currNode = currNode.pPrev;
}
this.top = additional.top;
}

Stack.prototype.getTop = function()
{
  return this.top.data
}

Stack.prototype.empty = function()
{
  return this.top == null? true: false
}

Stack.prototype.affiliation = function(data)
{
  const curr = this.top;
for(i = 0; i < this.size; i++)
{
  if(curr.data = data)
  {return true;}
  curr = curr.pPrev;
}
return false;
}

const arr = new Stack();
arr.push("one");
arr.push("two");
arr.push("three");
arr.push("four");
console.log(arr.getTop())
console.log("Hello")
console.log('Привет от JavaScript!');
