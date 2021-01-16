<template>
    <section class="page">
        <div class="hero hero1">
			<div class = "video">
				<iframe 
					src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1">
				</iframe>
				<!-- Add a placeholder for the Twitch embed -->
<div id="twitch-embed"></div>

<!-- Load the Twitch embed script -->
<script src="https://player.twitch.tv/js/embed/v1.js"></script>

<!-- Create a Twitch.Player object. This will render within the placeholder div -->
<script type="text/javascript">
  new Twitch.Player("twitch-embed", {
    channel: "andydachicken"
  });
</script>
			</div>
				
            <div class="hero-body top-header columns">
                <div class="column has-text-right" style="display: flex; flex-direction: column; justify-content: center;">
                    <h1 class="title is-1">
                        Craftbench
                    </h1>
                    <div class="subtitle">
                        The best project management platform.
                    </div>
                </div>
                <div class="left-image column">
                    <img src="@/assets/images/add-files.svg">
                </div>
                
                
            </div>
        </div>

        <div class="hero hero2">
            <div class="hero-body">
                <h1 class="title is-2"> Gamified Experience</h1>
                <div class="paragraph2">
                    <p> Craftbench turns working on projects into a fun motivating game.</p>
                </div> 
            </div>
        </div>

        <div class="hero hero3">
            <div class="hero-body">
                <h1 class="title is-2">Another Feature</h1>
                <div class="paragraph3">
                    <p> Feature description</p>
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

.cards {
    background-color: var(--dark);
    color: white;
    padding: 2rem;
}

.benefit-cards * {
    color: var(--light) !important;
}

 .left-image img {
  animation: image-in 1s linear;
  height: 20rem;
 }

@keyframes image-in {
    from {
        opacity: 0;
        transform: translateX(200%);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

.video {
	background-size: cover;
}

</style>