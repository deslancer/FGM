import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';
import 'babylonjs-loaders';
import {EngineService} from './services/engine-service';
import {CameraService} from './services/camera-service';
import {LightService} from './services/light-service';
import {LoaderService} from './services/loader-service';
import {ring_profile, global_scene} from "../controller/store";

const loaderService = new LoaderService();


export const createScene = async (canvas) => {
    const engine = new EngineService(canvas).getEngine();
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(1, 1, 1).toLinearSpace();
    const camera = new CameraService(canvas, scene).createPerspectiveCam();
    //new LightService().createHemiLight();
    let hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/textures/Studio_Softbox_v2-07.env", scene);

    ring_profile.subscribe(newValue => {
        loaderService.loadFirstRing(scene, newValue);
    })

        const pipeline = new BABYLON.DefaultRenderingPipeline(
        "defaultPipeline", // The name of the pipeline
        false, // Do you want the pipeline to use HDR texture?
        scene, // The scene instance
        [camera] // The list of cameras to be attached to
    );
    pipeline.samples = 8;
    pipeline.fxaaEnabled = true;
    pipeline.imageProcessing.contrast = 2;

    hdrTexture.setReflectionTextureMatrix(
        BABYLON.Matrix.RotationY( 1.20 )
    );
    scene.environmentTexture = hdrTexture;
    engine.runRenderLoop(() => {
        scene.render();
    });
    global_scene.update(existing => {
        return scene;
    });
    //scene.debugLayer.show();
    return scene;
}
