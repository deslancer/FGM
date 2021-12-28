import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
export class LoaderService {
    loadModel(scene, name) {
      BABYLON.SceneLoader.ImportMeshAsync("", "/assets/models/", name, scene).then((result) => {
            let model = result.meshes[0];
            model.scaling.x = 50;
            model.scaling.y = 50;
            model.scaling.z = 50;
          let diamondMaterial = scene.getMaterialByName('Diamond');
          diamondMaterial.subSurface.isRefractionEnabled = true;
          diamondMaterial.indexOfRefraction = 2.418;
          diamondMaterial.subSurface.indexOfRefraction = 2.418;
          diamondMaterial.subSurface.volumeIndexOfRefraction = 1.150;
          diamondMaterial.subSurface.refractionIntensity = 1.2;
          diamondMaterial.subSurface.tintColor = new BABYLON.Color3(1,1,1);
          diamondMaterial.metallic = 0.35;
          console.log(diamondMaterial);
            return model
        });
    }
}
