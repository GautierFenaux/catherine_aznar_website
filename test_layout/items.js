const posts = []



const images = [
    "/public/images/oeuvre_15.jpg",
    "/public/images/oeuvre_17.jpg",
    "/public/images/oeuvre_16.jpg",
    "/public/images/oeuvre_19.jpg", 
    "/public/images/oeuvre_18.jpg",
    "/public/images/oeuvre_1.jpg",
    "/public/images/oeuvre_2.jpg",
    "/public/images/oeuvre_5.jpg",

]

let imageIndex = 0 


for (let i = 0; i <= 80; i++) {
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++
    if(imageIndex > images.length - 1) {
        imageIndex = 0 ;
    }
}







