export type PageEntry = {
	slug: string;
	path: string;
	hasFaq: boolean;
	tier: 'hub' | 'guide' | 'utility';
};

export type FAQItem = { question: string; answer: string };

export type FAQPageSchema = {
	'@context': 'https://schema.org';
	'@type': 'FAQPage';
	mainEntity: Array<{
		'@type': 'Question';
		name: string;
		acceptedAnswer: { '@type': 'Answer'; text: string };
	}>;
};

export type AeoSchemaInput = { pages?: string[]; force?: boolean };

export type AeoSchemaResult = {
	generatedAt: string;
	version: '1.0';
	generated: string[];
	skipped: string[];
	errors: Array<{ slug: string; reason: string }>;
};

export type SeoIssue = {
	rule:
		| 'missing-title'
		| 'missing-description'
		| 'missing-canonical'
		| 'missing-og'
		| 'missing-jsonld'
		| 'multiple-h1'
		| 'short-title';
	severity: 'error' | 'warn';
	detail?: string;
};

export type SeoPageReport = {
	path: string;
	title?: string;
	description?: string;
	canonical?: string;
	h1Count: number;
	jsonLdCount: number;
	issues: SeoIssue[];
};

export type SeoAuditResult = {
	generatedAt: string;
	version: '1.0';
	baseUrl: string;
	commit?: string;
	pages: SeoPageReport[];
	summary: {
		totalPages: number;
		totalIssues: number;
		errorCount: number;
		warnCount: number;
	};
};

export type EEATScore = {
	path: string;
	author: number;
	date: number;
	citations: number;
	structuredData: number;
	total: number;
};

export type GeoResult = {
	generatedAt: string;
	version: '1.0';
	commit?: string;
	scores: EEATScore[];
	avgScore: number;
	recommendations: string[];
	llmsTxtProposed: string;
};
