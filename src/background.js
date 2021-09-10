import * as THREE from "three";
export default function () {
	const loader = new THREE.TextureLoader();
	const star = loader.load("star.png");

	// Canvas
	const canvas = document.querySelector("canvas.webgl");

	// Scene
	const scene = new THREE.Scene();

	// Objects
	const particlesGeometry = new THREE.BufferGeometry();
	const particlesCount = 8000;
	const positionArray = new Float32Array(particlesCount * 3);
	for (let i = 0; i < particlesCount * 3; i++)
		positionArray[i] = (Math.random() - 0.5) * 5;
	particlesGeometry.setAttribute(
		"position",
		new THREE.BufferAttribute(positionArray, 3)
	);

	// MATERIALS
	const material = new THREE.PointsMaterial({
		size: 0.005,
	});
	material.color = new THREE.Color("aliceblue");
	const particlesMaterial = new THREE.PointsMaterial({
		size: 0.01,
		map: star,
		transparent: true,
	});

	// Mesh
	const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);

	scene.add(particlesMesh);

	//SIZES
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	window.addEventListener("resize", () => {
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;

		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();

		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	});

	//CAMERA
	const camera = new THREE.PerspectiveCamera(
		75,
		sizes.width / sizes.height,
		0.1,
		100
	);
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 2;
	scene.add(camera);

	//RENDERER
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
	});
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	//renderer.setClearColor(new THREE.Color("#434553"), 1);

	//MOUSE
	document.addEventListener("mousemove", animateParticles);
	let mouseX = 0;
	let mouseY = 0;
	function animateParticles(event) {
		mouseY = event.clientY - window.innerHeight / 2;
		mouseX = event.clientX - window.innerWidth / 2;
	}

	//ANIMATE
	const clock = new THREE.Clock();
	const tick = () => {
		const elapsedTime = clock.getElapsedTime();

		particlesMesh.rotation.x = mouseY * 0.0002 + 0.02 * elapsedTime;
		particlesMesh.rotation.y = mouseX * 0.0002 + 0.02 * elapsedTime;

		renderer.render(scene, camera);

		window.requestAnimationFrame(tick);
	};
	tick();
}
