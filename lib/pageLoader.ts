import fs from 'fs';
import path from 'path';

const sourceDir = path.join(process.cwd(), '..', 'simply-static-1-1765184916 (2)');

export function getPageContent(pageName: string): string {
  try {
    const filePath = path.join(sourceDir, pageName, 'index.html');
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract body content between <body> and </body> tags
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/);
    return bodyMatch ? bodyMatch[1] : content;
  } catch (error) {
    console.error(`Error reading page ${pageName}:`, error);
    return '';
  }
}
