<script>
	import Gallery from '$lib/components/gallery/Gallery.svelte';
	import GallerySection from '$lib/components/gallery/GallerySection.svelte';
</script>

<div id="photo-galleries">
	<GallerySection title="Kumoricon 2022 Photobooth">
		<Gallery title="Day 1" link="/kumoricon-2022-photobooth-day-1">
			<img
				slot="image"
				src="https://kumoricon.org/images/galleries/kumoricon2022-photobooth-day1/thumb-kumo%202022%20friday-031%20copy@2x.jpg"
				style="width: auto; height: 150px"
				alt="2022 Day 1 photobooth"
			/>
		</Gallery>

		<Gallery title="Day 2" link="/kumoricon-2022-photobooth-day-2">
			<img
				slot="image"
				src="https://kumoricon.org/images/galleries/kumoricon2022-photobooth-day2/thumb-kumo%202022%20saturday-1116%20copy@2x.jpg"
				style="width: auto; height: 150px"
				alt="2022 Day 2 photobooth"
			/>
		</Gallery>

		<Gallery title="Day 3" link="/kumoricon-2022-photobooth-day-3">
			<img
				slot="image"
				src="https://kumoricon.org/images/galleries/kumoricon2022-photobooth-day3/thumb-kumo%202022%20sunday-3078%20copy@2x.jpg"
				style="width: auto; height: 150px"
				alt="2022 Day 3 photobooth"
			/>
		</Gallery>
	</GallerySection>

	<GallerySection title="Kumoricon Lite - June 27, 2015">
		<Gallery link="/kumoricon-lite-2015-photos">
			<img
				slot="image"
				src="https://kumoricon.org/images/galleries/kumoriconlite2015/thumb-IMG_4866@3x.jpg"
				style="width: 225px; height: 150px"
				alt="Kumoricon Lite 2015"
			/>
		</Gallery>
	</GallerySection>
</div>
