
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
		elements += renderElement(item.id, item.img, item.name, item.rating);
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
			let showDetail = renderDetail(detail);
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
renderDuration = (duration) => {
	return `<div class="filter-top-text">
	<p>Chuẩn Bị: ${duration.prepareTime}</p>
	<p>Chế Biến: ${duration.ProcessingTime}</p>
	<p>Khẩu Phần: ${duration.ration}</p>
</div>`
}
renderMaterial = (listMaterial) => {
	let result = '';
	for (let i = 0; i < listMaterial.length; i++) {
		result += `<div class="check-warp">
		<input type="checkbox" id=${i + 100}>
		<label for="${i + 100}">- ${listMaterial[i]}</label>
	</div>`
	}
	return result;
}
renderProcess = (process) => {
	let result = '';
	process.forEach(processItem => {
		result += `<li>
		<p> ${processItem}</p>
	</li>`
	});
	return result;
}
renderRating = (rating) => {
	let result = '';
	for (let i = 1; i <= rating; i++) {
		result += `<i class="fa fa-star"></i>`
	}
	let noStart = 5 - rating;
	if (noStart > 0) {
		for (let i = 1; i <= noStart; i++) {
			result += `<i class="fa fa-star is-fade"></i>`
		}
	}
	return result;
}
renderDetail = (detail) => {
	let duration = renderDuration(detail.duration);
	let materials = renderMaterial(detail.material);
	let process = renderProcess(detail.process);
	let rating = renderRating(detail.rating);
	return `<section class="recipe-details-section">
	<div class="container">
		<div class="recipe-meta">
			<div class="racipe-cata">
				<span>Cho Người Chế Biến Lần Đầu</span>
			</div>
			<h2>${detail.name} - món ăn hấp dẫn của người Sài Gòn</h2>
			<div class="recipe-date">${detail.date}</div>
			<div class="rating">
					${rating}
			</div>
		</div>
		<div class="row">
			<div class="col-lg-5">
				<div class="recipe-filter-warp">
					<div class="filter-top">
						${duration}
					</div>
					<!-- recipe filter form -->
					<div class="filter-form-warp">
						<h2>Nguyên Liệu</h2>
						<form class="filter-form">						
							${materials}
						</form>
					</div>
				</div>
			</div>
			<div class="col-lg-7">
				<ul >					
					${process}				
				</ul>
			</div>
		</div>
	</div>
</section>`
}

renderElement = (id, img, name, rating) => {
	rating = renderRating(rating);
	return `<div class="col-lg-4 col-md-6">
	<div class="recipe eventShowDetail" id=${id} >
			<img src=${img} alt="" style="width: 500px; height: 300px;">               
					<div class="recipe-info">
							<h3>${name}</h3>
							<div class="rating" >
									${rating}
							</div>
					</div>
	</div>
</div>`
}

