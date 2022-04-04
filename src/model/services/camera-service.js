import * as BABYLON from 'babylonjs';

export class CameraService{

    constructor(canvas, scene) {
        this.canvas = canvas;
        this.scene = scene;
    }

    createPerspectiveCam(){
        const camera = new BABYLON.ArcRotateCamera("Camera", 2.65, 1.4, 50, new BABYLON.Vector3(0, 0, 0), this.scene);
        camera.lowerRadiusLimit = 20;
        camera.upperRadiusLimit = 100;
        camera.attachControl(this.canvas, true);
        return camera
    }
}
