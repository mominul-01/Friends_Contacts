let input = document.querySelector('#search');
let showResult = document.querySelector('#parent_list');
let details = document.querySelector('.modal-title');
let ulList = document.getElementById("parent_list");
let person_details = document.querySelector(".person_details");



if(input !== undefined && input !== null){
    input.addEventListener('keypress', function() {
        var text = '';
        let searchArry = [];
        

        if (input.value != "") {
            var li = '';

            for (const [i,friend] of friends_list.entries()) {
                if (friend.name.match(input.value) != null || friend.blood.match(input.value) != null || friend.phone.match(input.value) != null) {
                    searchArry.push(i);
                }
            }

            if(searchArry.length != 0){
                for(let friends of searchArry){
                    var liSingle = `<li><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" value="${friends}" >${friends_list[friends].name} - ${friends_list[friends].phone}</button></li>`;
                    li = li.concat(liSingle);
                }
            }
        }

        text = li ;
        
        if (searchArry.length != 0) {
            showResult.innerHTML = text;
        }else{
            showResult.innerHTML = `<li class="not_found">Not Found Any Data. Please Try Valid Data</li>`;
        }
    });
}

if(ulList !== undefined && ulList !== null){
    ulList.addEventListener("click",function(e) {
        var li2 = '';
    var text2 = '';
        var clickAbleID = "";
        clickAbleID = e.target.getAttribute('value');
        details.textContent = friends_list[clickAbleID].name;
        
        for(const item in friends_list[clickAbleID]) {
            if( item !== 'name' && friends_list[clickAbleID][item] !== null){
                var liSingle2 = `<li>${item} : ${friends_list[clickAbleID][item]}</li>`;
                li2 = li2.concat(liSingle2);
            }
        }

        text2 = '<ul>' + li2 + '</ul>';
        person_details.innerHTML = text2;

    });
}






















