import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';
import 'babylonjs-loaders';
import {EngineService} from './services/engine-service';
import {CameraService} from './services/camera-service';
import {LightService} from './services/light-service';
import {LoaderService} from './services/loader-service';
import {ring_profile, global_scene} from "./store";

const loaderService = new LoaderService();

export const createScene = async (canvas) => {
    const engine = new EngineService(canvas).getEngine();
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(1, 1, 1).toLinearSpace();
    const camera = new CameraService(canvas, scene).createPerspectiveCam();
    const hemilight = new LightService(scene).createHemiLight();
    let hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/textures/environment.env", scene);

    scene.createDefaultEnvironment({
        createSkybox: false,
        createGround: false
    });

    loaderService.loadModel(scene);

    scene.environmentTexture = hdrTexture;
    hdrTexture.level = 1.5;
    let hdrRotation = 277.5; // in degrees
    hdrTexture.setReflectionTextureMatrix(BABYLON.Matrix.RotationY(BABYLON.Tools.ToRadians(hdrRotation)));
    engine.runRenderLoop(() => {
        scene.render();
    });
    global_scene.update(existing => {
        return scene;
    });

    //scene.debugLayer.show();
    return scene;
}
