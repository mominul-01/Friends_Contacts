let input = document.querySelector('#search');
let showResult = document.querySelector('#parent-list');

        
input.addEventListener('keypress', function() {
    var text = '';
    let searchArry = [];

    if (input.value != "") {

        for (const friend of friends_list) {
            if (friend.name.match(input.value) != null) {
                searchArry.push(friend.name);
            }
        }
        
        var li = '';
    
        for(let friends of searchArry){
            var liSingle = `<li><a value="${friends}" >${friends}</a></li>`;
                li = li.concat(liSingle);
            
        }
    }
    
    text = '<ul>' + li + '</ul>';
    if (searchArry.length != 0) {
            showResult.innerHTML = text;
           
    }else{
        
        showResult.innerHTML = `<span>Anything Wrong</span>`;
    }
});


let ulList = document.getElementById("parent-list");
ulList.addEventListener("click",function(e) {
    console.log(e.target.getAttribute('value'));
     alert(e.target.getAttribute('value'));
});
    




