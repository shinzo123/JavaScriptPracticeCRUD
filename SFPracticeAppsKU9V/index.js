// JavaScript source code

let message = "Hello World";
let arrayOfMessages = []
let userMessage = ""



function updateLabelPlus()
{
    
    
    var label = document.getElementById('changeme');
    var currentValue = parseInt(label.textContent);
    var updatedValue = currentValue + 1;
    label.textContent = updatedValue;
}

function updateLabelMinus()
{


    var label = document.getElementById('changeme');
    var currentValue = parseInt(label.textContent);
    var updatedValue = currentValue - 1;
    label.textContent = updatedValue;
}


function addToList()
{

    var input = document.getElementById('itemInput');
    var item = input.value;

    if (item !== '')
    {

        var list = document.getElementById('itemList');
        var listItem = document.createElement('li');
        var searchValue = input.value.toLowerCase();
        var items = list.getElementsByTagName('li');


        for (var i = 0; i < items.length; i++)
        {
            var itemText = items[i].textContent.toLowerCase();
            if (itemText === searchValue)
            {
                input.value = "";
                return;
            }

           
        }

        listItem.textContent = item;
        list.appendChild(listItem);
        input.value = '';

    }
}



    function deleteFromList()
    {

        var input = document.getElementById('itemInput');
        var item = input.value;

        if (item !== '')
        {


            var searchValue = input.value.toLowerCase();

            var list = document.getElementById('itemList');
            var items = list.getElementsByTagName('li');

            for (var i = 0; i < items.length; i++)
            {
                var itemText = items[i].textContent.toLowerCase();
                if (itemText === searchValue)
                {
                    list.removeChild(items[i]);
                    break;
                }
            }

            input.value = '';

        }

    }


    function updateList()
    {
        
        var input = document.getElementById('itemInput');
        var input2 = document.getElementById('itemReplace');
        var item = input.value;
        var item2 = input2.value;

        if (item !== '' && item2 !== '')
        {

           
            var searchValue = input.value.toLowerCase();
            var replacementValue = input2.value.toLowerCase();

            var list = document.getElementById('itemList');
            var items = list.getElementsByTagName('li');

            for (var i = 0; i < items.length; i++) {
                var itemText = items[i].textContent.toLowerCase();
                if (itemText === searchValue) {

                    items[i].textContent = item2
             
                    break;
                }
            }

            input.value = '';
            input2.value = '';

        }

    }


function deleteAll() {

    var result = confirm("Are you sure you want to proceed?");
    if (result) {
       
        var list = document.getElementById('itemList');

        list.innerHTML = "";
        

        alert("Action confirmed!");
    } else {
       

        alert("Action canceled!");

            input.value = '';

        }

    }

    console.log(message);
