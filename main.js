/*
create object with the information & images
  each city will be in its own array
create variables for each city button
create a varaible for the empty div (for information)
listen for clicks, then go to the append function
create an append function
  create a variable to retrieve items from     the object
  append the items to the div variable
call the function
 */

var drop = $("button");

drop.on("click", openDropDown);
function openDropDown(){
  var locations = $(".options");
  locations.toggleClass("display-content");
}

var griffith1 = $(".griffith");
var newlenox1 = $(".newlenox");
var frankfort1 = $(".frankfort");
var naperville1 = $(".naperville");
var emptyDiv = $(".empty");

griffith1.on("click", appendInfo);
function appendInfo(){
  emptyDiv.append(`<div class = centerinfo> <p class = "centerPara">The recycling drop off in that area is Metro Recycling. They accept aluminum cans, copper, aluminum siding, brass, scrap metal, wire, electric motors, stainless steel, radiators, PVC siding, paper, cardboard, and even more! It is located on 1501 E Main St, and is open from 7:00 AM to 4:30 PM on Mondays to Fridays. It is open from 7:00 AM to 1:00 PM on Saturdays and is closed on Sundays.</p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2987.1748530202453!2d-87.40721268515567!3d41.522152979252006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8811e6461a573c51%3A0xa21b38cc43c57f63!2sMetro+Recycling%2C+1501+E+Main+St%2C+Griffith%2C+IN+46319!3m2!1d41.522152999999996!2d-87.405024!5e0!3m2!1sen!2sus!4v1563469102891!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>`);
}
// <img class = "image" src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg" alt="description"/>
newlenox1.on("click", appendInfo2);
function appendInfo2(){
  emptyDiv.append(`<div class = centerinfo><p class = "centerPara">The recycling drop off in that area is All American Recycling. They accept copper, brass, aluminum, stainless, lead, batteries, carbide, and more. It is located on 2285 New Lenox Rd, and it is open 7:30 AM to 4:30 PM on Mondays to Fridays. It is open from 7:30 AM to 12:30 PM on Saturdays and it is closed on Sundays.</p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2987.619655664908!2d-88.03058708515607!3d41.512516379252894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880e660daf8cded7%3A0xf91ceabe6ac81a61!2s2285+New+Lenox+Rd%2C+Joliet%2C+IL+60433!3m2!1d41.512516399999996!2d-88.0283984!5e0!3m2!1sen!2sus!4v1563474745559!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>`);
}

frankfort1.on("click", appendInfo3);
function appendInfo3(){
  emptyDiv.append(`<div class = centerinfo><p class = "centerPara"> The recycling drop off in that area is EZ Recycling Corp. They accept aluminum, brass, copper, metals, radiators, and waste paper. It is located on 7307 Duvan Dr, and is open from 9:00 AM to 4:15 PM on Mondays to Fridays. It is closed on the weekends.</p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2984.9152551983248!2d-87.7983410851537!3d41.571078679247776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880e158d4b99698f%3A0x1766c9db2ad90f7a!2sEZ+Recycling+Corp%2C+7307+Duvan+Dr%2C+Tinley+Park%2C+IL+60477!3m2!1d41.5710787!2d-87.7961523!5e0!3m2!1sen!2sus!4v1563474352154!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>`);
}

naperville1.on("click", appendInfo4);
function appendInfo4(){
  emptyDiv.append(`<div class = centerinfo><p class = "centerPara">The recycling drop off in that area is City of Naperville Residential Electronics Recycling. They accept various electronics, glass bottles, aluminum cans, tin or steel cans, plastic containers, plastic 6-pack rings, milk cartons, scrap metal, and paper products. It is located on 156 Fort Hill Dr, and it is open 7:00 AM to 3:00 PM on Mondays to Thursdays. It is closed Friday to Sunday.</p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2975.578422094908!2d-88.19721578510044!3d41.772746379230654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880ef8444ae4039d%3A0x92c23c06740b2c84!2s156+Fort+Hill+Dr%2C+Naperville%2C+IL+60540!3m2!1d41.772746399999996!2d-88.19502709999999!5e0!3m2!1sen!2sus!4v1563478092909!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>
  <div class="centerinfo"><p class = "centerPara">The recycling drop off in that area is AVA E-Recycling and Data Shredding. They accept flat computer monitors, flat tvs, desktops, laptops, keyboards and mice, Pprinters / scanners / fax machines, copy Machines, stereos / radios, cell Phones, pagers, gaming consoles / handheld games, extension cords / christmas lights, Rsouters/Modems/Switching Boxes, Hard Drives / Other Memory Devices, Small Household Appliances, Microwaves, Cameras, Rechargeable Batteries, Circuit Boards or Electronic Equipment, Medical Device, Carbon Monoxide Detectors. t is located on 1555 Naperville Wheaton Rd #107, and it is open 9:00AM to 5:00 PM on Mondays to Fridays. It is open from 9:00 AM to 2:00 PM on Saturdays and it is closed on Sundays.</p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2974.379802092485!2d-88.1245274850994!3d41.79857797922859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880e56f10d88fbd3%3A0x74caed5ac359c2a2!2s1555+Naperville+Wheaton+Rd%2C+Naperville%2C+IL+60563!3m2!1d41.798578!2d-88.1223388!5e0!3m2!1sen!2sus!4v1563478272141!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>
  <div class="centerinfo"><p class="centerPara">The recycling drop off in that area is S & S Metal Recyclers II. They accept almost all ferrous and non-ferrous metals. It is located on 336 E Sullivan Rd, and it is open 7:30 AM to 4:30 PM on Mondays to Fridays. It is open from 7:30 AM to 12:30 PM on Saturdays and it is closed on Sundays.
  </p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2974.7881133352785!2d-88.30797068509975!3d41.789779879229314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880efb204a60ae4b%3A0xa1621f32a511c7b1!2sS+%26+S+Metal+Recyclers+II%2C+336+E+Sullivan+Rd%2C+Aurora%2C+IL+60505!3m2!1d41.7897799!2d-88.305782!5e0!3m2!1sen!2sus!4v1563478350245!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>`);
}
