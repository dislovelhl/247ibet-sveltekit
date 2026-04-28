const MAX_REPORTS = 10;

type FileEntry = { name: string; mtime: number };

export async function writeReport(
	dir: 'seo' | 'geo',
	filename: string,
	payload: unknown
): Promise<string> {
	'use step';
	const { mkdir, readdir, stat, unlink, writeFile } = await import('fs/promises');
	const { join, resolve } = await import('path');
	const reportDir = resolve(`static/reports/${dir}`);
	await mkdir(reportDir, { recursive: true });

	const filePath = join(reportDir, filename);
	await writeFile(filePath, JSON.stringify(payload, null, 2), 'utf-8');

	try {
		const entries = await readdir(reportDir);
		const jsonFiles = entries.filter((f: string) => f.endsWith('.json'));

		if (jsonFiles.length > MAX_REPORTS) {
			const withMtime: FileEntry[] = await Promise.all(
				jsonFiles.map(async (f: string): Promise<FileEntry> => {
					const s = await stat(join(reportDir, f));
					return { name: f, mtime: s.mtimeMs };
				})
			);
			withMtime.sort((a: FileEntry, b: FileEntry) => b.mtime - a.mtime);
			const toDelete = withMtime.slice(MAX_REPORTS);
			await Promise.all(toDelete.map((f: FileEntry) => unlink(join(reportDir, f.name))));
		}
	} catch {
		// rotation failure is non-fatal
	}

	return filePath;
}
