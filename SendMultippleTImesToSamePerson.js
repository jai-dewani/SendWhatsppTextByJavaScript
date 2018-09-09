// This piece of code is written by Anurag Sahu
// Code for sending a text to someone on whatsapp via Whatsapp web multiple time

// Steps to do it
// 1. Open Whatsapp web on your browser Chrome (https://web.whatsapp.com/)
// 2. Scan the QR Code
// 3. Select the person you want to send the text
// 4. press clt + shift + j
// 5. In developer Console paste the code
// 6. Change the text "Sample Texts" in the code by your message like "Hey Bro!!"
// 7. Send Enter
// Note Make sure your mobile has Internet Connection

var looper = 0
var ar = prompt("Enter your message");
var message = ar.split(' ');
for(looper=0;looper<message.length;looper++)
{
	window.InputEvent = window.Event || window.InputEvent;
	var d = new Date();
	var event = new InputEvent('input', {bubbles: true});
	var textbox= document.querySelector('#main > footer >  div._3pkkz > div._1Plpp > div > div._2S1VP.copyable-text.selectable-text');
	
	textbox.textContent = message[looper];
	textbox.dispatchEvent(event);
	document.querySelector("#main > footer > div._3pkkz > div > button > span").click();
}
