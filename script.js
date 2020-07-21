var mainContainer = $(".container")

var timeObj = [
    {
        time: "8 am",
        twentyFour: 8,
        contents: ''

    },
    {
        time: "9 am",
        twentyFour: 9,
        contents: ''

    },
    {
        time: "10 am",
        twentyFour: 10,
        contents: ''

    },
    {
        time: "11 am",
        twentyFour: 11,
        contents: ''

    },
    {
        time: "Noon",
        twentyFour: 12,
        contents: ''

    },
    {
        time: "1 pm",
        twentyFour: 13,
        contents: ''

    },
    {
        time: "2 pm",
        twentyFour: 14,
        contents: ''

    },
    {
        time: "3 pm",
        twentyFour: 15,
        contents: ''

    },
    {
        time: "4 pm",
        twentyFour: 16,
        contents: ''

    },
    {
        time: "5 pm",
        twentyFour: 17,
        contents: ''

    },
    {
        time: "6 pm",
        twentyFour: 18,
        contents: ''

    },
    {
        time: "7 pm",
        twentyFour: 19,
        contents: ''

    }
]

function renderTime() {
    maincontainer.empty();
    // The for loop,loops through the timeObj, from that it appends each div to the row.
    // Then appends the row to he mainContainer
    for (i = 0; i < timeObj.length; i++) {

        // This adds the row, that is already empty (line 79)
        var rowDiv = $('<div>').addClass('row time-Block');

        // This gives the time description
        var detailDiv = $('<div>').addClass('description');

        // This gives a text area for what will be planned for the day
        var textDiv = $('<div>').addClass("col-md-8");
        var textInput = $('<textarea>');
        // This allows for the text to be placed inside the time slot
        textDiv.append(textInput);
        // This creates the save button, by making a div and add classes for style
        var saveBtnDiv = $('<div>').addClass("col-md-2 saveBtn");
        // This appends all three divs to the row
        rowDiv.append(detailDiv).append(textDiv).append(saveBtnDiv);

        mainContainer.append(rowDiv);
    }

}
renderTime();