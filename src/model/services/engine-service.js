import * as BABYLON from 'babylonjs';

export class EngineService{
    constructor(canvas){
        this.engine = new BABYLON.Engine(canvas, true);
        window.addEventListener('resize', () => {
            this.engine.resize();
          });
    }
    getEngine(){
        return this.engine;
    }

}