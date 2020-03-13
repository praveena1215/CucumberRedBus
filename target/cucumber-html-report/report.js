$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("modifybusbooking.feature");
formatter.feature({
  "line": 3,
  "name": "Modify Bus booking",
  "description": "",
  "id": "modify-bus-booking",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@modifybooking"
    },
    {
      "line": 2,
      "name": "@e2e"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To check user able to modify the booking",
  "description": "",
  "id": "modify-bus-booking;to-check-user-able-to-modify-the-booking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "launch the browser \"https://redbus.in\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the destination From \"\u003cStartingPlace\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the destination TO \"\u003cDestination\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select the onward date",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on search button to list the buses",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on modify button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "go to from text box and modify \"\u003cFromPlace\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "go to to text box and modify \"\u003cToPlace\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "modify-bus-booking;to-check-user-able-to-modify-the-booking;",
  "rows": [
    {
      "cells": [
        "StartingPlace",
        "Destination",
        "FromPlace",
        "ToPlace"
      ],
      "line": 18,
      "id": "modify-bus-booking;to-check-user-able-to-modify-the-booking;;1"
    },
    {
      "cells": [
        "Chen",
        "Erod",
        "Kanchi",
        "Pondy"
      ],
      "line": 19,
      "id": "modify-bus-booking;to-check-user-able-to-modify-the-booking;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "To check user able to modify the booking",
  "description": "",
  "id": "modify-bus-booking;to-check-user-able-to-modify-the-booking;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@e2e"
    },
    {
      "line": 1,
      "name": "@modifybooking"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "launch the browser \"https://redbus.in\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the destination From \"Chen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the destination TO \"Erod\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select the onward date",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on search button to list the buses",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on modify button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "go to from text box and modify \"Kanchi\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "go to to text box and modify \"Pondy\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://redbus.in",
      "offset": 20
    }
  ],
  "location": "BusBookingStepDef.launch_the_browser(String)"
});
formatter.result({
  "duration": 19690958100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chen",
      "offset": 28
    }
  ],
  "location": "BusBookingStepDef.enter_the_destination_From(String)"
});
formatter.result({
  "duration": 13410046700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Erod",
      "offset": 26
    }
  ],
  "location": "BusBookingStepDef.enter_the_destination_TO(String)"
});
formatter.result({
  "duration": 7256685700,
  "status": "passed"
});
formatter.match({
  "location": "BusBookingStepDef.select_the_onward_date()"
});
formatter.result({
  "duration": 291261500,
  "status": "passed"
});
formatter.match({
  "location": "BusBookingStepDef.click_on_search_button_to_list_the_buses()"
});
formatter.result({
  "duration": 8421290600,
  "status": "passed"
});
formatter.match({
  "location": "ModifyBooking.click_on_modify_button()"
});
formatter.result({
  "duration": 399144900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanchi",
      "offset": 32
    }
  ],
  "location": "ModifyBooking.go_to_from_text_box_and_modify(String)"
});
formatter.result({
  "duration": 7731235900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pondy",
      "offset": 30
    }
  ],
  "location": "ModifyBooking.go_to_to_text_box_and_modify(String)"
});
formatter.result({
  "duration": 7509545700,
  "status": "passed"
});
});