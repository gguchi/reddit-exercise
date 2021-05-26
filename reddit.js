var reddit = new XMLHttpRequest();
var url = "https://www.reddit.com/r/aww.json";
reddit.onreadystatechange = function(){
    if(reddit.readyState == 4 && reddit.status == 200){
        var posts = JSON.parse(this.responseText);
        display(posts);
        console.log(JSON.parse(reddit.response).data.children);
    }
};
reddit.open("GET", url , true);
reddit.send();
 function display(arr){

    var post = JSON.parse(JSON.stringify(arr));
    let container = document.getElementById("feed");

    post.data.children.forEach(element => {

        let post = document.createElement('div');
        post.classList.add("posts");
        post.innerHTML = '<h4>'+ element.data.title +'</h4>' + '<img src='+element.data.thumbnail+'></img>'
        
        container.appendChild(post);
    
    });
}
