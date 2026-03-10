<script>
	import { Languages } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Datenschutzerklärung</title>

	<meta name="description" content="Lesen Sie die Datenschutzerklärung von plebis.online, um zu erfahren, wie personenbezogene Daten verarbeitet werden, wie Local/Session Storage genutzt wird und wie die Seiten über GitHub Pages gehostet werden." />

	<meta property="og:title" content="Datenschutzerklärung" />
	<meta property="og:description" content="Lesen Sie die Datenschutzerklärung von plebis.online, um zu erfahren, wie personenbezogene Daten verarbeitet werden, wie Local/Session Storage genutzt wird und wie die Seiten über GitHub Pages gehostet werden." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://plebis.online/datenschutz" />
	<meta property="og:image" content="https://plebis.online/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="content">
	<div class="mx-auto flex max-w-2xl space-y-6 pt-3 pb-0">
		<a
			data-sveltekit-replacestate
			href="/privacy-policy"
			class="btn preset-tonal clip-octagon-relative text-surface-950-50 h-12 gap-3 rounded-none"
		>
			<Languages size={18} />
			<span>English Version</span>
		</a>
	</div>

	<div class="mx-auto flex max-w-2xl flex-col space-y-6 pt-0 pb-4">
		<div class="space-y-2">
			<h3 class="h3">Datenschutzerklärung</h3>

			<p>
				Diese Datenschutzerklärung gilt für alle öffentlich zugänglichen Websites unter <strong
					>plebis.online</strong
				>
				Sie gilt <strong>nicht</strong> für Inhalte oder Datenverarbeitungen auf externen Websites Dritter
				(z.&nbsp;B. GitHub-Repositories oder Social-Media-Profile), auf die diese Seite lediglich verlinkt.
			</p>
		</div>

		<div class="space-y-2">
			<h4 class="h4">1. Personenbezogene Daten</h4>
			<p>
				Auf den genannten Websites werden <strong>keine personenbezogenen Daten</strong>
				von uns erhoben, gespeichert oder verarbeitet.
			</p>
		</div>

		<div class="space-y-2">
			<h4 class="h4">2. Lokale Speicher im Browser</h4>
			<p>
				Es kann sein, dass diese Websites <strong>Local Storage</strong> und/oder
				<strong>Session Storage</strong> Ihres Browsers nutzen. Dabei werden ausschließlich
				oberflächenbezogene Einstellungen (z.&nbsp;B. Ansichts- oder Zustandsinformationen)
				gespeichert. Diese Informationen <strong>verlassen Ihren Browser nicht</strong>
				und werden <strong>weder an uns noch an Dritte übertragen</strong>. Die Speicherung erfolgt
				auf Grundlage von §&nbsp;25 TDDDG und ist nur insoweit zulässig, wie sie
				<em>unbedingt erforderlich</em> ist, um die von Ihnen ausdrücklich gewünschte Nutzung der Website
				zu ermöglichen.
			</p>
		</div>

		<div class="space-y-2">
			<h4 class="h4">3. Hosting</h4>
			<p>
				Die Bereitstellung der Websites erfolgt über
				<a href="https://pages.github.com/" class="anchor" target="_blank" rel="noopener"
					>GitHub Pages</a
				>. Beim Aufruf der Seiten verarbeitet GitHub technisch erforderliche Daten wie insbesondere
				Ihre
				<strong>IP-Adresse</strong>, um die Auslieferung der Inhalte und den sicheren Betrieb zu
				gewährleisten. Auf diese Verarbeitung haben wir keinen Einfluss. Weitere Informationen
				finden Sie in der
				<a
					href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
					class="anchor"
					target="_blank"
					rel="noopener">GitHub Privacy Statement</a
				>.
			</p>
		</div>

		<p><small>Zuletzt aktualisiert: March 8, 2026</small></p>
	</div>
</div>
