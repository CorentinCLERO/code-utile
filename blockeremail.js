/* This script provides for a straightforward email address in a web page.
In your web page add the following:-
*/
function blocker(name) {
    var domain = "yourdomainname.com";
    document.write('' + name + '@' + domain + '');
}

/* This script adds a subject field to the email.

function blockersubject(name,subject)
{
var domain ="yourdomainname.com";
document.write('' + name + '@' + domain + '');
}

/* This script is for using as an "Email Us" or like in a menu system or on a page.
Insert the following in your web page:-


function blocker2(name,text)
{
var domain ="yourdomainname.com";
document.write('' + text + '');
}

/* This script allows the adding of a subject, but also displayable text for a menu system. In your web page place the following:-
*/

function blockersubject2(name, subject, text) {
    var domain = "yourdomainname.com";
    document.write('' + text + '');
}