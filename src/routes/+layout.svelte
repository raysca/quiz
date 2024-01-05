<script>
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { afterUpdate } from 'svelte';
	import Footer from '$lib/components/footer.svelte';
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import '../app.css';

	afterUpdate(() => {

		if(process.env.NODE_ENV === 'development') return;

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
		const analytics = getAnalytics(app);
	});
</script>

<svelte:head>
	<title>Revis3 - Test your technical knowledge</title>
	<meta
		name="description"
		content="Revis3 is a multiple choice quiz project that helps to test your knowledge before technical interviews."
	/>
	<meta name="keywords" content="Revis3, technical interview, technical multiple choice quiz" />
</svelte:head>

<div class="navbar bg-neutral text-neutral-content">
	<a class="btn btn-ghost text-xl" href={PUBLIC_BASE_PATH}>Revis3</a>
</div>

<div class="min-h-screen">
	<slot />
</div>

<Footer />
