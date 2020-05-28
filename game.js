		
var game = new Phaser.Game(1920, 970, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {

	game.load.spritesheet('tree', '3d/tree_3.png', 1920, 970);
	game.load.spritesheet('grass', '3d/grass_5.png', 6000, 970);
	game.load.spritesheet('butt', '3d/butter2.png', 1920, 970);
	game.load.spritesheet('star', '3d/stars.png', 1920, 970);
	game.load.spritesheet('player', 'assets/colib.png', 365, 348);
	game.load.image('bg3', '3d/sky.jpg');
	game.load.image('bg2', '3d/int.png');
	game.load.image('bg', '3d/fondo.jpg');
	game.load.image('trees', '3d/trees.png');
	game.load.image('bush', '3d/bush.png');
	game.load.image('logo', '3d/piezas/maglib.png');
	game.load.image('logo2', '3d/piezas/ship.png');
	game.load.image('logo3', '3d/piezas/faun.png');
	game.load.image('logo4', '3d/piezas/spirit.png');
	game.load.image('logo5', '3d/piezas/sondas.png');
	game.load.image('logo6', '3d/piezas/jazz.png');
	game.load.image('logo7', 'ske.png');
	game.load.image('logo8', 'art.png');
	game.load.image('logo9', 'code.png');
	game.load.image('fog1', '3d/fog1.png');
	game.load.image('fog2', '3d/fog2.png');
	game.load.image('stars', '3d/stars2.png');
	game.load.image('filter', '3d/filter.png');


}

var player;
var bg2;
var bg3;
var bush;
var tree;
var trees;
var grass;
var fog1;
var fog2;
var star;
var stars;
var filter;
var logolink;
var logolink2;
var logolink3;
var logolink4;
var logolink5;
var logolink6;
var logolink7;
var cursors;
var jumpButton;
var mouseWheel;
var facing;
var button;
var butt;

function create() {

		bg3 = game.add.tileSprite(22000,0, 30000, 1000, 'bg3');
		bg2 = game.add.sprite(19980,0,'bg2');
		
		game.add.tileSprite(0, 0, 20000, 1000, 'bg');
		game.world.setBounds(0, 0, 32000, 800);
		
		tree = game.add.tileSprite(0,0, 20500, 1000, 'tree');
		tree.animations.add('tr', [0, 1, 0], 3, true);
		
		text1 = game.add.text(2300, 270, '', { font: "230pt Verdana", fill: '#bbbbbb' });
		text1.text = "Cambri";
		text1.stroke = '#ffffff';
		text1.strokeThickness = 5;
		text1.alpha = 0.7;		
		text = game.add.text(3300, 550, '', { font: "55pt Verdana", fill: '#eeeeee' });
		text.text = "Portafolio";
		text.stroke = '#ffffff';
		text.strokeThickness = 2;
		text.alpha = 0.98;
		
		text2 = game.add.text(5650, 350, '', { font: "130pt Verdana", fill: '#dddddd' });
		text2.text = "Soy Camila Gálvez";
		text2.stroke = '#ffffff';
		text2.strokeThickness = 5;
		text2.alpha = 0.7;
		text3 = game.add.text(7030, 550, '', { font: "40pt Verdana", fill: '#eeeeee' });
		text3.text = "Ingeniera Multimedia";
		text3.stroke = '#ffffff';
		text3.strokeThickness = 2;
		text3.alpha = 0.95		
		text4 = game.add.text(9000, 500, '', { font: "40pt Verdana", fill: '#eeeeee' });
		text4.text = "Me dedico al arte 2d y 3d";
		text4.stroke = '#ffffff';
		text4.strokeThickness = 2;
		text4.alpha = 0.7;		
		text5 = game.add.text(9400, 600, '', { font: "50pt Verdana", fill: '#eeeeee' });
		text5.text = "Este es mi trabajo...";
		text5.stroke = '#ffffff';
		text5.strokeThickness = 2;
		text5.alpha = 0.9;		
		
		text6 = game.add.text(31350, 250, '', { font: "100pt Verdana", fill: '#eeeeee' });
		text6.text = "Contacto";
		text6.stroke = '#ffffff';
		text6.strokeThickness = 2;
		text6.alpha = 0.8;		
		text7 = game.add.text(30500, 550, '', { font: "50pt Verdana", fill: '#eeeeee' });
		text7.text = "Cel: 3125497740";
		text7.stroke = '#dddddd';
		text7.strokeThickness = 2;
		text7.alpha = 0.9;		
		text7 = game.add.text(30500, 700, '', { font: "50pt Verdana", fill: '#eeeeee' });
		text7.text = "Correo: cambri.est@gmail.com";
		text7.stroke = '#dddddd';
		text7.strokeThickness = 2;
		text7.alpha = 0.9;

		
		
		logolink = game.add.sprite(12000, 400, 'logo');
		logolink.scale.x = 0.65;
		logolink.scale.y = 0.65;
		
		logolink2 = game.add.sprite(13750, 200, 'logo2');
		logolink2.scale.x = 0.9;
		logolink2.scale.y = 0.9;		
		
		logolink3 = game.add.sprite(16600, 400, 'logo3');
		logolink3.scale.x = 0.65;
		logolink3.scale.y = 0.65;
		
		logolink4 = game.add.sprite(19930, 200, 'logo4');
		logolink4.scale.x = 0.9;
		logolink4.scale.y = 0.9;		
		
		logolink5 = game.add.sprite(22000, 400, 'logo5');
		logolink5.scale.x = 0.9;
		logolink5.scale.y = 0.9;
		
		logolink6 = game.add.sprite(26000, 200, 'logo6');
		logolink6.scale.x = 0.9;
		logolink6.scale.y = 0.9;	
			
		logolink7 = game.add.sprite(27700, 250, 'logo7');
		logolink7.scale.x = 0.3;
		logolink7.scale.y = 0.3;		
		
		logolink8 = game.add.sprite(28600, 250, 'logo8');
		logolink8.scale.x = 1.2;
		logolink8.scale.y = 1.2;
		
		logolink9 = game.add.sprite(29400, 250, 'logo9');
		logolink9.scale.x = 0.5;
		logolink9.scale.y = 0.5;	
	
	
		player = game.add.sprite(200, 100, 'player');
		player.scale.x = 0.5;
		player.scale.y = 0.5;
		player.smoothed = true;
		player.animations.add('right', [0, 1, 2, 3, 4, 5], 7, true);
		player.animations.add('left', [8, 9, 10, 11, 12, 13], 7, true);
			
		
		bush = game.add.tileSprite(0,0, 20410, 1000, 'bush');
		
		filter = game.add.sprite(0, 0, 'filter');
		filter.fixedToCamera = true;
		
		trees = game.add.tileSprite(0,0, 21050, 1000, 'trees');
		
		grass = game.add.tileSprite(0,0, 21000, 1000, 'grass');
		grass.animations.add('gr', [0, 1, 2, 1, 0], 5, true);
		
		
		fog1 = game.add.tileSprite(0,0, 32000, 1000, 'fog1');
		fog2 = game.add.tileSprite(0,0, 32000, 1000, 'fog2');
		
		stars = game.add.tileSprite(20900,0, 30000, 1000, 'stars');
		
		star = game.add.tileSprite(20900,0, 30000, 1000, 'star');
		star.animations.add('st', [0, 1, 2, 1, 0], 5, true);
		
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		
		logolink.inputEnabled = true;
		logolink.events.onInputDown.add(onClick, this)
		logolink2.inputEnabled = true;
		logolink2.events.onInputDown.add(onClick2, this);		
		logolink3.inputEnabled = true;
		logolink3.events.onInputDown.add(onClick3, this)
		logolink4.inputEnabled = true;
		logolink4.events.onInputDown.add(onClick4, this);
		logolink5.inputEnabled = true;
		logolink5.events.onInputDown.add(onClick5, this)
		logolink6.inputEnabled = true;
		logolink6.events.onInputDown.add(onClick6, this);		
		logolink7.inputEnabled = true;
		logolink7.events.onInputDown.add(onClick7, this)
		logolink8.inputEnabled = true;
		logolink8.events.onInputDown.add(onClick8, this);
		logolink9.inputEnabled = true;
		logolink9.events.onInputDown.add(onClick9, this)
		
		butt = game.add.sprite(0, 0, 'butt');
		butt.animations.add('bt', [0, 1, 2, 3, 4, 5, 6, 7, 8], 9, true);
		butt.fixedToCamera = true;	
	/////////////////////////////////////////////////
	
	
	
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


	
}


function update () {
	
	star.animations.play('st', 5, true);
	grass.animations.play('gr', 6, true);
	tree.animations.play('tr', 7, true);
	
    if (logolink.input.pointerOver())
    {
        logolink.alpha = 1;
    }
    else
    {
        logolink.alpha = 0.65;
    }
	   
	if (logolink2.input.pointerOver())
    {
        logolink2.alpha = 1;
    }
    else
    {
        logolink2.alpha = 0.65;
    }    
	if (logolink3.input.pointerOver())
    {
        logolink3.alpha = 1;
    }
    else
    {
        logolink3.alpha = 0.65;
    }
	   
	if (logolink4.input.pointerOver())
    {
        logolink4.alpha = 1;
    }
    else
    {
        logolink4.alpha = 0.65;
    }    
	if (logolink5.input.pointerOver())
    {
        logolink5.alpha = 0.7;
    }
    else
    {
        logolink5.alpha = 0.5;
    }
	   
	if (logolink6.input.pointerOver())
    {
        logolink6.alpha = 0.7;
		butt.animations.play('bt', 10, true);
    }
    else
    {
        logolink6.alpha = 0.5;
		butt.animations.stop('bt', 10, true);
    }    
	if (logolink7.input.pointerOver())
    {
        logolink7.alpha = 1;
    }
    else
    {
        logolink7.alpha = 0.7;
    }
	   
	if (logolink8.input.pointerOver())
    {
        logolink8.alpha = 1;
    }
    else
    {
        logolink8.alpha = 0.7;
    }
	if (logolink9.input.pointerOver())
    {
        logolink9.alpha = 1;
    }
    else
    {
        logolink9.alpha = 0.7;
    }
	
filter.posision += player.body.velocity;

		if(this.input.activePointer.x <= 1000)
		{
		player.animations.play('left', 11, true);
		Invparallax();
		}
		else
		{
		player.animations.play('right', 11, true);
		parallax();
		}

if (game.physics.arcade.distanceToPointer(player, game.input.activePointer) > 8)
    {
        game.physics.arcade.moveToPointer(player, 480);
    }
    else
    {
        player.body.velocity.set(0,0);
    }
	


}

function parallax(){
	tree.tilePosition.x -= 0.2;
	bush.tilePosition.x -= 0.15;
	trees.tilePosition.x += 0.1;
	fog1.tilePosition.x -= 0.5;
	fog2.tilePosition.x += 0.5;	
	text1.position.x += 0.2;
	text.position.x -= 0.5;
	text2.position.x += 0.2;
	text3.position.x -= 0.2;
	text4.position.x += 0.1;
	text5.position.x -= 0.4;
	text6.position.x -= 0.2;
	stars.tilePosition.x -= 0.2;	
}

function Invparallax(){
	tree.tilePosition.x += 0.2;
	trees.tilePosition.x -= 0.1;
	text.position.x += 0.5;
	stars.tilePosition.x += 0.2;	
}

function onClick()
{  
	window.open("https://skfb.ly/6ROU8", "_blank");
	
}
function onClick2()
{    
	window.open("https://skfb.ly/6RtRz", "_blank");
}
function onClick3()
{    
	window.open("https://skfb.ly/6SCoV", "_blank");
}
function onClick4()
{    
	window.open("https://skfb.ly/6SAGI", "_blank");
}
function onClick5()
{    
	window.open("https://www.artstation.com/artwork/A9V9wN", "_blank");
}
function onClick6()
{    
	window.open("https://www.artstation.com/artwork/L2n5Ar", "_blank");
}
function onClick7()
{    
	window.open("https://sketchfab.com/camalvez.99", "_blank");
}
function onClick8()
{    
	window.open("https://www.artstation.com/camalvez_9", "_blank");
}
function onClick9()
{    
	window.open("vdg.html", "_blank");
}

