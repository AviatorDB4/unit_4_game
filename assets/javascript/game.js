function game()
{
//test
console.log("Hello World");

//randomNumber variable

var randomNumber = Math.round(Math.random() * 120) + 19;
console.log(randomNumber);

//crystal value array
var crystNumArray = [3, 5, 7, 10];
console.log(crystNumArray);

//for loop
    for (var i = 0; i < crystNumArray.length; i++)
    {
        var imgCrystal = $("<crystals>");
        imgCrystal.addClass("crystal-images");
        imgCrystal.attr("src", "assets/images/crystal.jpeg");
        imgCrystal.data("crystNumArray", crystNumArray[i]);
        //crystal attributes change
        $("#crystals").append(imgCrystal);
    }
$("#crystal-images").on("click", function()
{
    var crystalVal = ($(this).attr("data-crystalVal"));
    crystalVal = parseInt(crystalVal);
    counter += crystalVal;
    alert("New score: " + counter);
})
//win/lose conditions
if (counter === randomNumber)
    {
    alert("Winner!")
    }

else if (counter > randomNumber)
    {
        alert("You lose")
    }
}
console.log(game())

