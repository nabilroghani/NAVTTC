const input = document.querySelector("#input");
const btn = document.querySelector("button");
const list = document.querySelector('ul');
btn.addEventListener('click', function () {
    let data = input.value;
    if(input.value === "") {
        alert('Enter Something');
    }
    else {
    //------------create li --------------
    const li = document.createElement("li");
    li.textContent = data;
    list.append(li);
    li.classList.add("class", "li")

    //------------create remove ---------
    const removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    li.append(removeBtn);
    removeBtn.setAttribute("id", "remove-btn");

    //----------add functionality in remove btn-------
    removeBtn.addEventListener('click', function () {
        li.remove();
    })

    }

   


    input.value = " ";
})