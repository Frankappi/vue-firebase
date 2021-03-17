<template>
	<div class="home">
		<div class="container">
			<div class="col-md-12 mx-auto">
				<div class="card bg-dark text-white">
					<div class="card-body">
						<h2>Home</h2>
						<p>
							this is the homepage
						</p>
					</div>				
				</div>
			</div>							
		</div>		
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Home",
	computed: {
		...mapGetters({
			user: "user"
		})
	}
}
</script>

<style scoped>
.home {
	background-color: #00A170;
	min-height: 100vh;
	width: 100%;
	padding: 100px 15px 30px 15px;
}
</style>