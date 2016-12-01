/*
This is an animation based on the pioneering work of John Whitney.
You'll be creating three versions.  This first one will serve as
the template for the others.
*/


//define the game functions: preload, create, and update
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    //nothing to see here
}

function create() {
    
}

//Both of these values are being tweened in the animate function above
function update() {
    
}



//this is borrowed from:
//https://rainbowcoding.com/how-to-create-rainbow-text-in-html-css-javascript/
function colorFromHue(hue) {
    var h = hue / 60;
    var c = 255;
    var x = (1 - Math.abs(h % 2 - 1)) * 255;
    var color;

    var i = Math.floor(h);
    if (i == 0) color = rgb_to_hex(c, x, 0);
    else if (i == 1) color = rgb_to_hex(x, c, 0);
    else if (i == 2) color = rgb_to_hex(0, c, x);
    else if (i == 3) color = rgb_to_hex(0, x, c);
    else if (i == 4) color = rgb_to_hex(x, 0, c);
    else color = rgb_to_hex(c, 0, x);
    return color;
}

function rgb_to_hex(red, green, blue) {
    var h = ((red << 16) | (green << 8) | (blue)).toString(16);
    // add the beginning zeros
    while (h.length < 6) h = '0' + h;
    return parseInt('0x' + h); //altered to output the number for phaser
}
