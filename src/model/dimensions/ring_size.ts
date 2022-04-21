import * as BABYLON from 'babylonjs';
import { global_scene } from "../../controller/store";
import { CookieService } from "../../model/services/cookie-service";

export class RingSizeService {
    private scene: any;
    private cookieService = new CookieService();
    async getRingSizeValues() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/ring_size/');
        const data = await response.json();

        if (response.ok) {
            return data
        } else {
            throw new Error(data);
        }
    }

    setRingSize(value, name) {
        global_scene.subscribe(newValue => {
            this.scene = newValue
        })
        this.cookieService.setConfigToCookie('test', value, 30);
        const ring = this.scene.getNodeByName(name);
        ring.scaling.z = value / 20;
        ring.scaling.y = value / 20;
    }

}
