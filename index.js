const customer = [
    {
        name:"sehar",
        age:"19",
        language:"javascript",
        image: 'https://randomuser.me/api/portraits/med/women/75.jpg'
    },
    {
        name:"fatima",
        age:"21",
        language:"html",
        image: 'https://randomuser.me/api/portraits/med/women/70.jpg'
    },
    {
        name:"aiman",
        age:"23",
        language:"python",
        image: 'https://randomuser.me/api/portraits/med/women/65.jpg'
    },
    {
        name:"ayesha",
        age:"20",
        language:"html",
        image: 'https://randomuser.me/api/portraits/med/women/29.jpg'
    }
]

 function cvIterator(profiles){
    let index=0;
    return{
        next:()=>{
            if(index < profiles.length)
            return {
                value: profiles[index++],
                done: false
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}
let cust = cvIterator(customer);
nextCV();

let next = document.getElementById('next');
next.addEventListener('click',nextCV)


function nextCV(){
 
    let current = cust.next().value;
   
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(current != undefined){
    image.innerHTML= `<img src='${current.image}'>`;
    profile.innerHTML= `<ul class="list-group">
    <li class="list-group-item">Name: ${current.name}</li>
    <li class="list-group-item">Age: ${current.age}</li>
    <li class="list-group-item">Language: ${current.language}</li>
  </ul>`
    }
    else{
        alert('End of candidates');
        window.location.reload();
    }
}