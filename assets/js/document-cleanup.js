(() => {
  const content = document.querySelector('.document-content');
  if (!content) return;

  [...content.querySelectorAll('p')].forEach((paragraph) => {
    const text = paragraph.textContent.replace(/[·|]/g, '').trim();
    const hasMeaningfulElement = paragraph.querySelector(
      'img, picture, figure, video, iframe, svg, canvas, pre, code, table, a, button'
    );
    if (!text && !hasMeaningfulElement) paragraph.remove();
  });
})();
