interface Project {
	name: string;
	description: string;
	photo: string;
	link: string;
}

export default interface Category {
	category: string;
	projects: Project[];
}