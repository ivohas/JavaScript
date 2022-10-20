function getArticleGenerator(articles) {
	let div = document.getElementById('content');
	let myArticles = Array.from(articles);
	return () => {
		if (myArticles.length <= 0) {
			return;
		}
		let article = document.createElement('article');
		currArtcl = myArticles.shift();
		article.textContent = currArtcl;
		div.appendChild(article);
	};
}
