<template>
	<main class="main-container">
		<header>
			<figure>
				<img src="~./" alt="">
			</figure>
		</header>
		<section class="section-container -">
			<article class="box">
				<h2>Sobre o CAPIWARA</h2>
				<p>Nascemos e vivemos pela paixão de solucionar problemas. Confiamos que em cada dificuldade, há uma possibilidade de construir um ponto inovador e garantístico.</p>
				<p>O time Capiwara visa oferecer soluções estratégicas e personalizadas para empresas e escritórios, por meio de tecnologias disruptivas e operações outbounding.</p>
			</article>
		</section>
	</main>
</template>

<script>
	import SectionContainer from './components/SectionContainer'

	export default {
		components: { SectionContainer }
	}
</script>

<style src="./style/reset.css"></style>

<style>
	:root {
		--section-padding: 1rem;
	}

	@media screen and (min-width: 768px) {
		:root {
			--section-padding: 2rem;
		}
	}

	.section-container {
		box-sizing: border-box;
		padding: var(--section-padding);
	}

	.section-container > .title {
		margin: 0;
	}
</style>

