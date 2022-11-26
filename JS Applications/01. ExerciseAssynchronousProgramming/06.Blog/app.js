function attachEvents() {
    console.log('TODO...');
    let posts= "http://localhost:3030/jsonstore/blog/posts"
    let comments= "http://localhost:3030/jsonstore/blog/comments"

    let btnPosts= document.getElementById("btnLoadPosts").addEventListener("click",Post)
    let btnView= document.getElementById("btnViewPost").addEventListener("click",View)

// First method
async function Post(){

  let postsData= document.getElementById("posts")
  postsData.innerHTML=""
  let response= await fetch(posts)
  let data = await response.json();

  Object.values(data).forEach(post=>{
    let option = document.createElement("option")
     option.value= post.id
     option.textContent= post.title

     postsData.appendChild(option)
  })
}
// Second Method
 async function View(){
     let postTitle =document.getElementById("post-title")
     let postBody= document.getElementById("post-body")
     let commentsSection= document.getElementById("post-comments")
     commentsSection.innerHTML=""
    let response= await fetch(comments)
    let dataComments = await response.json()

    let responseForPost= await fetch(posts)
    let data = await responseForPost.json();
     
    let postsData= document.getElementById("posts").selectedOptions[0].value
    let selectedData=Object.values( data).find(post=>post.id==postsData)
    
    postTitle.textContent= selectedData.title
    postBody.textContent= selectedData.body

    let comment= Object.values(dataComments).filter(comment=> comment.postId==postsData)
    comment.forEach(content=>{
        let li = document.createElement("li")
        li.textContent= content.text;
        commentsSection.appendChild(li)
    })
  }

}

attachEvents();