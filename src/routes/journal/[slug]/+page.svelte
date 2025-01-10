<script>
	const { data } = $props();
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<p>{data.content}</p>
</article>
