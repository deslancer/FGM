import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

import { current_width, current_size, preloading } from "../../controller/store";

declare let BABYLONX: any;
export class LoaderService {

    loadFirstRing(scene, name) {
        preloading.update(existing => {
            return true;
        });
        const current_ring = scene.getNodeByName('Ring');
        if (current_ring) current_ring.dispose();
        BABYLON.SceneLoader.ImportMeshAsync("", "https://fgm.3dtour.ua/mediafiles/profiles/", name, scene).then((result) => {
            let model = result.meshes[0];
            model.name = 'Ring';
            model.scalingDeterminant = 1;
            model.position.x += 0.5;
            current_width.subscribe(newValue => {
                model.scaling.x = newValue;
            })
           /* current_size.subscribe(newValue => {
                model.scaling.z = newValue;
                model.scaling.y = newValue;
            })*/
            let diamond = scene.getMeshByName('Diamond');

            var url = "https://cdn.rawgit.com/NasimiAsl/Extensions/master/GeometryBuilder/SGBD.js";
            var s = document.createElement("script");
            s.src = url;
            document.head.appendChild(s);

            const camera = scene.activeCamera;
            window.eval('var _null ="dfds f sdfsdf";');

            window.eval('var noise,time = 255560;');

                s.onload = function () {
                    BABYLONX.ShaderBuilder.InitializeEngine();
                    let SB = BABYLONX.ShaderBuilder;
                    let SBP = BABYLONX.Shader.Print;

                    let params = {
                        r:  .0,
                        g:  .1,
                        b:  .4,
                        alpha: 3.5,
                        gradientSize: 1.5,
                        gradientSens: true
                    };
                    params.alpha /= 3;
                    params.alpha = .5 - params.alpha;

                    var color1 = { r: params.r, g: params.g, b: params.b, a: params.alpha };
                    var color2;
                    if (params.gradientSize != 0.5) color2 = { r: .0, g: .7, b: .7, a: params.alpha };
                    else color2 = { r: params.r, g: params.g, b: params.b, a: params.alpha };

                    if (params.gradientSens) {
                        var temp = color1;
                        color1 = color2;
                        color2 = temp;
                    }
                    else {
                        params.gradientSize *= -1;
                    }

                    params.gradientSize /= 4;
                    var gradientPosY;
                    if (params.gradientSize < 0) gradientPosY = 'pos.y-' + params.gradientSize;
                    if (params.gradientSize == 0) gradientPosY = 'pos.y+0.0001';
                    else gradientPosY = 'pos.y+' + params.gradientSize;

                    let st = {
                        color1: color1,
                        color2: color2,
                        height: 0.5,
                        normal: BABYLONX.Normals.Flat,
                        reflectFav: 0.05,
                        specularLevel: 5,
                        specularPower: 35,

                    };

                    diamond.material = new BABYLONX.ShaderBuilder().InLine(
                   `float scale = 10.;
                    float blur = 12.;
                    vec3 wnr = cross(`+BABYLONX.Normals.Flat+`,normalize( (camera-pos)) );
                    float fresnel =1.- dot(`+BABYLONX.Normals.Flat+`,normalize( (camera-pos)) );
                   vec3  nr = cross(nrm,normalize( (camera-pos)) );
                    vec3 wp0 = r_y(pos,-1.*camera.x-145.*wnr.z+20.*nr.x,vec3(0.));
                     wp0 = r_x(wp0,145.*wnr.y+20.*nr.z,vec3(0.));
                   
                   result.x = sin(wp0.x*scale)*blur+cos(wp0.z*scale)*blur ;
                   vec3 wp1 = r_y(pos,1.*camera.x-45.*wnr.x+20.*nr.y,vec3(0.));
                     wp1 = r_x(wp1,45.*wnr.z,vec3(0.));
                      wp1 = r_x(wp1,45.*camera.y,vec3(0.));
                     result.x *= sin(wp1.x*scale )*blur+cos(wp1.z*scale )*blur ;
                   
                
                    vec3 wp2 = r_z(pos+vec3(10.),105.*wnr.x+20.*nr.y,vec3(0.));
                     wp2 = r_x(wp2,1.*camera.z-105.*wnr.z,vec3(0.));
                     result.x *=0.5+0.5*( sin(wp2.x*scale*0.57 )*blur+cos(wp2.z*scale*0.57 )*blur) ;
        
                    result.g = fresnel*pow(fresnel*result.x-fresnel*0.32,15.)*15.; 
        
                   vec3 colo = 0.5*vec3(abs(sin(wp0.x*scale*1.))*.2,abs(sin(wp1.x*scale*1.))*.75,abs(sin(wp2.x*scale*0.3 )));
                colo.x *= colo.z;
                 colo.y *= colo.x;
                     result.x = max(0.,min(1.,result.x));
                       result.y = max(0.,min(1.,result.y));
                         result.z = max(0.,min(1.,result.z));
                         fresnel = max(0.,min(1.,fresnel));
        
                         float spec = min(1.,max(0.,pow(1.-fresnel,123.)*13.-pow(1.-fresnel,0.5)*0.5 ));
                         fresnel = min(1.,max(0.,pow( fresnel,8.)*13.-pow( fresnel,0.5)*0.5 ));
                      
                   result.xyz = mix(vec3(1.)*0.75+colo*0.25,mix(colo*length(colo)*0.5+0.5*length(colo),mix(vec3(0.),vec3(1.),result.x),result.y*0.5+0.5)  ,1.-fresnel)+vec3(1.)*10.*spec+vec3(1.)*10.*fresnel;
        
                   result.w = 1.;`).BuildMaterial(scene);


                   let time_step1 = 0;

                    for(let j = 0;j<4;j++){
                        let pps1 = new BABYLONX.ShaderBuilder()
                            .Map({ index: 'current' })
                            .Reference(1)
                            .Func(function(me){
                                me = me.InLine('vec3 a = vec3(0.);float la = 0.01;float sc = 1.;if(time > 0.){');
                                for(let i = -10;i<10;i++){
                                    me = me.InLine(' la = time*0.00085 ;sc = '+SBP(i)+'*360./20.;');

                                    me = me.Map({ index: 'current' , uv:'vec2(vuv+rotate_xy(vec2(0.0),vec2(1.,1.),sc )*la)' })
                                        .InLine('a += result.xyz*0.05;');

                                }
                                me = me.InLine('result.xyz = result_1.xyz+a*result_1.x;}');


                                me.Setting.Time = true;
                                me.Uniforms.push('time')
                                return me;
                            })
                            .BuildPostProcess(camera,  scene,1.10, {
                                onApply: function (ef) {
                                    if(ef && ef._uniformsNames && ef._uniformsNames.length == 2){
                                        ef._uniformsNames.push('time')
                                    }
                                    ef.setFloat('time',time_step1);
                                }
                            });
                    }
                    let startFade = 0;
                    // GUI

                    scene.registerBeforeRender(function () {
                        if(startFade ==1)
                        {
                            time_step1 ++;
                            time_step1 = min(0.1,time_step1);
                        }

                        if(startFade ==2)
                        {
                            time_step1 --;
                            time_step1 = max(0,time_step1);
                        }

                        new BABYLONX.ShaderMaterialHelper().SetUniforms(
                            scene.meshes,
                            camera.position,
                            camera.target,
                            { x: 0, y: 0 },
                            { x: 100, y: 100 },
                            time++);

                        //  camera.position.y = 16.;


                    })

                }




            preloading.update(existing => {
                return false;
            });
            return model
        });
    }
    /*loadSecondRing(scene, name) {
        preloading.update(existing => {
            return true;
        });
        const current_ring = scene.getNodeByName('Ring2');
        if (current_ring) current_ring.dispose();
        BABYLON.SceneLoader.ImportMeshAsync("", "https://fgm.3dtour.ua/mediafiles/profiles/", name, scene).then((result) => {
            let model = result.meshes[0];
            model.name = 'Ring2';
            model.scalingDeterminant = 0.8;
            current_width.subscribe(newValue => {
                model.scaling.x = newValue;
            })
            model.position.x -= 0.5;
            preloading.update(existing => {
                return false;
            });
            return model
        });
    }*/
}
