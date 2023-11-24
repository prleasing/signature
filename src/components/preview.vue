<script setup lang="ts">
import {ref} from 'vue';

const $content = ref<HTMLElement>();

function copy() {
	const selection = window.getSelection()!;
	const range = document.createRange();

	range.selectNodeContents($content.value!);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
}

async function imageUrlToBase64(url: string): Promise<string>{
	const data = await fetch(url);
	const blob = await data.blob();
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = () => {
			const base64data = reader.result;
			resolve(base64data as string);
		};
		reader.onerror = reject;
	});
}

// import one  from ;
const baners = [
	{link: 'https://pr-liz.ru/investors', image: await imageUrlToBase64((await import('../assets/Frame 1558.png')).default)},
	{link: 'https://pr-liz.ru/offer#listing', image: await imageUrlToBase64((await import('../assets/Frame 1556.png')).default)},
	{link: 'https://pr-liz.ru/offer#listing', image: await imageUrlToBase64((await import('../assets/Frame 1560.png')).default)},
];

const mail = await imageUrlToBase64((await import('../assets/почта.png')).default);
</script>

<template>
	<suspense>
		<div >
			<div ref="$content" :style="{background: '#fff', display: 'inline-block', padding: '6.83px', borderRadius: '17.92px'}">
				<table :style="{borderSpacing: 0, borderCollapse: 'collapse'}">
					<tr>
						<td v-for="(item,index) in baners" :style="{padding: 0}">
							<a :style="{display: 'block', float: 'left',marginLeft: (index > 0) ? '3px' : '0px'
									}" :href="item.link">
								<img :style="{display: 'block', borderRadius: '10.24px',  height: '68px' }" :src="item.image"
										 alt="">
							</a>
						</td>
					</tr>
					<tr>
						<td colspan="3" :style="{paddingTop: '3px'}">
							<img :style="{display: 'block', borderRadius: '13.65px', height: '75.09px' }" :src="mail" alt="">
						</td>
					</tr>
				</table>
			</div>
			<!--			<div ref="$content" :style="{background: '#fff', display: 'inline-block', padding: '16px', borderRadius: '42px'}">-->
			<!--				<table :style="{borderSpacing: 0, borderCollapse: 'collapse'}">-->
			<!--					<tr>-->
			<!--						<td v-for="(item,index) in baners" :style="{padding: 0}">-->
			<!--							<a :style="{display: 'block', float: 'left',-->

			<!--				marginLeft: (index > 0) ? '7px' : '0px'-->
			<!--				}" href="https://pr-liz.ru/investors">-->
			<!--								<img :style="{display: 'block', borderRadius: '24px', height: '160px' }" :src="item.image"-->
			<!--										 alt="">-->
			<!--							</a>-->
			<!--						</td>-->
			<!--					</tr>-->
			<!--				</table>-->
			<!--				<div :style="{display: 'inline-block', background: '#F8F8FA', padding: '8px', borderRadius: '32px', marginTop: '7px', width: '1114px'}">-->
			<!--					<table :style="{borderSpacing: 0}">-->
			<!--						<tr>-->
			<!--							<td :style="{border: 0, padding: 0, width: '288px'}">-->
			<!--								<div-->
			<!--										:style="{ width: 278 + 'px', height :'160px',background: '#fff', borderRadius: '24px', border: '1px solid #EFEFF3', boxShadow: '24px 0px 48px -24px rgba(0, 0, 0, 0.25)'}">-->
			<!--									asdd-->
			<!--								</div>-->
			<!--							</td>-->
			<!--							<td :style="{border: 0, padding: '0px', paddingLeft: '8px', width: 278 + 'px'}">-->
			<!--								<div-->
			<!--										:style="{ width: 278 + 'px', marginLeft: '0px', height :'160px',background: '#fff', borderRadius: '24px', border: '1px solid #EFEFF3', boxShadow: '24px 0px 48px -24px rgba(0, 0, 0, 0.25)'}">-->
			<!--									asdsad-->
			<!--								</div>-->
			<!--							</td>-->
			<!--							<td :style="{border: 0, padding: '0px', paddingLeft: '8px', width: 177 + 'px'}">-->
			<!--								<div-->
			<!--										:style="{width: 177 + 'px', marginLeft: '0px', height :'160px',background: '#fff', borderRadius: '24px', border: '1px solid #EFEFF3', boxShadow: '24px 0px 48px -24px rgba(0, 0, 0, 0.25)'}">-->
			<!--									asdsa-->
			<!--								</div>-->
			<!--							</td>-->
			<!--							<td :style="{border: 0, padding: '0px', paddingLeft: '8px', width: 347 + 'px'}">-->
			<!--								<div-->
			<!--										:style="{width: 347 + 'px',  marginLeft: '0px', height :'160px',background: '#fff', borderRadius: '24px', border: '1px solid #EFEFF3', boxShadow: '24px 0px 48px -24px rgba(0, 0, 0, 0.25)'}">-->
			<!--									asdsa-->
			<!--								</div>-->
			<!--							</td>-->
			<!--						</tr>-->
			<!--					</table>-->
			<!--				</div>-->
			<!--			</div>-->
			<div>
				<button @click="copy">copy</button>
			</div>
		</div>
	</suspense>
</template>
