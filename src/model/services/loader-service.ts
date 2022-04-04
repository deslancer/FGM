import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export class LoaderService {
    loadModel(scene) {
        let model;
        BABYLON.SceneLoader.ImportMeshAsync("", "/assets/models/", 'House.glb', scene).then((result) => {
            model = result.meshes[0];
            scene.activeCamera.setTarget(model)
        });
        return model
    }
}
