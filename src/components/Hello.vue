<script>
	import pdf from 'vue-pdf'

	export default {
		components: {
			pdf: pdf
		},
		data () {
			return {
				keimeno: './static/ta-pathi.pdf',
				kommati: './static/the-pathi.mp3',
				page: 1,
				numPages: 0
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

<template>
	<div class="hello">
		<el-row>
			<el-col :xs="24" :sm="6" :md="6" :lg="6">
				<h1 style="margin-bottom: 15px;">Μεγάλη Δευτέρα</h1>
				<el-menu default-active="2" class="el-menu-vertical-demo">
					<el-menu-item index="1" @click="kommati='./static/allilouia-argon.mp3'; keimeno='./static/allilouia-argon.pdf'">Αλληλούια αργόν</el-menu-item>
					<el-menu-item index="2" @click="kommati='./static/ta-pathi.mp3'; keimeno='./static/ta-pathi.pdf'">Καθίσματα</el-menu-item>
					<el-menu-item index="3" @click="">Κανόνες</el-menu-item>
					<el-menu-item index="4" @click="">Μεσώδια Καθίσματα</el-menu-item>
					<el-menu-item index="5" @click="">Καταβασίες</el-menu-item>
					<el-menu-item index="6" @click="">Τιμιωτέρα</el-menu-item>
					<el-menu-item index="7" @click="">Θ' Ωδή</el-menu-item>
					<el-menu-item index="8" @click="">Εξαποστειλάρια</el-menu-item>
					<el-menu-item index="9" @click="">Πάσα πνοή</el-menu-item>
					<el-menu-item index="10">Στιχηρά αίνων</el-menu-item>
					<el-menu-item index="11">Δοξαστικό</el-menu-item>
					<el-menu-item index="12">Δοξολογία</el-menu-item>
					<el-menu-item index="13">Απολυτικίον</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :xs="24" :sm="18" :md="18" :lg="18">
				<el-row>
				  	<el-input-number v-model="page" :min="1" :max="numPages" class="num-pages"></el-input-number>
					<div class="pdf-container">
						<pdf :src="keimeno" class="my-pdf" :page="page" @numPages="numPages = $event"></pdf>
					</div>
				</el-row>
				<div class="my-audio">
					<audio class="mejs__player" :src="kommati" style="max-width:100%;"></audio>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

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

.num-pages {
	z-index: 5;
}

.pdf-container {
	display: flex;
	justify-content: center;
	z-index: 0;
}
	.my-pdf {
		width: 75vw;
		height: 75vh;
		margin-top: -100px;
	}
</style>
