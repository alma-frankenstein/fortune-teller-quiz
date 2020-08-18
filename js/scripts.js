$(document).ready(function() {
  $("#events").submit(function(event) {
    event.preventDefault();
    let unluckyEventsArray = []
    let luckyEventsArray = []
    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      const unluckyEvents = $(this).val();
      unluckyEventsArray.push(unluckyEvents);
    })
    $("input:checkbox[name=lucky-events]:checked").each(function() {
      const luckyEvents = $(this).val();
      luckyEventsArray.push(luckyEvents);
    })

    function fortune(unluckyEventsArray, luckyEventsArray) {
      let fortune;
      if (unluckyEventsArray.length > luckyEventsArray.length) {
        fortune = "You are going to have a terrible week." 
      }
      else if (luckyEventsArray.length > unluckyEventsArray.length) {
        fortune = "You are going to have a fantastic week!!!!"
      }
      else {
        fortune = "Your week will be meh."
      }
      return fortune;
    }

    let newFortune = fortune(unluckyEventsArray, luckyEventsArray);
    $("#results").text(newFortune);
    $("#results").show();
  })
})