javascript:(function(){let text;let input = prompt("Please enter the playbackspeed:", "2.5");if(input==null || input == "") {text = 2 ;}else {text = input;}document.getElementsByTagName("video")[0].playbackRate = text;})();

javascript:(function(){let text;let input = prompt("Please enter the phone number:");window.open(`tel:${input}`);})();