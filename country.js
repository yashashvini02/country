document.addEventListener("DOMContentLoaded",function(){
    let clk=document.querySelector(".clk");
    let data=document.querySelector(".texti");
    let ccards=document.querySelector(".cards");
    let box=document.querySelector(".box");
    async function cont(){
               let value=data.value.trim();
               if(!value){
                alert("Enter text first!"); 
            return ;  }
            console.log("Button clicked! Fetching data for:", value);
               try{
               let response=await fetch(`https://restcountries.com/v3.1/name/${value}`);
               if(!response.ok){
                alert("Unable to fetch Details!");
                return;}
            let data1=await response.json();
            
            let currencyKey = Object.keys(country.currencies)[0]; 
            let currencyName = country.currencies[currencyKey].name;
            
            ccards.innerHTML = `
                <p><strong>Name:</strong> ${country.name.common}</p>
                <p><strong>Currency:</strong> ${currencyName}</p>
            `;
            

            console.log("API Response:", JSON.stringify(data1, null, 2)); 
    }
    catch(error){
console.error("Error in the data");
    }
    
    ccards.style.display="block";
    box.style.height="auto";
    box.style.padding="10px";

}
 
    clk.addEventListener("click",cont);
});