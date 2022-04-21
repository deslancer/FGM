import * as BABYLON from 'babylonjs';
import {global_scene} from "../../controller/store";
export class LightService {
    scene: any;
    constructor() {
        global_scene.subscribe(newValue => {
            this.scene = newValue
        })
    }

    createHemiLight(){
      return new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), this.scene);
    }
    createDirectionalLight() {
      const dir_light = new BABYLON.DirectionalLight('ShadowLight', new BABYLON.Vector3(1, -1, -1.5), this.scene)
        dir_light.position.y = 4;
        dir_light.intensity = 1;
        return dir_light;
    }
}
