   fetch("https://dog.ceo/api/breeds/image/random") 
    .then((response)=> response.json())
    .then ((data) => { console.log(data)
        let DogImgUrl=data.message;
        let DogImgEl = document.createElement("img")
        DogImgEl.setAttribute('src',`${DogImgUrl}`)
        DogImgEl.classList.add("showcase")
        let DogImgDiv = document.querySelector(".DogImgDiv")
        DogImgDiv.appendChild(DogImgEl);

})