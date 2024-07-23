// BlogCard
export interface ThemenCard {
	tags: any;
	title: string;
	smallDescription: string;
	currentSlug: string;
	titleImage: any;
}

// BlogPost
export interface ThemenPost {
	currentSlug: string;
	title: string;
	date: string;
	titleImage: any;
	content: any;
	tags: string[];
	authors: {
		name: string;
		specialty: string;
	}[];
}
