import * as BABYLON from 'babylonjs';

export class CameraService{
    private radius_limit = 3.8;
    canvas;
    scene;
    constructor(canvas, scene) {
        this.canvas = canvas;
        this.scene = scene;
    }

    createPerspectiveCam(){
        const camera = new BABYLON.ArcRotateCamera("Camera", 2.45, 1.1, this.radius_limit, new BABYLON.Vector3(0, 0, 2), this.scene);
        camera.setTarget(new BABYLON.Vector3(0, 1, 0));
        camera.lowerRadiusLimit = 2;
        camera.upperRadiusLimit = this.radius_limit;
        camera.upperBetaLimit = Math.PI / 2.1;
        //camera.useAutoRotationBehavior = true;
        camera.attachControl(this.canvas, true);
        return camera
    }
}
