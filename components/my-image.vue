<template>
	<image :mode="mode" :style="{width: width + 'rpx',height: height + 'rpx',borderRadius: radius + 'rpx' }" :src="src"></image>
	<!-- <image mode="aspectFill" :style="{width: width + 'rpx',height: height + 'rpx',borderRadius: radius + 'rpx' }" :src="src"></image> -->
</template>

<script>
	/**
	 *  @description  图片/浏览图片
	 *  @src :  图片路径
	 *  @width : 宽度 (rpx)
	 *  @height : 高度 (rpx)
	 */
	export default {
		props: {
			width: {
				type: [Number,String],
				default: 35
			},
			radius: {
				type: [Number,String],
				default: 0
			},
			height: {
				type: [Number,String],
				default: 35
			},
			src: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				default: 'aspectFill'
			}
		},
		data() {
			
		},
		created() {

		}
	}
</script>

<style>

</style>
