
let url='https://restcountries.com/v3.1/all'
async function weather(){
    try{
        let v= await fetch (url)
        let c=await v.json();
        console.log(c);
        for(let i of c){       
            console.log(i.name.common,i.capital[0],i.region,i.latlng[0],i.latlng[1],i.flags.png,i.cca2,i.population)
            
           
            
            let kar= document.createElement('div')
           kar.setAttribute('class','container')
           
   
            kar.innerHTML=`
            
                <div  id="main"  class="card">
                   
                        <div class="card-header"><h1 id="title" class="text-center">${i.name.common}</h1></div>
                        <div class="card-body text-primary">
                            <img src="${i.flags.png}" class="card-img-top" alt="${i.flags.png}"><br><br>
                            <div class="card-text">Capital:${i.capital[0]}</div>
                            <div class="card-text">Region:${i.region}</div>
                            <div class="card-text">Population:${i.population}</div> 
                            <div class="card-text">Country Code:${i.cca2}</div>
                            <button>Click for Weather</button>
                        </div>
                   
                </div>
                
            `
                
                document.querySelector('body').append(kar)

        }
    }
    catch{
        console.log('error');
    }
}weather()  