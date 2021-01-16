<template>
    <section class="page">
        <div class="hero hero1">
            <div class="hero-body top-header">
                <h1 class="title is-1 top-header">
                    Craftbench
                </h1>
                    <!-- <div class="left-image">
                        <img src="@/assets/images/add-files.svg">
                    </div> -->
                <div class="top-text">
                    juiciest crafting benches in the continental united states
                </div>
                
            </div>
        </div>

        <div class="hero hero2">
            <div class="hero-body">
                <h1 class="title is-2"> 2nd heroo!</h1>
                <div class="paragraph2">
                    <p> WE are the besttttt We ar ebest etughsdiughl ufkgh kudjthglr</p>
                </div> 
            </div>
        </div>

        <div class="hero hero3">
            <div class="hero-body">
                <h1 class="title is-2">3nd hero!</h1>
                <div class="paragraph3">
                    <p> WE are the besttttt</p>
                </div> 
            </div>
        </div>

    <div class="has-text-centered cards">
			<div class="columns benefit-cards">
				<div class="column">
					<div>
						<h2 class="subtitle">Personalized</h2>
						<h1 class="title">Recommendations</h1>
						<br />
						<p>Discover shifts based on your interests.</p>
						<img
							class="cover-image"
						/>
					</div>
				</div>

				<div class="column">
					<div>
						<h2 class="subtitle">Find shifts</h2>
						<h1 class="title">Closest to you</h1>
						<br />
						<p>Find the perfect shifts in your city.</p>
						<img
							class="cover-image"
						/>
					</div>
				</div>

				<div class="column">
					<div>
						<h2 class="subtitle">Interactive</h2>
						<h1 class="title">Leaderboard</h1>
						<br />
						<p>Your standing in your city and state.</p>
						<img
							class="cover-image"
						/>
					</div>
				</div>
			</div>

			<div class="columns benefit-cards">
				<div class="column">
					<div>
						<h2 class="subtitle">Detailed</h2>
						<h1 class="title">Statistics</h1>
						<br />
						<p>Receive detailed statistics on past shifts.</p>
						<img
							class="cover-image"
						/>
					</div>
				</div>

				<div class="column">
					<div>
						<h2 class="subtitle">Unlock</h2>
						<h1 class="title">Milestones</h1>
						<br />
						<p>
							Unlock milestones as you progress and get more
							hours.
						</p>
						<img
							class="cover-image"
						/>
					</div>
				</div>

				<div class="column">
					<div>
						<h2 class="subtitle">Detailed</h2>
						<h1 class="title">Calendar</h1>
						<br />
						<p class>Track your upcoming shifts in a calendar.</p>
						<img
							class="cover-image"
						/>
					</div>
				</div>
			</div>
		</div>
        
    </section>
</template>

<style scoped>
.page {
    background-color: var(--light);
}

.top-header {
    text-align: center; 
}

.hero1 {
    background-color: var(--primary);
    height: 30rem;
    text-align: left;
}

.hero2 {
    background-color: var(--light);
    height: 20rem;
    text-align: right;
}

.hero3 {
    background-color: var(--primary);
    height: 20rem;
}

.paragraph2 {
    text-align: left;
}

.paragraph3 {
    text-align: right;
}

.top-header {
    text-align: center;
}

.top-text {
    margin-top: 5rem;
}

.cards {
    background-color: var(--dark);
    color: white;
    padding: 2rem;
}

.benefit-cards * {
    color: var(--light) !important;
}

/* .left-image {
  bottom: 15%;
  position: absolute;
  -webkit-animation: linear infinite;
  -webkit-animation-name: run;
  -webkit-animation-duration: 5s;
}
@keyframes run {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
  }
} */

</style>