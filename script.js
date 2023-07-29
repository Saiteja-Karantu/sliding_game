var rows= 3;
var cols=3;


var turns=0;
var current_tile;
var other_tile;

var imgOrder=["4","2","8","5","1","6","7","9","3"];

window.onload=function()
{

for(let i=0;i<rows;i++)
   {
    for(let j=0;j<cols;j++)
     {
    
        var tile=document.createElement("img");
        tile.id=i.toString()+"-"+j.toString();
        tile.src=imgOrder.shift()+".jpg";
        document.getElementById("board").append(tile);
        
     
   
     
    
      
       tile.addEventListener("dragstart",dragStart);
       tile.addEventListener("dragover",dragOver);
       tile.addEventListener("dragenter",dragEnter);
       tile.addEventListener("dragleave",dragLeave);
       tile.addEventListener("drop",dragDrop);
       tile.addEventListener("dragend",dragEnd);
       document.getElementById("board").append(tile);
       
     }
    }
   }
   
       function dragStart()
       {
        current_tile=this;
        
        
       }
       function dragOver(e)
       {
        e.preventDefault();
       }
       function dragEnter(e)
       {
        e.preventDefault();
       }
       function dragLeave(e)
       {
        e.preventDefault();
       }
       function dragDrop()
       {
        other_tile=this;
        
    
       }
       function dragEnd()
       {

        if(!other_tile.src.includes("1.jpg"))
        {
         return;
        }
        
        let current_coords=current_tile.id.split('-');
        let r1=parseInt(current_coords[0]);
        let c1=parseInt(current_coords[1]);

        let other_coords=other_tile.id.split('-');
        let r2=parseInt(other_coords[0]);
        let c2=parseInt(other_coords[1]);
        

        let moveLeft = r1==r2 && c1==c2-1;
        let moveRight =r1==r2 && c1==c2+1;
        let moveUp = r1-1==r2 && c1==c2;
        let moveDown = r1+1==r2 && c1==c2;

        let isAdjacent =moveLeft||moveRight||moveUp||moveDown;
        if(isAdjacent)
        {
         let current_image=current_tile.src;
         let other_image=other_tile.src;
         current_tile.src=other_image;
         other_tile.src=current_image;
         turns+=1;
         document.getElementById("turns").innerText=turns;
      
         }
        }

   function restart()    
   {
    location.reload();
   } 
        
        

        
    




