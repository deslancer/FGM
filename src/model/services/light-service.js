import * as BABYLON from 'babylonjs';

export class LightService {

    constructor(scene) {
        this.scene = scene;
    }

    createHemiLight(){
      return new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    }
    createDirectionalLight() {
      const dir_light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(1, -1, -1.5), this.scene)
        dir_light.position.y = 4;
        dir_light.intensity = 1;
        return dir_light;
    }
}
