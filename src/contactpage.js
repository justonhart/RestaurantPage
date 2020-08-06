const renderContactPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }
});

export {renderContactPage};