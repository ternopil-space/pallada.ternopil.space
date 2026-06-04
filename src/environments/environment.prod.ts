export interface AppLanguage {
	code: string;
	name: string;
	nativeName: string;
	flagSrc: string;
	htmlLang: string;
	population: number;
}

export const environment: {
	apiUrl: string;
	companyId: string;
	appVersion: string;
	production: boolean;
	defaultLanguage: string;
	languages: AppLanguage[];
} = {
	apiUrl: 'https://it.webart.work',
	companyId: 'pallada',
	appVersion: '1.0.0',
	production: true,
	defaultLanguage: 'ua',
	languages: [
		{
			code: 'ua',
			name: 'Ukrainian',
			nativeName: 'Українська',
			flagSrc: 'flags/ukraine.svg',
			htmlLang: 'uk',
			population: 35,
		},
		{
			code: 'en',
			name: 'English',
			nativeName: 'English',
			flagSrc: 'flags/united-kingdom.svg',
			htmlLang: 'en',
			population: 280,
		},
	],
};
