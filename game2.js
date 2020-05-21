		
var game = new Phaser.Game(1920, 970, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {

	game.load.image('bg', '3d/fondo.jpg');
	game.load.spritesheet('trees', 'vid/trees_4.png', 1920, 970);
	game.load.spritesheet('bush', 'vid/bush_2.png', 1920, 970);
	game.load.image('logo', 'vid/piezas/land.png');
	game.load.image('logo2', 'vid/piezas/polar.png');
	game.load.image('logo3', 'vid/piezas/punch.png');
	game.load.image('logo4', 'brush.png');
	game.load.image('logo5', 'you.png');
	game.load.image('mou', 'vid/mount.png');
	game.load.spritesheet('grass', 'vid/grass_5.png', 6000, 970);
	game.load.spritesheet('butt', 'vid/butter.png', 1920, 970);
	game.load.image('fog1', 'vid/fog1.png');
	game.load.image('fog2', 'vid/fog2.png');
	game.load.spritesheet('star', '3d/stars.png', 1920, 970);
	game.load.image('filter', 'vid/filter.png');
	game.load.spritesheet('player', 'assets/colib.png', 365, 345);


}

var player;
var bush;
var mou;
var trees;
var grass;
var fog1;
var fog2;
var star;
var filter;
var logolink;
var logolink2;
var logolink3;
var logolink4;
var cursors;
var jumpButton;
var mouseWheel;
var facing;
var button;
var butt;
var text;


function create() {
		
		game.add.tileSprite(0, 0, 25000, 1000, 'bg');
		game.world.setBounds(0, 0, 20000, 800);
		
		mou = game.add.tileSprite(0,0, 30000, 1000, 'mou');


		text1 = game.add.text(3000, 100, '', { font: "250pt Verdana", fill: '#bbbbbb' });
		text1.text = "Cambri";
		text1.stroke = '#ffffff';
		text1.strokeThickness = 5;
		text1.alpha = 0.7;		
		text = game.add.text(4200, 400, '', { font: "55pt Verdana", fill: '#dddddd' });
		text.text = "Portafolio";
		text.stroke = '#ffffff';
		text.strokeThickness = 2;
		text.alpha = 0.95;
		
		
		bush = game.add.tileSprite(0,0, 30000, 1000, 'bush');
		bush.animations.add('bs', [0, 1, 2, 1, 0], 5, true);
		
		logolink = game.add.sprite(5500, 350, 'logo');
		logolink.scale.x = 0.9;
		logolink.scale.y = 0.9;
		
		logolink2 = game.add.sprite(11200, 250, 'logo2');
		logolink2.scale.x = 0.9;
		logolink2.scale.y = 0.9;		
		
		logolink3 = game.add.sprite(15000, 300, 'logo3');
		logolink3.scale.x = 0.9;
		logolink3.scale.y = 0.9;
		
		logolink4 = game.add.sprite(16800, 250, 'logo4');
		logolink4.scale.x = 1;
		logolink4.scale.y = 1;	
		
		logolink5 = game.add.sprite(17400, 300, 'logo5');
		logolink5.scale.x = 0.5;
		logolink5.scale.y = 0.5;
		
		game.input.addMoveCallback(p, this);
	
		player = game.add.sprite(200, 100, 'player');
		player.scale.x = 0.5;
		player.scale.y = 0.5;
		player.smoothed = true;
		player.animations.add('right', [0, 1, 2, 3, 4, 5], 7, true);
		player.animations.add('left', [8, 9, 10, 11, 12, 13], 7, true);
		
		text2 = game.add.text(19900, 250, '', { font: "100pt Verdana", fill: '#eeeeee' });
		text2.text = "Contacto";
		text2.stroke = '#ffffff';
		text2.strokeThickness = 2;
		text2.alpha = 0.8;		
		text3 = game.add.text(18800, 550, '', { font: "50pt Verdana", fill: '#eeeeee' });
		text3.text = "Cel: 3125497740";
		text3.stroke = '#dddddd';
		text3.strokeThickness = 2;
		text3.alpha = 0.9;		
		text3 = game.add.text(18800, 700, '', { font: "50pt Verdana", fill: '#eeeeee' });
		text3.text = "Correo: cambri.est@gmail.com";
		text3.stroke = '#dddddd';
		text3.strokeThickness = 2;
		text3.alpha = 0.9;
		
		filter = game.add.sprite(0, 0, 'filter');
		filter.fixedToCamera = true;
		
		trees = game.add.tileSprite(0,0, 20950, 1000, 'trees');
		trees.animations.add('trs', [0, 1, 0, 2], 4, true);
		
		grass = game.add.tileSprite(0,0, 21000, 1000, 'grass');
		grass.animations.add('gr', [0, 1, 2, 3, 2, 1], 6, true);
		
		
		//fog1 = game.add.tileSprite(0,0, 80000, 1000, 'fog1');
		//fog2 = game.add.tileSprite(0,0, 80000, 1000, 'fog2');
		
		star = game.add.tileSprite(20900,0, 30000, 1000, 'star');
		star.animations.add('st', [0, 1, 2, 3, 4, 5, 6], 7, true);
		
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
		
		butt = game.add.sprite(0, 0, 'butt');
		butt.animations.add('bt', [0, 1, 2, 3, 4, 5, 6, 7, 8], 9, true);
		butt.fixedToCamera = true;		
		
		
	/////////////////////////////////////////////////
	
	
	
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


	
}

function p(pointer) {

    // console.log(pointer.);
    console.log(pointer.event);

}


function update () {
	
	star.animations.play('st', 3, true);
	grass.animations.play('gr', 5, true);
	bush.animations.play('bs', 4, true);
	
    if (logolink.input.pointerOver())
    {
        logolink.alpha = 1;
		trees.animations.play('trs', 4, true);
		
    }
    else
    {
        logolink.alpha = 0.8;
		trees.animations.stop('trs', 4, true);
    }
	   
	if (logolink2.input.pointerOver())
    {
        logolink2.alpha = 1;
		butt.animations.play('bt', 12, true);
    }
    else
    {
        logolink2.alpha = 0.7;
		butt.animations.stop('bt', 12, true);
    }    
	
	if (logolink3.input.pointerOver())
    {
        logolink3.alpha = 1;
    }
    else
    {
        logolink3.alpha = 0.7;
    }
	   
	if (logolink4.input.pointerOver())
    {
        logolink4.alpha = 1;
    }
    else
    {
        logolink4.alpha = 0.7;
    }	
	if (logolink5.input.pointerOver())
    {
        logolink5.alpha = 1;
    }
    else
    {
        logolink5.alpha = 0.7;
    }
	

		if(this.input.activePointer.x <= 1000)
		{
		player.animations.play('left', 13, true);
		Invparallax();
		}
		else
		{
		player.animations.play('right', 13, true);
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
	mou.tilePosition.x -= 0.2;
	bush.tilePosition.x -= 0.15;
	trees.tilePosition.x += 0.1;
	text1.position.x += 0.2;
	text.position.x -= 0.3;
	text2.position.x -= 0.4;
	/*fog1.tilePosition.x -= 0.5;
	fog2.tilePosition.x += 0.5;		*/
}

function Invparallax(){
	mou.tilePosition.x += 0.2;
	bush.tilePosition.x += 0.15;
	trees.tilePosition.x -= 0.1;
	text.position.x += 0.3;
	/*fog1.tilePosition.x += 0.5;
	fog2.tilePosition.x -= 0.5;	*/
}

function onClick()
{    
	window.open("landscap5.html", "_blank");
}
function onClick2()
{    
	window.open("https://2d-game-rand.000webhostapp.com/", "_blank");
}

function onClick3()
{    
	window.open("https://drive.google.com/drive/folders/1Znx0OEqxE6pS5hrBwouaNMGly-WURjts?usp=sharing", "_blank");
}
function onClick4()
{    
	window.open("index.html", "_blank");
}
function onClick5()
{
	window.open("https://www.youtube.com/channel/UChVLnkYcom5TA4_rke7E3Zg?view_as=subscriber", "_blank");
}


