let tokenise = function() {
    return['one', 'two', new Date().toUTCString()];
}

function component() {

    const element = document.createElement('ul');

    let tokens = ['zero'].concat(...tokenise());
  
    tokens.forEach(token => {
        const li = document.createElement('li');
        li.innerHTML = token;
        element.appendChild(li);
    });
  
    return element;
  }
   
  document.body.appendChild(component());