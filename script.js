document.addEventListener('DOMContentLoaded', () => {
	console.log('Wget-连远 页面已加载');
	const codes = document.querySelectorAll('code');
	codes.forEach(code => {
		code.addEventListener('click', () => {
			navigator.clipboard.writeText(code.textContent)
				.then(() => {
					console.log('命令已复制');
				})
				.catch(err => {
					console.error('复制失败:', err);
				});
		});
	});
});

