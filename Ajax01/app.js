

//Fetch Data From Text File.
let textbutton = document.querySelector('#text-btn') ;
textbutton.addEventListener('click' , function(){

    //here we need to fetch the data .
    //Ajax ---create an Ajax Request.

    let xhr = new XMLHttpRequest() ;

    //prepare the Request.

    xhr.open('Get' , './data/messages.txt' , true) ; //true is gonna be mean that is Asynchrnous .


    //send the Request.
    xhr.send() ;

    //Process the Request.
    xhr.onload = ()=> {
        if(xhr.status===200){ //Data is Successful response .
            let data = xhr.responseText ; //data i want to display in html file
            displayData(data) ;

        }
    }

}) ;

//display text Data

let displayData=(data)=> {

    let htmlTemplate = `<h3>${data}</h3>` ;
    document.querySelector('#card-text').innerHTML = htmlTemplate ;
}


//Fetch Data from Json file

let jsonbutton = document.querySelector('#json-btn') ;
jsonbutton.addEventListener('click' , function(){

    //Create Ajax Requeest

    let xhr = new XMLHttpRequest() ;

    //prepare request that we have

    xhr.open('Get' , './data/use.json' , true) ;


    //send Request

    xhr.send() ;

    //Process the Request

    xhr.onload =()=> {
        if(xhr.status===200) {
            let data = xhr.responseText ; // I Want to return only the Data that we have , Data in (String Format)
            let mobile = JSON.parse(data) ;
            DisplayJsonData(mobile) ;
            

        }
    }


})

//Display json Data

let DisplayJsonData=(mobile)=> {
    let htmlTemplate= '' ;

    htmlTemplate = `<ul class="list-group  mt-1">
    <li class="list-group-item">squadName : ${mobile.squadName}</li>
    <li class="list-group-item">homeTown : ${mobile.homeTown}</li>
    <li class="list-group-item">formed : ${mobile.formed}</li>
    <li class="list-group-item">name : ${mobile.members[0].name}</li>
    </ul>`

    document.querySelector('#card-json').innerHTML=htmlTemplate ;

}

//Both Json and Text file , was internal Files , if i want as External file Like Api that we have .
//I enter the url and the Api , appears to Me


//Api 

let apibutton = document.querySelector('#Api-btn') ;
apibutton.addEventListener('click' , function(){

    //create Ajax 

    let xhr = new XMLHttpRequest() ;

    //Prepare request

    xhr.open('Get' , 'https://jsonplaceholder.typicode.com/users' , true)

    xhr.send() ;

    xhr.onload = ()=>{
        if(xhr.status==200){
            let data = xhr.responseText ;
           let paredData = JSON.parse(data) ;
           DisplayApiData(paredData) ;

        }
    }

})


let DisplayApiData=(paredData)=> {
    let htmlTemplate= '' ;

    for(user of paredData){
        htmlTemplate+=`<ul class="list-group">
        <li class="list-group-item">id ${user.id}</li>
        <li class="list-group-item">Name ${user.name}</li>
        <li class="list-group-item">username ${user.username}</li>
        <li class="list-group-item">email ${user.email}</li>
        <li class="list-group-item">address ${user.address.street}</li>
        </ul>`
    }

    

    document.querySelector('#card-api').innerHTML=htmlTemplate ;

}