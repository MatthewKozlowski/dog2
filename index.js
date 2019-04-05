function displayDogs(responseJson){
    console.log(responseJson);
   if(responseJson.status === "success"){
        $('.results').html(`<img src="${responseJson.message}" class="dogImages">`);
        $('.results').removeClass('hidden');
   } else {
       $('.results').hmtl('<div>Sorry! We could\'t find that breed!</div>');
       $('.results').removeClass('hidden');
   }
}

function getDogImages(userInput){
        fetch(`https://dog.ceo/api/breed/hound-${userInput}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayDogs(responseJson))
        .catch(error => alert('Sorry! We couldn\'t find that breed!'));
    
}

function watchForm(){
    $('form').submit(function(event){
        event.preventDefault();
       let userInput = $('#userInput').val();
       console.log(userInput);
        getDogImages(userInput);
    })
}

$(function(){
    console.log('Random Image of a Dog Breed loaded! Waiting for input.');
    watchForm();
})