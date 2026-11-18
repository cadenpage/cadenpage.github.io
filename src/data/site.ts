export const links = {
	email: 'mailto:caden@cadenpage.com',
	github: 'https://github.com/cadenpage',
	linkedin: 'https://www.linkedin.com/in/cadenpage/',
	cv: '', // Add the published, read-only Google Docs web URL (not the editor URL).
	lab: 'https://robin-lab.cs.utexas.edu/',
	hero: 'https://sites.utexas.edu/herolab/',
	halliburton: 'https://www.halliburton.com/',
	graduateProject: 'https://robin-lab.cs.utexas.edu/build-up-a-way/',
	inventionworks: 'https://inventionworks.engr.utexas.edu/',
	sanger: 'https://undergraduates.utexas.edu/tutoring-academic-assistance/sanger-learning-center/about-sanger-learning-center',
};

export const interests = ['Robot learning', 'World models for control'];

export const education = [
	'Ph.D. in Mechanical Engineering, UT Austin — first-year student',
	'B.S. in Mechanical Engineering, UT Austin — Highest Honors, 2026',
	'Business minor',
];

export const honors = [
	'NSF Graduate Research Fellow',
	'Three-time Distinguished College Scholar, top 4% of the Cockrell School of Engineering',
];

export const undergraduateProjects = [
  {
    "title": "Rotom: Robot Learning and Manipulation Platform",
    "href": "/projects/rotom/",
    "summary": "A custom 4-DoF arm with task-space teleoperation, visual servoing, and a real-robot diffusion-policy pipeline.",
    "image": "/images/projects/rotom-hardware.webp",
    "imageAlt": "The physical Rotom robot arm"
  },
  {
    "title": "SLICE: Passive Structured-Light Depth Estimation",
    "href": "/projects/structured-light-depth/",
    "summary": "Mechanical engineering capstone. LED illumination and passive masks; 2.43 mm dense ramp-depth MAE in controlled validation.",
    "image": "/images/projects/slice-fixture.webp",
    "imageAlt": "CAD model of the structured-light calibration fixture"
  },
  {
    "title": "Probabilistic Vision Modeling",
    "href": "/projects/depth-estimation/",
    "summary": "Course project comparing FastDepth and DPT for monocular depth and per-pixel uncertainty. DPT achieved 0.513 median-scaled RMSE.",
    "image": "/images/projects/depth-reference.webp",
    "imageAlt": "RGB input and ground-truth depth from the project evaluation"
  },
  {
    "title": "Learning from Demonstration in MuJoCo",
    "href": "/projects/teleop-bc/",
    "summary": "Webcam and keyboard teleoperation, behavioral cloning, and force/work comparisons for a simulated pushing task.",
    "image": "/images/projects/teleop-work.webp",
    "imageAlt": "Mechanical work comparison between human control and a learned policy"
  },
  {
    "title": "Ball-E: Autonomous Basketball Robot",
    "href": "/projects/ball-e/",
    "summary": "Competition robot combining ultrasonic navigation, PID line following, IR-beacon targeting, and an autonomous shot sequence.",
    "image": "/images/projects/balle-robot.webp",
    "imageAlt": "Ball-E robot with its competition trophies"
  }
];
