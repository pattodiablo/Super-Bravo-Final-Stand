var coins = 0;
var isDebug =  false;

var orientationMessages = {
	en: {
		title: "Rotate your device",
		message: "This game only works in landscape mode. Please rotate your screen to continue."
	},
	es: {
		title: "Gira tu dispositivo",
		message: "Este juego solo funciona en modo horizontal. Por favor, rota la pantalla para continuar."
	},
	pt: {
		title: "Gire o seu dispositivo",
		message: "Este jogo só funciona no modo paisagem. Por favor, gire a tela para continuar."
	},
	fr: {
		title: "Faites pivoter votre appareil",
		message: "Ce jeu fonctionne uniquement en mode paysage. Veuillez faire pivoter votre écran pour continuer."
	},
	de: {
		title: "Drehen Sie Ihr Gerät",
		message: "Dieses Spiel funktioniert nur im Querformat. Bitte drehen Sie Ihren Bildschirm, um fortzufahren."
	},
	it: {
		title: "Ruota il dispositivo",
		message: "Questo gioco funziona solo in modalità orizzontale. Ruota lo schermo per continuare."
	},
	ja: {
		title: "デバイスを回転してください",
		message: "このゲームは横向きモードでのみプレイできます。画面を回転して続行してください。"
	},
	ko: {
		title: "기기를 회전하세요",
		message: "이 게임은 가로 모드에서만 실행됩니다. 화면을 회전한 후 계속하세요."
	},
	zh: {
		title: "请旋转您的设备",
		message: "本游戏仅支持横屏模式。请旋转屏幕后继续。"
	},
	ru: {
		title: "Поверните устройство",
		message: "Эта игра работает только в альбомной ориентации. Поверните экран, чтобы продолжить."
	},
	ar: {
		title: "قم بتدوير جهازك",
		message: "تعمل هذه اللعبة فقط في الوضع الأفقي. يرجى تدوير الشاشة للمتابعة."
	},
	nl: {
		title: "Draai je apparaat",
		message: "Dit spel werkt alleen in liggende modus. Draai je scherm om door te gaan."
	},
	pl: {
		title: "Obróć urządzenie",
		message: "Ta gra działa tylko w trybie poziomym. Obróć ekran, aby kontynuować."
	},
	tr: {
		title: "Cihazınızı çevirin",
		message: "Bu oyun yalnızca yatay modda çalışır. Devam etmek için ekranınızı çevirin."
	},
	hi: {
		title: "अपना डिवाइस घुमाएं",
		message: "यह गेम केवल लैंडस्केप मोड में काम करता है। जारी रखने के लिए कृपया अपनी स्क्रीन घुमाएं।"
	}
};

function resolveOrientationLocale() {
	var preferred = [];

	if (navigator.languages && navigator.languages.length) {
		preferred = Array.prototype.slice.call(navigator.languages);
	}

	if (navigator.language) {
		preferred.push(navigator.language);
	}

	preferred.push("en");

	for (var i = 0; i < preferred.length; i++) {
		var code = String(preferred[i]).toLowerCase();

		if (orientationMessages[code]) {
			return code;
		}

		var prefix = code.split("-")[0];

		if (orientationMessages[prefix]) {
			return prefix;
		}
	}

	return "en";
}

function applyOrientationLocale() {
	var locale = resolveOrientationLocale();
	var messages = orientationMessages[locale] || orientationMessages.en;
	var title = document.querySelector(".orientation-overlay__title");
	var message = document.querySelector(".orientation-overlay__message");

	if (title) {
		title.textContent = messages.title;
	}

	if (message) {
		message.textContent = messages.message;
	}

	document.documentElement.lang = locale;
}

function isPortraitMode() {
	return window.innerWidth < window.innerHeight;
}

function updateOrientationOverlay() {
	var overlay = document.getElementById("orientation-overlay");
	if (!overlay) {
		return;
	}

	if (isPortraitMode()) {
		overlay.hidden = false;
		document.body.classList.add("orientation-locked");
	} else {
		overlay.hidden = true;
		document.body.classList.remove("orientation-locked");
	}
}

window.addEventListener("resize", updateOrientationOverlay);
window.addEventListener("orientationchange", updateOrientationOverlay);
document.addEventListener("DOMContentLoaded", function () {
	applyOrientationLocale();
	updateOrientationOverlay();
});
var isDoubleJump = true;
var hasCannonPower = false;
var renderer;
var activeLeveles=[];
var timesDead = 0;
var isFinal=false;
var isRestartingGame=false;
const mapIds = [1,2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20] // Define your fixed list of maps

var challengeNumber = 1; // Get today's challenge number
var mapId = mapIds[challengeNumber % mapIds.length]

function getOS() {

	var userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		renderer = "Phaser.AUTO";
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		renderer = "Phaser.AUTO";
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		renderer = "Phaser.WEBGL";
	} else if (/Android/.test(userAgent)) {
		renderer = "Phaser.WEBGL";
	} else if (!os && /Linux/.test(platform)) {
		renderer = "Phaser.WEBGL";
	}

	return renderer;
}

getOS();

var db;
var tempdata;
window.addEventListener('load', function () {
	updateOrientationOverlay();

	window.indexedDB = window.indexedDB || window.mozIndexedDB ||
		window.webkitIndexedDB || window.msIndexedDB;

	//prefixes of window.IDB objects
	window.IDBTransaction = window.IDBTransaction ||
		window.webkitIDBTransaction || window.msIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
		window.msIDBKeyRange

	if (!window.indexedDB) {
		window.alert("Please open this game in the latest version of Google Chrome");
	}

	
	var request = window.indexedDB.open("SupaDB", 1);

	var dbfirsttime = false;

	request.onerror = function (event) {
		console.log("error: ");
	};

	request.onsuccess = function (event) {
		db = request.result;
	//	console.log("success: " + db);
		// remove();
		if (!dbfirsttime) {
			
			const objectStore = db.transaction(['gameData'], "readwrite").objectStore('gameData');

			const objectStoreDataRequest = objectStore.get(1);

			objectStoreDataRequest.onsuccess = () => {

				const result = objectStoreDataRequest.result;
				//tempdata = result.data;
				tempdata = {
					levelsPassed: [],
					gotCard: false,
					coins: coins,
					level: "NewLevel0", 
					life: 5,
					maxLife:5,
					isMusicMuted: false,
					gotCannon: hasCannonPower,
					doubleJump: isDoubleJump,
					isFxMuted: false,
					timesDead: timesDead
				};
				crearjuego(tempdata);
				
			}
		}
		else{
			tempdata = {
				levelsPassed: [],
				gotCard: false,
				coins: coins,
				level: "NewLevel0", 
				life: 5,
				maxLife:5,
				isMusicMuted: false,
				gotCannon: hasCannonPower,
				doubleJump: isDoubleJump,
				isFxMuted: false,
				timesDead: timesDead
			};

			crearjuego(tempdata);
		}
	};

	request.onupgradeneeded = function (event) {
		var db = event.target.result;
		if (event.oldVersion < 1) {
			var objectStore = db.createObjectStore("gameData",{ keyPath: "id", autoIncrement:true});
		  }
		objectStore.add({
			data: {
				levelsPassed: [],
				gotCard: true,
				coins: coins,
				level: "NewLevel0",
				gotCannon: hasCannonPower,
				doubleJump: isDoubleJump,
				life: 5,
				maxLife:5,
				isMusicMuted:false,
				isFxMuted:false,
				thimesDead: timesDead
			}
		});
	  dbfirsttime = true;
	};


   


   function crearjuego(tempdata){
	updateOrientationOverlay();
//	console.log("window.innerWidth " + window.innerWidth) ;
	if(window.innerWidth > window.innerHeight){
		if(window.innerWidth>=1600){
			finalWidht=1600;
			finalHeight=832;
		}else{
			finalWidht=window.innerWidth;
			finalHeight=window.innerHeight;
		}
	
	}else{

		finalWidht=window.innerWidth;
		finalHeight=window.innerHeight;
	}
	
	var game = new Phaser.Game({

		width: 1031,
		height:  580,
		type: renderer,
		backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			orientation: Phaser.Scale.LANDSCAPE,
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: isDebug
			}
		},
		fps: {
			target: 60,
			min: 60,
			forceSetTimeOut: false
		},
		render: {
			pixelArt: false
		},
		input: {
			activePointers: 3
		}
	});
	
	game.isRestartingGame=false;

	
	game.pauseGame=function(){
		//game.sound.mute=false;
		for (const key in game.scene.keys) {
			if (Object.hasOwnProperty.call(game.scene.keys, key)) {
			  const element = game.scene.keys[key];
				element.scene.pause();
			}
		}
		
	}

	game.resumeGame=function(){
	//	game.sound.mute=false;
					for (const key in game.scene.keys) {
					  if (Object.hasOwnProperty.call(game.scene.keys, key)) {
						const element = game.scene.keys[key];
						  element.scene.resume();
					  }
					}

	}

	game.restartGame=function(){

		currentScene=game.scene.keys[activeLeveles];
		if(typeof currentScene !== "	"){
				var sceneToGo = currentScene.scene.get("InterludeMap");
				activeLeveles=[];
				console.log(currentScene.scene.key);
				sceneToGo.setLevel(currentScene.scene.key,1,1,0,0,false); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
				currentScene.game.playerData.life=5;
				currentScene.game.playerData.doubleJump=false;
				currentScene.game.playerData.gotCannon=false;
				sceneToGo.isMainScene = false;
				currentScene.scene.start("InterludeMap");
				currentScene.scene.remove(currentScene.scene.keys);
				console.log(sceneToGo);

		}
	
		
	}

	
	
	game.getScore=function(){

		
			currentScene=game.scene.keys[activeLeveles];


		if(typeof currentScene=="undefined"){
			score = 0
		}else{
			switch(currentScene.scene.key){
				case "Boot":
					score = 0
				break;
				case "Preloader":
					score = 0
				break;
				case "DemoScene":
					score = 0
				break;
				case "undefined":
					score = 0
				break;
				case "gameOverScene":
					score = 0
				break;
				default:
					
					score = currentScene.doScore();
				break
			}
		}
	
			
		
		
			
		
		return score;
	}

	game.playerData = tempdata;
	


	game.scene.add("Boot", Boot, true);



	  

   }

  

});


class Boot extends Phaser.Scene {

	preload() {

		this.load.pack("pack", "assets/preload-pack.json");
	

		//	this.load.video("pruebaVideo", "assets/video/pruebaVideo.mp4");
		//	this.load.video("ending", "assets/video/ending.mp4");
	
				
			
	}

	doScore(){
		return 0;
	}

	create() {

	
	
	 this.scene.start("Preloader");
	
	
	}

}

function updatear(datos) {
	// Abra una transacción como de costumbre
	const objectStore = db.transaction(['gameData'], "readwrite").objectStore('gameData');
  
	const objectStoreDataRequest = objectStore.get(1);
	
	objectStoreDataRequest.onsuccess = () => {
		
		const result = objectStoreDataRequest.result;
		//data.notified = "yes";
		result.data = datos;
  
		const updateDataRequest = objectStore.put(result);
  
		updateDataRequest.onsuccess = () => {
			   var dbupdate = true;
			   //console.log("db updated")
			};
	}
  };

  //REx Plugin para letreros hablados
  
const COLOR_PRIMARY = 0x000000;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
    var wrapWidth = GetValue(config, 'wrapWidth', 0);
    var fixedWidth = GetValue(config, 'fixedWidth', 0);
    var fixedHeight = GetValue(config, 'fixedHeight', 0);
	//console.log("wrapWidth " + wrapWidth)
    var textBox = scene.rexUI.add.textBox({
            x: x,
            y: y,

	
           
			background: scene.add.rectangle(x, y, wrapWidth, wrapWidth, 0x2D2D2D).setOrigin(0),
       

            icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 10, COLOR_DARK),

            // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
            text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

            action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT).setVisible(false),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
                icon: 10,
                text: 10,
            },
			
        })
        .setOrigin(0)
        .layout();

    textBox
        .setInteractive()
        .on('pointerdown', function () {
            var icon = this.getElement('action').setVisible(false);
            this.resetChildVisibleState(icon);
            if (this.isTyping) {
                this.stop(true);
            } else {
                this.typeNextPage();
            }
        }, textBox)
        .on('pageend', function () {
            if (this.isLastPage) {
                return;
            }

            var icon = this.getElement('action').setVisible(true);
            this.resetChildVisibleState(icon);
            icon.y -= 30;
            var tween = scene.tweens.add({
                targets: icon,
                y: '+=30', // '+=100'
                ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 500,
                repeat: 0, // -1: infinity
                yoyo: false
            });
        }, textBox)
    //.on('type', function () {
    //})
		//console.log(textBox);
		textBox.blendMode=2;
    return textBox;
}

var getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.add.text(0, 0, '', {
            fontSize: '20px',
            wordWrap: {
                width: wrapWidth
            },
            maxLines: 3
        })
        .setFixedSize(fixedWidth, fixedHeight);
}

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
        fixedWidth: fixedWidth,
        fixedHeight: fixedHeight,

        fontSize: '20px',
        wrap: {
            mode: 'word',
            width: wrapWidth
        },
        maxLines: 3
    })
}


	  
