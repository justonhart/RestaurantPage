const renderHomepage = (() => {
    const content = document.getElementById("content");

    while(content.lastChild){
        content.lastChild.remove();
    }

    let homebox = document.createElement('div');
    homebox.id = "homebox";
    content.appendChild(homebox);


    let header = document.createElement('h1');
    header.innerText = "Wonderful Restaurant";
    homebox.appendChild(header);

    let review = document.createElement('p');
    review.innerText = `"Wonderful Restaurant is the best restaurant I've been to in the state! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sit earum ducimus odio necessitatibus architecto. Est exercitationem, enim consectetur totam sapiente adipisci voluptatibus, sed eligendi reprehenderit labore illum! Dignissimos, deserunt?" ~ Plato`;
    homebox.appendChild(review);

    let image = document.createElement('img');
    image.setAttribute('src', 'table.jpg');
    homebox.appendChild(image);
});

export {renderHomepage};