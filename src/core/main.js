import * as THREE from 'three';

const canvas = document.querySelector('#c');

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 10000);

camera.position.z = 2;

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(-1, 2, 4);
scene.add(light);

function resizeRendererToDisplaySize(renderer) {
    const c = renderer.domElement;
    const width = c.clientWidth;
    const height = c.clientHeight;
    const needResize = c.width !== width || c.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

function render(time) {
    time *= 0.001;


    if (resizeRendererToDisplaySize(renderer)) {
        const c = renderer.domElement;
        camera.aspect = c.clientWidth / c.clientHeight;
        camera.updateProjectionMatrix();
    }

    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
requestAnimationFrame(render);
