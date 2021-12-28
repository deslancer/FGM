import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';
import 'babylonjs-loaders';
import { EngineService } from './services/engine-service';
import { CameraService } from './services/camera-service';
import { LightService } from './services/light-service';
import { LoaderService } from './services/loader-service';



export const createScene = async (canvas) => {
    const engine = new EngineService(canvas).getEngine();
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(1, 1, 1).toLinearSpace();
    const camera = new CameraService(canvas,scene).createPerspectiveCam();
    const hemilight = new LightService(scene).createHemiLight();
    let hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/textures/environment.env", scene);

    scene.createDefaultEnvironment({
        createSkybox: false,
        createGround: false
    });

    new LoaderService().loadModel(scene, "2rings.glb");
    const pipeline = new BABYLON.DefaultRenderingPipeline(
        "defaultPipeline", // The name of the pipeline
        false, // Do you want the pipeline to use HDR texture?
        scene, // The scene instance
        [camera] // The list of cameras to be attached to
    );
    pipeline.samples = 8;
    pipeline.fxaaEnabled = true;
    pipeline.bloomEnabled = true;
    pipeline.bloomThreshold = 1.0;
    pipeline.bloomWeight = 0.250;
    pipeline.bloomKernel = 30;
    pipeline.bloomScale = 1.0;



    scene.environmentTexture = hdrTexture;
    hdrTexture.level = 1.5;
    let hdrRotation = 277.5; // in degrees
    hdrTexture.setReflectionTextureMatrix(BABYLON.Matrix.RotationY(BABYLON.Tools.ToRadians(hdrRotation)));
    engine.runRenderLoop(() => {
        scene.render();
    });

    //scene.debugLayer.show();
    return scene;
}
