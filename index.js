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
        fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
            .then(response => response.json())
            .then(responseJson => displayDogs(responseJson))
            .catch(error => alert('Sorry! We couldn\'t find that breed! Make sure you enter the subbreed if it applies. EX: \'boston bulldog\''));
    
}

function checkBreedType(userInput){
    if(userInput.includes("bulldog" || "bullterrier" || "cattledog" || "collie" || "corgi" || "dane" || "deerhound" || "elkhound" || "frise" || "greyhond" || "hound" || "mastiff" || "mountain" || "pinscher" || "pointer" || "poodle" || "retriever" || "ridgeback" || "schnauzer" || "setter" || "sheepdog" || "spaniel" || "springer" || "terrier" || "wolfhound")){
        let specialBreedPosition = userInput.search("bulldog" || "bullterrier" || "cattledog" || "collie" || "corgi" || "dane" || "deerhound" || "elkhound" || "frise" || "greyhond" || "hound" || "mastiff" || "mountain" || "pinscher" || "pointer" || "poodle" || "retriever" || "ridgeback" || "schnauzer" || "setter" || "sheepdog" || "spaniel" || "springer" || "terrier" || "wolfhound");
        let specialBreed = userInput.slice(specialBreedPosition, userInput.length);
        let newUserInput = userInput.replace(specialBreed, " ");
        newUserInput = newUserInput.trim();
        let adjustedUserInput = specialBreed+"-"+newUserInput;
        getDogImages(adjustedUserInput);
    }else(getDogImages(userInput));
}

function watchForm(){
    $('form').submit(function(event){
        event.preventDefault();
        let userInput = $('#userInput').val();
        checkBreedType(userInput);
    })
}

$(function(){
    console.log('Random Image of a Dog Breed loaded! Waiting for input.');
    watchForm();
})