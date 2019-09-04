class node{
  constructor(val)
  {
    this.val=val
    this.next=null
  }
}

class linkedList
{
  constructor()
  {
    this.head=null
    this.tail=null
    this.length=0
  }
  push(val)
  {

    var newNode=new node(val)

    if(!this.head)
    {
      this.head=newNode
      this.tail=this.head
    }else{
      this.tail.next=newNode
      this.tail=newNode
    }

    this.length++
    return this

  }

  pop()
  {


      var current = this.head
       var prev = current

    if(this.length === 0) console.log("what the hell....list is empth")

      if(this.head === this.tail)
      {
        this.head=null
        this.tail=null
        this.length=0
      }
else{
       while(current.next)
       {
        prev=current
        current=current.next
      }
      this.tail=prev
      this.tail.next=null
      this.length--
      return this
}  }


  traverse()
  {
     var current = this.head

       while(current)
       {
        console.log(current.val)
        current=current.next
       }

  }


  shiftList()
  {
      if(! this.head) return undefined

        var current=this.head
        this.head=current.next
        this.length--
        return current
  }

unshiftList(val)
{
  var newNode=new node(val)

  if(!(this.head))
  {
    this.head=newNode
    this.tail=this.head
  }

  newNode.next=this.head
  this.head=newNode
  this.length++

  return this
}

get(index)
{
  if(index<0 || index>= this.length) return null

    var count =0
  var current=this.head
  while(count!==index)
  {
    current=current.next
    count++
  }
  return current
}

set(index,val)
{
  var foundNode=this.get(index)
  if(foundNode){
    foundNode.val=val
    return true
  }
}

insert(index , value)
{
  if(index<0 || index> this.length) return false
  if(index===this.length) return !!this.push(value)
  if(index===0) return !!this.unshiftList(value)

  var newNode=new node(value)
  var prev=this.get(index-1)
var temp=prev.next
  prev.next=newNode
  newNode.next=temp
  this.length++

  return true
}

remove(index)
{
  if(index<0||index>=this.length )  return undefined

  if(index===0) return !!this.shiftList()
  if(index===this.length-1) return !!this.pop()

  var prev=this.get(index-1)
  var deleted=prev.next
  var temp=deleted.next
  prev.next=temp

  this.length--

  return true
}
reverse()
{
var node=this.head
this.head=this.tail
this.tail=node
var  current
var prev=null

  while(current !== null)
  {
    current=node.next
    node.next=prev
    prev=node
    node=current

  }
 
  return true
}


}


