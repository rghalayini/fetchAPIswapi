 $(document).ready(function() {

    $('#searchButton').click(function(){
        let searchValue = $('#searchQuery').val();
        const search_url = `https://swapi.dev/api/people/?search=${searchValue}`;
        fetch(search_url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log("data");
            console.log(data);
            for(var i = 0; i < data.results.length; i++) {
                $('.search-list').append($('<li>')
                                    .text(data.results[i].name)
                                .append($('<a>')
                                    .addClass('click-character')
                                    .text('Select')
                                    .val(data.results[i].url)
                                    .on('click', SelectCharacter)
                                    ));
                console.log(data.results[i].name);
            }
        })
        .catch(function(error) {
            console.log("error");
            console.log(error);
        });
    });

    function SelectCharacter(){
         const url = $(this).val();
         fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                $("#name").text(data.name);
                $("#birth-year").text(data.birth_year);
                var homeworld_site = data.homeworld;

                SelectHomeworld(homeworld_site);
            })
        .catch(function(error) {
            console.log("error");
            console.log(error);
        });           
    };

    function SelectHomeworld(url){
        fetch(url)
            .then((resp) => resp.json())
            .then(function(homeworld) {
                $("#homeworld").text(homeworld.name);
        })
        .catch(function(error) {
            console.log("error");
            console.log(error);
        });           
    }
    //function SelectCharacter(){
        // const api_url ='https://swapi.dev/api/people/1'   
        //   // Defining async function 
        // async function getapi(url) { 
                    
        // // Storing response 
        // const response = await fetch(url); 
                    
        //     // Storing data in form of JSON 
        //     var data = await response.json(); 
        //     console.log(data); 
        //     if (response) { 
        //         hideloader(); 
        //         } 
        //         //let us take the name of the homeworld planet
        //         let homeworld_site = data.homeworld;
    
        //         const response_homeworld = await fetch(homeworld_site);                    
        //         var homeworld = await response_homeworld.json(); 
    
        //         //show(data); 
        //         $("#name").text(data.name);
        //         $("#birth-year").text(data.birth_year);
        //         $("#homeworld").text(homeworld.name);
        //         } 
        
        
        //         // Function to hide the loader 
        //     function hideloader() { 
        //         document.getElementById('loading').style.display = 'none'; 
        //     } 
        
        //     // Calling that async function 
        //     getapi(api_url); 
    //}

    // async function getapi(url) {             
    //     // Storing response 
    //     const response = await fetch(url);                    
    //         // Storing data in form of JSON 
    //         var data = await response.json(); 
    //         //console.log(data); 
    //         if (response) { 
    //             hideloader(); 
    //         }
    //     return data; 
        
    // } 
    
    // Function to hide the loader 
    function hideloader() { 
        document.getElementById('loading').style.display = 'none'; 
    } 
});