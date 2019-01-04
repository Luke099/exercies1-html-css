
function loadData(renderAllElement) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', '../data.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			data = JSON.parse(xobj.responseText);
			renderAllElement(data);
		}
	};
	xobj.send(null);
}
document.addEventListener('DOMContentLoaded', function () {
	loadData(function (data) {
		showAllData(data);
		handelShowDetail(data);
		document.getElementById('backToList').addEventListener("click", function (e) {
			showAllData(data);
			handelShowDetail(data);
		}, false);
	})
});
showAllData = (data) => {
	let content = document.getElementById('listFood');
	let elements = '';
	data.listFood.forEach(item => {
		elements += renderElement(item.id, item.img, item.name);
	});
	content.innerHTML = elements;
}

handelShowDetail = (data) => {
	let listElement = document.getElementsByClassName('eventShowDetail');
	for (var i = 0; i < listElement.length; ++i) {
		listElement[i].addEventListener("click", function (e) {
			let detail = '';
			data.listFood.forEach(item => {
				if (item.id === this.id) {
					detail = item;
				}
			});
			let showDetail = renderDetail(detail.name);
			content = document.getElementById('listFood');
			content.innerHTML = showDetail;
		}, false);
	}
}

backToList = () => {
	document.getElementById('backToList').addEventListener("click", function (e) {
		location.reload();
	}, false);
}

renderDetail = (name) => {
	return `<section class="recipe-details-section">
	<div class="container">
		<div class="recipe-meta">
			<div class="racipe-cata">
				<span>Cho Người Chế Biến Lần Đầu</span>
			</div>
			<h2>${name} - món ăn hấp dẫn của người Sài Gòn</h2>
			<div class="recipe-date">Ngày 14 tháng 12 năm 2018</div>
			<div class="rating">
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-5">
				<div class="recipe-filter-warp">
					<div class="filter-top">
						<div class="filter-top-text">
							<p>Chuẩn Bị: 15 phút</p>
							<p>Chế Biến: 30 phút</p>
							<p>Khẩu Phần: 4 Người</p>
						</div>
					</div>
					<!-- recipe filter form -->
					<div class="filter-form-warp">
						<h2>Nguyên Liệu</h2>
						<form class="filter-form">
							<div class="check-warp">
								<input type="checkbox" id="one">
								<label for="one">- 1 gói bánh tráng</label>
							</div>
							<div class="check-warp">
								<input type="checkbox" id="two">
								<label for="two">- Xoài xanh một quả</label>
							</div>
							<div class="check-warp">
								<input type="checkbox" id="three">
								<label for="three">- Hành khô</label>
							</div>
							<div class="check-warp">
								<input type="checkbox" id="four">
								<label for="four">- Một mớ rau răm, quất (tắc)</label>
							</div>
							<div class="check-warp">
								<input type="checkbox" id="five">
								<label for="five">- Lạc (đậu phộng)</label>
							</div>
							<div class="check-warp">
								<input type="checkbox" id="six">
								<label for="six">- Thịt bò khô</label>
							</div>	
							<div class="check-warp">
								<input type="checkbox" id="seven">
								<label for="seven">- Tép hoặc tôm đồng nhỏ</label>
							</div>
							<div class="check-warp">
								<input type="checkbox" id="eight">
								<label for="eight">- Trứng chim cút </label>
							</div>
								<div class="check-warp">
								<input type="checkbox" id="eight">
								<label for="eight">- Gia vị: xì dầu, sa tế, muối ớt </label>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="col-lg-7">
				<ul >
					<li>
						<p> Dùng kéo cắt bánh tráng thành từng miếng nhỏ vừa ăn.</p>
					</li>
					<li>			
						<p> Gọt vỏ xoài xanh, bào nhỏ thành sợi.</p>
					</li>
					<li>					
						<p> Rang lạc, xát vỏ, tách đôi hạt.</p>
					</li>
					<li>						
						<p> Luộc chín trứng cút, để nguội, bóc vỏ.</p>
					</li>
					<li>					
						<p> Xé nhỏ sợi bò khô, để riêng.</p>
					</li>
					<li>						
						<p> Rửa sạch rau răm, thái nhỏ.</p>
					</li>
					<li>							
						<p> Bóc vỏ hành khô, thái lát mỏng. Cho dầu ăn vào chảo đun nóng. Sau đó cho hành vào phi cho thật thơm cho đến khi hành chuyển sang màu vàng thì trút ra một bát, để nguội.</p>
					</li>
					<li>					
						<p>Tép rang khô rồi cho ra bát.</p>
					</li>
					<li>					
						<p>Các bạn cho sợi xoài đã nạo vào bát có sợi bánh tráng, cho sợi bò khô, tép rang khô vào, cho mỡ hành, hành khô trứng cút vào.</p>
					</li>
					<li>					
						<p>Vắt quất, cho 1 thìa xì dầu, 1 thìa muối ớt vào trộn đều cho bánh tráng thấm gia vị.</p>
					</li>
					<li>					
						<p>Sau cùng cho lạc rang và rau răm vào, đảo đều một lần nữa là được.</p>
					</li>
					<li>					
						<p>Lưu ý, ăn liền khi vừa trộn xong, bánh tráng vẫn còn độ giòn dai, không bị mềm nát. Nếu muốn làm sẵn để sử dụng sau, bạn nên để riêng các nguyên liệu và khi ăn mới bắt đầu trộn.</p>
					</li>					
				</ul>
			</div>
		</div>
	</div>
</section>`
}

renderElement = (id, img, name) => {
	return `<div class="col-lg-4 col-md-6">
	<div class="recipe eventShowDetail" id=${id} >
			<img src=${img} alt="" style="width: 500px; height: 300px;">               
					<div class="recipe-info">
							<h3>${name}</h3>
							<div class="rating" >
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star is-fade"></i>
							</div>
					</div>
	</div>
</div>`
}

