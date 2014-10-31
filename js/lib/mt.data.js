window.mt = window.mt || {}; window.mt.data = {
	"assets": {
		"name": "assets",
		"contents": [
			{
				"name": "Loading",
				"contents": [
					{
						"id": 1,
						"name": "preload.png",
						"fullPath": "/Loading/preload.png",
						"key": "/loading.png",
						"width": 190,
						"height": 9,
						"frameWidth": 190,
						"frameHeight": 9,
						"frameMax": -1,
						"margin": 0,
						"spacing": 0,
						"anchorX": 0,
						"anchorY": 0,
						"fps": 10,
						"updated": 1406817915033,
						"atlas": ""
					},
					{
						"id": 2,
						"name": "loading.png",
						"fullPath": "/Loading/loading.png",
						"key": "/preload.png",
						"width": 190,
						"height": 9,
						"frameWidth": 190,
						"frameHeight": 9,
						"frameMax": -1,
						"margin": 0,
						"spacing": 0,
						"anchorX": 0,
						"anchorY": 0,
						"fps": 10,
						"updated": 1406817917030,
						"atlas": ""
					}
				],
				"count": 0,
				"id": 4,
				"fullPath": "/Loading",
				"isClosed": true
			},
			{
				"id": 6,
				"name": "background.png",
				"fullPath": "/background.png",
				"key": "/background.png",
				"width": 800,
				"height": 480,
				"frameWidth": 800,
				"frameHeight": 480,
				"frameMax": -1,
				"margin": 0,
				"spacing": 0,
				"anchorX": 0,
				"anchorY": 0,
				"fps": 10,
				"updated": 1412523618193,
				"atlas": "",
				"physics": {
					"enable": 0
				},
				"userData": {}
			},
			{
				"id": 5,
				"name": "planes.png",
				"fullPath": "/planes.png",
				"key": "/planes.png",
				"width": 256,
				"height": 512,
				"frameWidth": 87,
				"frameHeight": 73,
				"frameMax": -1,
				"margin": 0,
				"spacing": 0,
				"anchorX": 0,
				"anchorY": 0,
				"fps": 20,
				"updated": 1412523592689,
				"atlas": "",
				"physics": {
					"enable": 1,
					"immovable": 0,
					"bounce": {
						"x": 1,
						"y": 1
					},
					"gravity": {
						"allow": 1,
						"x": 0,
						"y": 0
					},
					"size": {
						"width": -1,
						"height": -1,
						"offsetX": 0,
						"offsetY": 0
					},
					"rotation": {
						"allowRotation": 0,
						"maxAngular": 0
					},
					"maxVelocity": 0,
					"mass": 1,
					"collideWorldBounds": 1
				},
				"userData": {}
			},
			{
				"id": 7,
				"name": "sheet.png",
				"fullPath": "/sheet.png",
				"key": "/sheet.png",
				"width": 1024,
				"height": 2048,
				"frameWidth": 410,
				"frameHeight": 70,
				"frameMax": -1,
				"margin": 0,
				"spacing": 0,
				"anchorX": 0,
				"anchorY": 0,
				"fps": 10,
				"updated": 1412608364626,
				"atlas": "",
				"physics": {
					"enable": 0
				},
				"userData": {}
			},
			{
				"id": 8,
				"name": "textGameOver.png",
				"fullPath": "/textGameOver.png",
				"key": "/textGameOver.png",
				"width": 412,
				"height": 78,
				"frameWidth": 412,
				"frameHeight": 78,
				"frameMax": -1,
				"margin": 0,
				"spacing": 0,
				"anchorX": 0,
				"anchorY": 0,
				"fps": 10,
				"updated": 1412608798215,
				"atlas": ""
			}
		],
		"count": 8
	},
	"objects": {
		"name": "objects",
		"contents": [
			{
				"assetId": 5,
				"x": 386,
				"y": 311,
				"type": 0,
				"anchorX": 0.5,
				"anchorY": 1,
				"userData": {},
				"physics": {
					"enable": 1,
					"immovable": 0,
					"bounce": {
						"x": 0,
						"y": 0.20000000000000004
					},
					"gravity": {
						"allow": 1,
						"x": 0,
						"y": 50
					},
					"size": {
						"width": -1,
						"height": -1,
						"offsetX": 0,
						"offsetY": 0
					},
					"rotation": {
						"allowRotation": 0,
						"maxAngular": 0
					},
					"maxVelocity": 0,
					"mass": 1,
					"collideWorldBounds": 1
				},
				"scaleX": 1,
				"scaleY": 1,
				"angle": 0,
				"alpha": 1,
				"frame": 0,
				"isVisible": true,
				"isLocked": true,
				"id": "tmp1412522829695",
				"name": "plane",
				"index": -1,
				"fullPath": "/plane",
				"width": 87,
				"height": 73,
				"assetKey": "/planes.png"
			},
			{
				"id": "tmp1406818026618",
				"name": "Loading",
				"x": 0,
				"y": 0,
				"angle": 0,
				"contents": [
					{
						"assetId": 2,
						"x": 256,
						"y": 192,
						"type": 0,
						"anchorX": 0,
						"anchorY": 0,
						"scaleX": 1,
						"scaleY": 1,
						"angle": 0,
						"alpha": 1,
						"frame": 0,
						"isVisible": 1,
						"isLocked": 0,
						"width": 190,
						"height": 9,
						"id": "tmp1406818026617",
						"name": "loading",
						"fullPath": "/Loading/loading",
						"assetKey": "/preload.png"
					},
					{
						"assetId": 1,
						"x": 256,
						"y": 192,
						"type": 0,
						"anchorX": 0,
						"anchorY": 0,
						"scaleX": 1,
						"scaleY": 1,
						"angle": 0,
						"alpha": 1,
						"frame": 0,
						"isVisible": 1,
						"isLocked": 0,
						"width": 190,
						"height": 9,
						"id": "tmp1406818026616",
						"name": "preload",
						"fullPath": "/Loading/preload",
						"assetKey": "/loading.png"
					}
				],
				"isVisible": false,
				"isLocked": true,
				"isFixedToCamera": 0,
				"fullPath": "/Loading",
				"isClosed": true,
				"alpha": 1,
				"physics": {
					"enable": 0
				},
				"userData": {}
			},
			{
				"assetId": 6,
				"x": 0,
				"y": 0,
				"type": 0,
				"anchorX": 0,
				"anchorY": 0,
				"userData": {},
				"physics": {
					"enable": 0
				},
				"scaleX": 1,
				"scaleY": 1,
				"angle": 0,
				"alpha": 1,
				"frame": 0,
				"isVisible": 1,
				"isLocked": 0,
				"id": "tmp1412608119906",
				"name": "bg",
				"index": -1,
				"fullPath": "/bg",
				"width": 800,
				"height": 480,
				"assetKey": "/background.png"
			}
		],
		"count": 0
	},
	"map": {
		"cameraX": -347,
		"cameraY": 19,
		"worldWidth": 800,
		"worldHeight": 480,
		"viewportWidth": 800,
		"viewportHeight": 480,
		"gridX": 64,
		"gridY": 64,
		"gridOffsetX": 0,
		"gridOffsetY": 0,
		"showGrid": 1,
		"backgroundColor": "#222222",
		"physics": {
			"enable": 0
		}
	}
};
