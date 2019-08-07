var coffee = [
	{
		name: 'Arabica',
		place: '巴西',
		price: '$350',
		content:'咖啡廣告裡常常強調他們使用百分之百的阿拉比卡咖啡。沒錯，單用價錢來看的話，阿拉比卡的確比較高級，阿拉比卡較容易受害蟲侵害，也容易受氣候影響，一般種植在較高海拔的地方，結的果實較少也較慢。果實為橢圓形。'
	},
	{
		name: 'Robusta',
		place: '印度',
		price: '$226',
		content:'相較之下，咖啡因較高（1.6-2.4%）、脂肪和糖分含量較低的羅布斯塔的味道較苦也較強烈，有人甚至不客氣地說有橡膠味。羅布斯塔的綠原酸含量較高（7-10%），不易受害蟲和氣候影響，一般種植海拔較低，結的果實多且速度很快。果實為圓型。'
	},
]

for(var i = 0; i < coffee.length; i++){
	onInIt(coffee[i]);
}

function onInIt(coffee) {
	$('#'+coffee.name).html(coffee.name);
	$('#'+coffee.name+'-content').html(coffee.content);
	$('#'+coffee.name+'-place').html(coffee.place);
	$('#'+coffee.name+'-price').html(coffee.price);
}