import * as BABYLON from 'babylonjs';
import { global_scene } from "../../controller/store";

export class RingWidthService {
    private scene: any;
    width: Array<any>;
    async getRingWidthValues() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/ring_width/');
        const data = await response.json();

        if (response.ok) {
            return data
        } else {
            throw new Error(data);
        }
    }
    setRingWidth(val, name) {
        global_scene.subscribe(newValue => {
            this.scene = newValue
        })

        const ring = this.scene.getNodeByName(name);
        const outer = this.scene.getMeshByName('Outer');
        const inner = this.scene.getMeshByName('Inner');
        const left = this.scene.getMeshByName('Left');
        const right = this.scene.getMeshByName('Right');
        ring.scaling.x = val / 6;
    }

}
