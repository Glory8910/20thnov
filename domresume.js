var container = document.createElement('div');
container.setAttribute("class", 'content');
document.body.append(container)



var parent = document.createElement('div');
parent.classList = "parent";

var child2 = document.createElement('div');
child2.classList = 'child2'


var image = document.createElement("IMG");
image.classList = ('myimage');
image.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-512.png";

container.append(parent);
parent.append(child2, image);



var person = document.createElement('div');
person.innerHTML = "S.Glory";
person.setAttribute("class", "nae");
container.append(person)




var line = document.createElement("div");
line.setAttribute("class", "center");
line.innerHTML = "<p>S.Glory, chennai |908978675 |hello@gmail.com  </p> <hr>"
container.append(line);


var container2 = document.createElement("div");
container2.setAttribute("class", "web");
container.append(container2);


var lefthalf = document.createElement('div')
lefthalf.setAttribute("class", 'left');
container2.append(lefthalf);


var headingarea = document.createElement('div')

var profimage = document.createElement('div')
profimage.classList = "icon"
profimage.innerHTML = "<i class='fas fa-address-card fa-2x'>  </i>"
lefthalf.append(headingarea);


var profhead = document.createElement('div')
profhead.setAttribute("class", 'heading');
profhead.innerHTML = "<h2>Profile</h2>";

headingarea.append(profimage, profhead)



var profdetail = document.createElement('div')
profdetail.classList = "para";
profdetail.innerHTML = "<p>Innovative optimized solution seeker.Excited to work in development phase of my newcarrier as a career developer.Iam ambiteous,animated and an literation advocate.</p>"
lefthalf.append(profdetail);




var headingarea1 = document.createElement('div')

var skillicon = document.createElement('div')
skillicon.classList = "icon";
skillicon.innerHTML = "<i class='fa fa-user-plus fa-2x' 'aria-hidden='true' '> </i>"
lefthalf.append(headingarea1);


var skillhead = document.createElement('div')
skillhead.setAttribute("class", 'heading');
skillhead.innerHTML = "<h2>Skills</h2>";


headingarea1.append(skillicon, skillhead)

var subhead1 = document.createElement('div')
subhead1.setAttribute("class", 'sub');
subhead1.innerHTML = "<h3>Technical skills</h3>";
lefthalf.append(subhead1)

var techlist1 = document.createElement('ul');
techlist1.setAttribute("class", 'ul');
lefthalf.append(techlist1)

var one = document.createElement('li');
one.innerHTML = "javascript";

var sliders = document.createElement('div');
sliders.setAttribute = 'class', 'slider';
var sliderdraw = document.createElement("input")
sliderdraw.setAttribute('type', 'range');
sliderdraw.min = 0;
sliderdraw.max = 100;
sliderdraw.value = 75;
sliders.append(sliderdraw);

one.append(sliders)
techlist1.append(one);

var two = document.createElement('li');
two.innerHTML = "HTML";

var sliders = document.createElement('div');
sliders.setAttribute = 'class', 'slider';
var sliderdraw = document.createElement("input")
sliderdraw.setAttribute('type', 'range');
sliderdraw.min = 0;
sliderdraw.max = 100;
sliderdraw.value = 75;
sliders.append(sliderdraw);

two.append(sliders)


var three = document.createElement('li');
three.innerHTML = "CSS";

var sliders = document.createElement('div');
sliders.setAttribute = 'class', 'slider';
var sliderdraw = document.createElement("input")
sliderdraw.setAttribute('type', 'range');
sliderdraw.min = 0;
sliderdraw.max = 100;
sliderdraw.value = 75;
sliders.append(sliderdraw);

three.append(sliders)

techlist1.append(two, three)



var subhead2 = document.createElement('div')
subhead2.setAttribute("class", 'sub');
subhead2.innerHTML = "<h3>Additional skills</h3>";
lefthalf.append(subhead2)

var techlist2 = document.createElement('ul');
techlist2.setAttribute("class", 'ul');
lefthalf.append(techlist2)

var one = document.createElement('li');
one.innerHTML = "Editing";

var sliders = document.createElement('div');
sliders.setAttribute = 'class', 'slider';
var sliderdraw = document.createElement("input")
sliderdraw.setAttribute('type', 'range');
sliderdraw.min = 0;
sliderdraw.max = 100;
sliderdraw.value = 75;
sliders.append(sliderdraw);

one.append(sliders)
techlist2.append(one);

var two = document.createElement('li');
two.innerHTML = "Recruitment";

var sliders = document.createElement('div');
sliders.setAttribute = 'class', 'slider';
var sliderdraw = document.createElement("input")
sliderdraw.setAttribute('type', 'range');
sliderdraw.min = 0;
sliderdraw.max = 100;
sliderdraw.value = 75;
sliders.append(sliderdraw);

two.append(sliders)


var three = document.createElement('li');
three.innerHTML = "Training";

var sliders = document.createElement('div');
sliders.setAttribute = 'class', 'slider';
var sliderdraw = document.createElement("input")
sliderdraw.setAttribute('type', 'range');
sliderdraw.min = 0;
sliderdraw.max = 100;
sliderdraw.value = 75;
sliders.append(sliderdraw);

three.append(sliders)

techlist2.append(two, three)


var headingarea2 = document.createElement('div')

var expicon = document.createElement('div')
expicon.classList = "icon";
expicon.innerHTML = "<i class='fa fa-briefcase fa-2x' aria-hidden='true' > </i>"
lefthalf.append(headingarea2);


var exphead = document.createElement('div')
exphead.setAttribute("class", 'heading');
exphead.innerHTML = "<h2>Experience</h2>";


headingarea2.append(expicon, exphead);


var subhead3 = document.createElement('div')
subhead3.setAttribute("class", 'sub');
subhead3.innerHTML = " <h3>Event Manager 03-11-2013 to 05-04-2016</h3>";
lefthalf.append(subhead3)

var comp1 = document.createElement('div');
comp1.innerHTML = "<p>Carlo and sons</p>";
lefthalf.append(comp1)

var comp1exp1 = document.createElement('ul');
comp1exp1.setAttribute("class", 'ul');
lefthalf.append(comp1exp1)

var one = document.createElement('li');
one.innerHTML = "worked in buisness plan development";
var two = document.createElement('li');
two.innerHTML = "meeting co-ordination of stake holders and staff";
var three = document.createElement('li');
three.innerHTML = "supervison of event";
comp1exp1.append(one, two, three);


var righthalf = document.createElement('div')
righthalf.setAttribute("class", 'right');
container2.append(righthalf);


var headingarea11 = document.createElement('div')

var exp2image = document.createElement('div')
exp2image.classList = "icon"
exp2image.innerHTML = "<i class='fa fa-briefcase fa-2x' aria-hidden='true' > </i>"
righthalf.append(headingarea11);


var exp2head = document.createElement('div')
exp2head.setAttribute("class", 'heading');
exp2head.innerHTML = "<h2>Experience</h2>";

headingarea11.append(exp2image, exp2head);


var subhead4 = document.createElement('div')
subhead4.setAttribute("class", 'sub');
subhead4.innerHTML = " <h3>Developer 03-11-2016 to 05-04-2019</h3>";
righthalf.append(subhead4)

var comp2 = document.createElement('div');
comp2.innerHTML = "<p>Regena products</p>";
righthalf.append(comp2)

var comp2exp1 = document.createElement('ul');
comp2exp1.setAttribute("class", 'ul');
righthalf.append(comp2exp1)

var one = document.createElement('li');
one.innerHTML = "worked in design and development";
var two = document.createElement('li');
two.innerHTML = "meeting co-ordination of stake holders and staff";
var three = document.createElement('li');
three.innerHTML = "final product testing";
comp2exp1.append(one, two, three);



var headingarea12 = document.createElement('div')

var edimague = document.createElement('div')
edimague.classList = "icon"
edimague.innerHTML = "<i class='fa fa-university fa-2x' aria-hidden='true' > </i>"
righthalf.append(headingarea12);


var eduhead = document.createElement('div')
eduhead.setAttribute("class", 'heading');
eduhead.innerHTML = "<h2>Education</h2>";

headingarea12.append(edimague, eduhead);

var subhead5 = document.createElement('div')
subhead5.setAttribute("class", 'sub');
subhead5.innerHTML = " <h3>zen full stack developer 03-11-2010 to 05-04-2020</div></h3>";
righthalf.append(subhead5)

var subhead6 = document.createElement('div')
subhead6.innerHTML = " <h3>Guvi</h3>";
righthalf.append(subhead6)

var detail = document.createElement('div')
detail.classList = "para";
detail.innerHTML = "<p>project based on full stack development in mongo DB,express,javascript,html and css(MERN) technical stack.</p>"
righthalf.append(detail);


var edu1 = document.createElement('ul');
edu1.setAttribute("class", 'ul');
righthalf.append(edu1)

var one = document.createElement('li');
one.innerHTML = "worked in design and development of a web application UGC for user to pracicemeditation and their progress is stored in Mono DB and backend created by Node.js";
var two = document.createElement('li');
two.innerHTML = "Developed a langauge learning app 'taal' by using Phoenits repeation is done by linked lists and front end was done by react.js";
var three = document.createElement('li');
three.innerHTML = "Developed a interactive app 'foreign' which includes chat,drag and drop option where front end was React.js and backend was with Node.js and mongo DB";
edu1.append(one, two, three);

var subhead7 = document.createElement('div')
subhead7.innerHTML = " <h3>BE</h3>";
righthalf.append(subhead7)


var subhead8 = document.createElement('div')
subhead8.innerHTML = " <h3>03-11-2008 to 05-04-2011</h3>";
righthalf.append(subhead8)

var subhead9 = document.createElement('div')
subhead9.innerHTML = " xxx university ";
righthalf.append(subhead9)



