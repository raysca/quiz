<script>
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { afterUpdate } from 'svelte';
	import Footer from '$lib/components/footer.svelte';
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import '../app.css';

	afterUpdate(() => {
		if (process.env.NODE_ENV === 'development') return;

		const firebaseConfig = {
			apiKey: 'AIzaSyAFUq4ma1IjRMXoBeTTOj_x0XF6TMvN7kM',
			authDomain: 'rayca-94e78.firebaseapp.com',
			databaseURL: 'https://rayca-94e78.firebaseio.com',
			projectId: 'rayca-94e78',
			storageBucket: 'rayca-94e78.appspot.com',
			messagingSenderId: '6812328884',
			appId: '1:6812328884:web:37e18c3f6ea2bb4f1ec8e1'
		};

		const app = initializeApp(firebaseConfig);
		getAnalytics(app);
	});
</script>

<svelte:head>
	<title>Revis3 - Test your technical knowledge</title>
	<meta name="description" content="Open source technical quiz platform" />
	<meta name="keywords" content="Revis3, technical interview quiz, technical multiple choice quiz" />
	<meta name="application-name" content="Revis3" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
</svelte:head>

<div class="navbar bg-accent">
	<a class="btn btn-ghost text-xl" href={PUBLIC_BASE_PATH}>Revis3</a>
</div>

<div class="min-h-screen">
	<slot />
</div>

<Footer />
