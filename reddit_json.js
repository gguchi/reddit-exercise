(function(){


    function JSONstring(form){

        let obj ={}

        let elements = document.querySelectorAll("input, select, textarea");

        for(let i = 0; i < elements.length; ++i){

            let element = elements[i];
            let name = elements.name;
            let value = element.value

            if(name){
                obj[name] =value;
            }

        }
        console.log(obj);
        return JSON.stringify(obj);
    }


    document.addEventListener("DOMContentLoaded", function(){

        var form = document.getElementsByClassName("test");
        var output = document.getElementsByClassName("output");

        form.addEventListener("submit", function(e){

            e.preventDefault();
            let json = JSONstring(this);
            console.log(json);

            output.innerHTML(json);

        },false);

    })

})