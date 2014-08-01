/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/


/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/


$(document).ready( function() {
    make_copies();
    populate_data();
    render();
});


function make_copies() {
    Employees.staff_elements = [];
    Employees.$staff_container = $('div.address-book');
    var element = Employees.$staff_container.html();
    //Employees.$staff_container.html('');
    for (var i = 0; i < Employees.entries.length; i++) {
        var $element = $(element).removeClass('template');
        Employees.staff_elements.push($element);
    }
}


function populate_data() {
    for (var i = 0; i < Employees.entries.length; i++){ 
        Employees.staff_elements[i].find('h2.name').text(Employees.entries[i].first + " " + Employees.entries[i].last);
        Employees.staff_elements[i].find('p.title').text(Employees.entries[i].title);
        Employees.staff_elements[i].find('span.dept').text(Employees.entries[i].dept);
        //Employees.staff_elements[i].find('img.pic').text(Employees.entries[i].pic);
    }
}


function render () {
    for (var i = 0; i < Employees.entries.length; i++){
        Employees.$staff_container.append(Employees.staff_elements[i]);
    }
}




function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()

