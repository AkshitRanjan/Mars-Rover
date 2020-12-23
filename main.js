canvas = document.getElementById("myCanvas"); //calling the canvas element from index.html
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["NASA_1.jfif", "NASA_2.jpg", "NASA_3.jpg", "NASA_4.jpg"]; //the array of the images from NASA
random_number = Math.floor(Math.random()*4);
console.log(random_number); //to log the variable random_number in the console

rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number]; //to set background image
console.log("background_image = "+ background_image);

rover_image = "rover.png"; //to set rover image

rover_x = 10; //x position of rover
rover_y = 10; //y position of rover

function add() { 
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
} //defining add function used in body tag in index.html

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
} //defining uploadBackground function to use in add function

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
} //defining uploadrover function to use in add function

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    } //ASCII code of up key is 38 so when up pressed computer will understand it's ASCII code
    if (keyPressed == '40') {
        down();
        console.log("down");
    } //ASCII code of down key is 40 so when down pressed computer will understand it's ASCII code
    if (keyPressed == '37') {
        left();
        console.log("left");
    } //ASCII code of left key is 37 so when left pressed computer will understand it's ASCII code
    if (keyPressed == '39') {
        right();
        console.log("right");
    } //ASCII code of right key is 39 so when right pressed computer will understand it's ASCII code
} //using the ASCII codes of up, down, left and right to move the rover

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
} //defining up function to move the rover up
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y+10;
        console.log("When down arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
} //defining down function to move the rover down
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x-10;
        console.log("When left arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
} //defining left function to move the rover left
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x+10;
        console.log("When right arrow is pressed, x = " + rover_x + " and y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
} //defining right function to move the rover right
