var myrequest=new XMLHttpRequest();
        myrequest.open('GET','https://dummyjson.com/todos');
        myrequest.send();
        var data;
        var r ,i;
        myrequest.onreadystatechange=function() 
        {
            if(myrequest.readyState == 4){
                if(myrequest.status == 200){
                    data = JSON.parse(myrequest.responseText).todos;
                    r = document.getElementById("name")
                    for(i=0; i< data.length ;i++){
                    r.innerText = r.innerText + (data[i].id +"\t\t"+ data[i].completed + "\n");
                } 
                }

            }
        }