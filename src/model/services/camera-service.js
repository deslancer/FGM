import * as BABYLON from 'babylonjs';

export class CameraService{

    constructor(canvas, scene) {
        this.canvas = canvas;
        this.scene = scene;
    }

    createPerspectiveCam(){
        const camera = new BABYLON.ArcRotateCamera("Camera", 2.65, 1.4, 2, new BABYLON.Vector3(0, 0, 2), this.scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.lowerRadiusLimit = 2;
        camera.upperRadiusLimit = 2;
        camera.useAutoRotationBehavior = true;
        camera.attachControl(this.canvas, true);
        return camera
    }
}
