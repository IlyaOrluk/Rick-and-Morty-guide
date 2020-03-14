<script>
  	import { Router, Link, Route } from 'svelte-routing'
	import ItemList from './ItemList.svelte'
	import About from './About.svelte'
</script>


<main class='container'>
	<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/all">ALL</Link>
  </nav>
  <div>
    <Route path="/"><About /></Route>
	<Route path="/all"><ItemList /></Route>
  </div>
</Router>
</main>

<style>
:global(.container) {
	margin: 0 auto;
    max-width: 75%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
