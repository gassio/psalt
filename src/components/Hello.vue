<template>
	<div class="hello">
		<el-row>
			<el-col :xs="24" :sm="6" :md="6" :lg="6">
				<h1 style="margin-bottom: 15px;">Μεγάλη Δευτέρα</h1>
				<el-menu default-active="2" class="el-menu-vertical-demo">
					<el-menu-item index="1">Θεός Κύριος</el-menu-item>
					<el-menu-item index="2">Καθίσματα</el-menu-item>
					<el-menu-item index="3">Κανόνες</el-menu-item>
					<el-menu-item index="4">Μεσώδια Καθίσματα</el-menu-item>
					<el-menu-item index="5">Καταβασίες</el-menu-item>
					<el-menu-item index="6">Τιμιωτέρα</el-menu-item>
					<el-menu-item index="7">Θ' Ωδή</el-menu-item>
					<el-menu-item index="8">Εξαποστειλάρια</el-menu-item>
					<el-menu-item index="9">Πάσα πνοή</el-menu-item>
					<el-menu-item index="10">Στιχηρά αίνων</el-menu-item>
					<el-menu-item index="11">Δοξαστικό</el-menu-item>
					<el-menu-item index="12">Δοξολογία</el-menu-item>
					<el-menu-item index="13">Απολυτικίον</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :xs="24" :sm="18" :md="18" :lg="18">
				<el-row>
					<img src="../assets/kommatia/1.jpg" height="800">
				</el-row>
				<div class="my-audio">
					<audio class="mejs__player" src="kommati" style="max-width:100%;"></audio>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data () {
		return {
			keimeno: 'https://cdn.mozilla.net/pdfjs/helloworld.pdf',
			kommati: '../assets/kommatia/the-pathi.mp3'
		}
	},
	mounted() {


		$(document).ready(function(){
			// $('body').css('background-color', 'red')
			$('video, audio').mediaelementplayer();
		});
	},
	methods: {
    }
}
</script>

<style>

	.el-menu-item {
		height: 35px;
		padding-left: 10px;
		line-height: 35px;
		text-align: left;
	}

	.my-audio {
		position: fixed;
		bottom: 0;
	}
	.mejs__container {
		width: 75vw !important;
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
