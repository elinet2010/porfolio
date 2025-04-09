import { InlineCode } from "@/once-ui/components";

const person = {
	firstName: "Elizabeth",
	lastName: "Velasquez",
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: "Frontend Developer",
	avatar: "/images/avatar.jpg",
	location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ["Español", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>
			I occasionally write about design, technology, and share thoughts on
			the intersection of creativity and engineering.
		</>
	),
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: "GitHub",
		icon: "github",
		link: "https://github.com/elinet2010",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/elizabeth-velasquez-mahecha/",
	},
	{
		name: "Email",
		icon: "email",
		link: "mailto:velasquez.eliza2013@gmail.com",
	},
];

const home = {
	label: "Home",
	title: `${person.name} - ${person.role}`,
	description: `Potafolio ${person.role}`,
	headline: <>Elizabeth Velásquez</>,
	subline: (
		<>
			Desarrolladora web, Especialista en Front-end con experiencia en la creación de interfaces web. <br/> <br/>Experta en React.js, Next.js, Gatsby y Redux.
		</>
	),
};

const about = {
	label: "Acerca de mí",
	title: "Acerca de mí",
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: false,
		link: "https://cal.com",
	},
	intro: {
		display: true,
		title: "Introducción",
		description: (
			<>
				Desarrolladora web, Especialista en Front-end con experiencia en
				la creación de interfaces optimizadas para SEO, diseño
				responsivo y mejoras de rendimiento en aplicaciones web. Experta
				en tecnologías como React.js, Next.js, Gatsby y Redux. Amplio
				conocimiento en HTML5, CSS3, SASS y JavaScript. Habilidad para
				trabajar en entornos ágiles con metodologías como Scrum y uso de
				Git para control de versiones. Experiencia en la creación y
				mantenimiento de APIs con Python y SQL. Busco oportunidades de
				trabajo remoto en proyectos de alto impacto.
			</>
		),
	},
	work: {
		display: false, // set to false to hide this section
		title: "Experiencia",
		experiences: [
			{
				company: "HABI",
				timeframe: "2021 - Presente",
				role: "Developer",
				achievements: [
					<>
						Desarrollo de aplicaciones web escalables y optimizadas
						para SEO utilizando React.js y Next.js.
					</>,
					<>
						Integración de APIs REST y GraphQL para conectar
						servicios y funcionalidades complejas.
					</>,
					<>
						Implementación de pruebas unitarias y de integración con
						Jest y React Testing Library.
					</>,
					<>
						Colaboración con equipos de diseño y producto para crear
						experiencias de usuario intuitivas.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: "/images/projects/project-01/cover-01.jpg",
						alt: "Habi Project",
						width: 16,
						height: 9,
					},
          {
						src: "/images/projects/project-01/cover-02.jpg",
						alt: "Habi Project",
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: "Grupo Ditech ",
				timeframe: "2019 - 2021",
				role: "Desarrolladora Frontend",
				achievements: [
					<>
						Desarrollo de módulos y componentes con React.js,
						Next.js y Redux.
					</>,
					<>Participación activa en equipo Scrum.</>,
					<>
						Refactorización de funcionalidades clave con enfoque en
						escalabilidad.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: "/images/projects/project-01/cover-03.jpg",
						alt: "Habi Project",
						width: 16,
						height: 9,
					},
          {
						src: "/images/projects/project-01/cover-04.jpg",
						alt: "Habi Project",
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: "Estudios",
		institutions: [
			{
				name: "Universidad Cooperativa de Colombia",
				description: <>Ingeniería de Sistemas</>,
			},
			{
				name: "Corporación Universal de Investigación y Tecnología",
				description: (
					<>Tecnólogo en Desarrollo de Software</>
				),
			},
		],
	},
	technical: {
		display: false, // set to false to hide this section
		title: "Skills",
		skills: [
			{
				title: "Figma",
				description: (
					<>
						Able to prototype in Figma with Once UI with unnatural
						speed.
					</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [
					{
						src: "/images/projects/project-01/cover-02.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
					{
						src: "/images/projects/project-01/cover-03.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
				],
			},
			{
				title: "Next.js",
				description: (
					<>
						Building next gen apps with Next.js + Once UI +
						Supabase.
					</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [
					{
						src: "/images/projects/project-01/cover-04.jpg",
						alt: "Project image",
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
};

const blog = {
	label: "Blog",
	title: "Writing about design and tech...",
	description: `Read what ${person.name} has been up to recently`,
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
};

const work = {
	label: "Experiencia",
	title: "My projects",
	description: `Design and dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

const gallery = {
	label: "Galeria",
	title: "My photo gallery",
	description: `A photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: "/images/gallery/img-01.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-02.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-03.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-04.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-05.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-06.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-07.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-08.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-09.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-10.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-11.jpg",
			alt: "image",
			orientation: "vertical",
		},
		{
			src: "/images/gallery/img-12.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-13.jpg",
			alt: "image",
			orientation: "horizontal",
		},
		{
			src: "/images/gallery/img-14.jpg",
			alt: "image",
			orientation: "horizontal",
		},
	],
};

export { person, social, newsletter, home, about, blog, work, gallery };
