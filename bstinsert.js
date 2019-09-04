class node
{
	constructor(val)
	{
		this.val=val
		this.left=null
		this.right=null
	}	
}

class bst
{
	constructor()
	{
		this.root=null	
	}


	insert(val)
	{

		var newNode = new node(val)
		if(this.root===null)
		{
			this.root=newNode
			return this
		}else{
				var current = this.root

				while(true)
				{
					if(val<current.val)
					{
						if(current.left === null)
						{
							current.left=newNode

							return this
						} else
						{
							current=current.next
						}
					} else if(val>current.val){
						if(current.right === null){
							current.right=newNode
							return this
						}else{
							current=current.right
						}

					}
				}

		}
	}
}
var t=new bst()
t.insert(10)
t.insert(132)
t.insert(19)
t.insert(130)
t.insert(7)
t.insert(1)