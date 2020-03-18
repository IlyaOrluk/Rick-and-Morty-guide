<script>

</script>

<style>
	nav {
		position: relative;
		border-bottom: 1px solid rgba(233, 30, 99, 0.33);
		font-weight: 300;
		padding: 0 1em;
		background: #000000bd;
		height: 80px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	img {
		width: 250px;
		height: auto;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	}
</style>

<nav>
    <img src='https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png' alt='img'>
	<ul>
		<li><a href='.'>HOME</a></li>
		<li><a href='character?page=1'>CHARACTERS</a></li>
		<li><a href='episode?page=1'>EPISODES</a></li>
		<li><a href='location?page=1'>LOCATIONS</a></li>
		<li><a href='about'>ABOUT</a></li>
	</ul>
</nav>
