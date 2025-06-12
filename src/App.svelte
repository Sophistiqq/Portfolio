<script lang="ts">
import Router from "svelte-spa-router";
import Home from "./routes/Home.svelte";
import Profile from "./routes/Profile.svelte";
const routes = {
	"/": Home,
	"/profile": Profile,
};
</script>

<Router {routes} />
