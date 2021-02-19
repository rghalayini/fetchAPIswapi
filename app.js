 $(document).ready(function() {

    $('#searchButton').click(function(){
        let searchValue = $('#searchQuery').val();
        const search_url = `https://swapi.dev/api/people/?search=${searchValue}`
        //console.log(search_url);
        let data = getapi(search_url);
        //let count = data.value.count;
        console.log(data);
        // for(var i = 0; i < data.length; i++) {
        //     var obj = data[i];
        
        //     console.log(i);
        // }
        //for (let i=0; i< data.count; i++){
            
        //    console.log(i);
        // }

        //$('.search-list').append($('<li>').text().on("click", SelectCharacter()));


    });

    // function SelectCharacter(){
    //     //const api_url ='https://swapi.dev/api/people/1'   
    //       // Defining async function 
    //     async function getapi(url) { 
                    
    //     // Storing response 
    //     const response = await fetch(url); 
                    
    //         // Storing data in form of JSON 
    //         var data = await response.json(); 
    //         console.log(data); 
    //         if (response) { 
    //             hideloader(); 
    //             } 
    //             //let us take the name of the homeworld planet
    //             let homeworld_site = data.homeworld;
    
    //             const response_homeworld = await fetch(homeworld_site);                    
    //             var homeworld = await response_homeworld.json(); 
    
    //             //show(data); 
    //             $("#name").text(data.results);
    //             $("#birth-year").text(data.birth_year);
    //             $("#homeworld").text(homeworld.name);
    //             } 
        
        
    //             // Function to hide the loader 
    //         function hideloader() { 
    //             document.getElementById('loading').style.display = 'none'; 
    //         } 
        
    //         // Calling that async function 
    //         getapi(api_url); 
    // }

    async function getapi(url) {             
        // Storing response 
        const response = await fetch(url);                    
            // Storing data in form of JSON 
            var data = await response.json(); 
            //console.log(data); 
            if (response) { 
                hideloader(); 
            }
        return data; 
        
    } 
    
    // Function to hide the loader 
    function hideloader() { 
        document.getElementById('loading').style.display = 'none'; 
    } 
});