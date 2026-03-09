<script>
	import { Languages } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Privacy Policy</title>
	<meta
		name="description"
		content="Read the privacy policy for plebis.online to learn how personal data is handled, local/session storage is used, and how the site is hosted on GitHub Pages."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Privacy Policy" />
	<meta
		property="og:description"
		content="Read the privacy policy for plebis.online to learn how personal data is handled, local/session storage is used, and how the site is hosted on GitHub Pages."
	/>
</svelte:head>

<div class="content">
	<div class="mx-auto flex max-w-2xl pt-3 pb-0">
		<a
			data-sveltekit-replacestate
			href="/datenschutz"
			class="btn preset-tonal clip-octagon-relative text-surface-950-50 h-12 gap-3 rounded-none"
		>
			<Languages size={18} />
			<span>Deutsche Version</span>
		</a>
	</div>

	<div class="mx-auto flex max-w-2xl flex-col space-y-6 pt-0 pb-4">
		<div class="space-y-2">
			<h3 class="h3">Privacy Policy</h3>

			<p>
				This privacy policy applies to all publicly accessible websites under <strong
					>plebis.online</strong
				>
				It does <strong>not</strong> apply to content or data processing on external third-party websites
				(e.g. GitHub repositories or social media profiles) that this site only links to.
			</p>
		</div>

		<div class="space-y-2">
			<h4 class="h4">1. Personal Data</h4>
			<p>
				On the mentioned websites, <strong>no personal data</strong> is collected, stored, or processed
				by me.
			</p>
		</div>

		<div class="space-y-2">
			<h4 class="h4">2. Local Storage in the Browser</h4>
			<p>
				These websites may use your browser's <strong>Local Storage</strong> and/or
				<strong>Session Storage</strong>. Only interface-related settings (e.g. view or state
				information) are stored. This information <strong>never leaves your browser</strong>
				and is <strong>not transmitted to us or to any third party</strong>. Storage takes place on
				the basis of §&nbsp;25 TDDDG and is only permitted insofar as it is
				<em>strictly necessary</em> to enable the use of the website you have expressly requested.
			</p>
		</div>

		<div class="space-y-2">
			<h4 class="h4">3. Hosting</h4>
			<p>
				The websites are provided via
				<a href="https://pages.github.com/" class="anchor" target="_blank" rel="noopener"
					>GitHub Pages</a
				>. When accessing the pages, GitHub processes technically required data such as your
				<strong>IP address</strong> in order to deliver the content and ensure secure operation. We
				have no influence on this processing. For more information, please refer to the
				<a
					href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
					class="anchor"
					target="_blank"
					rel="noopener">GitHub Privacy Statement</a
				>.
			</p>
		</div>

		<p><small>Last updated: March 8, 2026</small></p>
	</div>
</div>
