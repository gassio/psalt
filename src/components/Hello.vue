<template>
	<div class="hello">
		<h1>Hello</h1>

		<div class="my-audio">
			<audio class="mejs__player" :src="kommati" style="max-width:100%;"></audio>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			kommati: 'http://www.orangefreesounds.com/wp-content/uploads/2017/09/Munsters-theme-song.mp3?_=1'
		}
	},
	mounted() {

		$(document).ready(function(){
			// $('body').css('background-color', 'red')
			$('video, audio').mediaelementplayer();
		});
	}
}
</script>

<style>

.my-audio {
	position: fixed;
	bottom: 0;
	width: 100%;
	left: 0;
}
.mejs__controls {
		height: 100% !important;
		}
		.mejs__time-rail {
				height: 100%;
				padding: 0 !important;
		}
				.mejs__time-total {
						width: 100%;
						height: 100%;
						margin: 0;
				}
						.mejs__time-loaded, .mejs__time-buffering, .mejs__time-current, .mejs__time-hovered {
								height: 100%;
						}
</style>
