// console.log("Let's get this party started!");


async function getGif(input){
    const result = await axios.get("http://api.giphy.com/v1/gifs/search", {
              params: {
                q: (input), 
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
              }
            });
// create a new div for the images to to appended to
  const newDiv = document.createElement("div");
  if(result.data.data.length !== 0){
    const newImg = document.createElement("img");
    //creating random image when it should be based off use input
    let randomImg = Math.floor(Math.random() * result.data.data.length);
    newImg.src = result.data.data[randomImg].images.original.url;
    $('#rendered-gifs').append(newDiv).append(newImg);
  }else{
    alert("No results found");
  }
}



const btn = document.querySelector('#search-submit-button');

btn.addEventListener('click', function(e){
    e.preventDefault();
    const input = document.querySelector('#search-GIF');
    getGif(input.value);
    //reset input box
    input.value = "";
});

const removeBtn = document.querySelector('#remove-search-button');
removeBtn.addEventListener('click', function(){
  let newGif = document.querySelector('#rendered-gifs');
  newGif.innerHTML="";
});

