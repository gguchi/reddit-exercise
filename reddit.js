
    let reddit = new XMLHttpRequest();

    reddit.onreadystatechange = function(){

        if(reddit.readyState == 4 && reddit.status == 200){

            document.getElementById("post").innerHTML = reddit.responseText;
            console.log(reddit.response);

            console.log(JSON.parse(reddit.response).data.children);

        }

    };

    array.forEach(element => {
        
    });
    
    var posts = reddit.response;
    var obj = JSON.stringify(posts);
    
    console.log(obj);
    reddit.open("GET", "https://www.reddit.com/r/aww.json");
    reddit.send();

