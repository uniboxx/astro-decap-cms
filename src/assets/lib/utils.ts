export function createExcerpt(post: any) {
  const firstParagraph = post.body.match(/^\w+[\w\W]+/m)[0];
  console.log(firstParagraph);
  const first30Words = firstParagraph
    .replace(/[^\w\s\.,!?]+/gm, '')
    .split(/\s+/)
    .slice(0, 30)
    .join(' ');
  console.log(first30Words);
  const excerpt = first30Words.replace(/\.+$/, '').trim() + '...';
  console.log(excerpt);
  return excerpt;
}

export function readingTime(article: string) {
  const wpm = 225;
  const words = article.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}
