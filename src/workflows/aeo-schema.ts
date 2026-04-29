import type { AeoSchemaInput, AeoSchemaResult, FAQPageSchema } from '../lib/workflows/types.js';
import { PAGE_REGISTRY } from '../lib/workflows/pages.js';
import { parseSvelteFaq } from './steps/parse-svelte-faq.js';

async function writeSchemaFile(slug: string, schema: FAQPageSchema): Promise<void> {
	'use step';
	const { mkdir, writeFile } = await import('fs/promises');
	const { resolve } = await import('path');
	const schemaDir = resolve('static/schema');
	await mkdir(schemaDir, { recursive: true });
	await writeFile(resolve(`static/schema/${slug}-faq.json`), JSON.stringify(schema, null, 2), 'utf-8');
}

export async function aeoSchemaWorkflow(input: AeoSchemaInput = {}): Promise<AeoSchemaResult> {
	'use workflow';
	const generatedAt = new Date().toISOString();
	const generated: string[] = [];
	const skipped: string[] = [];
	const errors: Array<{ slug: string; reason: string }> = [];

	const targets = PAGE_REGISTRY.filter((p) => {
		if (!p.hasFaq) return false;
		if (input.pages && input.pages.length > 0) {
			return input.pages.includes(p.path) || input.pages.includes(p.slug);
		}
		return true;
	});

	for (const page of targets) {
		try {
			const items = await parseSvelteFaq(page.slug);

			if (items.length < 3) {
				skipped.push(page.slug);
				continue;
			}

			const schema: FAQPageSchema = {
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: items.map((item) => ({
					'@type': 'Question',
					name: item.question,
					acceptedAnswer: { '@type': 'Answer', text: item.answer }
				}))
			};

			await writeSchemaFile(page.slug, schema);
			generated.push(page.slug);
		} catch (err) {
			errors.push({
				slug: page.slug,
				reason: err instanceof Error ? err.message : String(err)
			});
		}
	}

	return { generatedAt, version: '1.0', generated, skipped, errors };
}
