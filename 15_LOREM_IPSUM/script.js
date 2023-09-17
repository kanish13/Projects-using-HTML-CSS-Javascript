const content=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis. Nibh mauris cursus mattis molestie a. At varius vel pharetra vel turpis nunc eget lorem. Eget nunc lobortis mattis aliquam faucibus. Nunc sed blandit libero volutpat sed cras ornare arcu. In nibh mauris cursus mattis. Diam in arcu cursus euismod quis viverra.",
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam",
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis"
,"Mauris imperdiet mi nisl, non convallis massa malesuada a. Proin sed eros nec leo laoreet porta. Maecenas eu semper sem, pharetra vulputate justo. Duis euismod, ligula sit amet posuere aliquam, libero ante imperdiet tortor, non fermentum est nisl luctus mauris. Aliquam interdum nisl eget elit cursus, sed vehicula mauris sodales. Vivamus varius lacus sit amet elit pretium, vitae aliquet quam blandit. Pellentesque ut mattis tortor. Suspendisse eget lorem varius, rhoncus enim a, sagittis arcu"
,"Sed suscipit nec sapien ut convallis. Praesent quis sapien aliquam, molestie eros quis, mattis elit. Aliquam id erat quis enim mattis finibus. Curabitur feugiat, neque vel placerat fermentum, orci justo laoreet lacus, eu rhoncus odio orci vitae nulla. Donec gravida consequat velit. Sed auctor est nulla, sit amet gravida est pretium sit amet. Nam varius velit neque, vel accumsan nisl accumsan eu. Aliquam ac metus at arcu finibus ultrices ac vitae felis. Maecenas nec purus porttitor"]

const no=document.getElementById("amount");

const submit=document.querySelector(".submit");

const reset=document.querySelector(".reset");

const print=document.querySelector(".generate");

submit.addEventListener("click",()=>{
    const val=parseInt(no.value);
    if (val>0){
        
    for(let i=1;i<val+1;i++){
      const ran=Math.floor(Math.random()*content.length)
      console.log(ran) 
      var para=document.createElement("p")
      para.textContent=content[ran]
      print.appendChild(para)
      var br=document.createElement("br");
      print.appendChild(br)
    }
    }
    
})
reset.addEventListener("click",()=>{
print.innerHTML="";
})