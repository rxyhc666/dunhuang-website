document.addEventListener('DOMContentLoaded', function() {
	
})
// 搜索框
		// 1 获取事件源-文本框
		// const input = document.querySelector('.')
		const input = document.querySelector('.input-focus-trigger')
		// 2 获取下拉菜单
		const list = document.querySelector('.list ')
		// 3 监听事件
		input.addEventListener('focus',function(){// 当文本框获得焦点时
			list.style.display = 'block'// 显示下拉菜单
		})
		input.addEventListener('blur',function(){// 当文本框失去焦点时
			list.style.display = 'none'// 隐藏下拉菜单
		})
		// 壁画专题
		document.addEventListener('DOMContentLoaded', function() {// 当文档内容加载完成后
			const mselis = document.querySelectorAll('.Mural_Special_Element_box li');
			mselis.forEach(item => {// 遍历每个'li'元素
				item.addEventListener('mouseenter', function() {// 当鼠标移入'li'元素时
				// 移除所有'li'元素的'floatinglis'类
					mselis.forEach(li => li.classList.remove('floatinglis'));
					// 切换当前'li'元素的'floatinglis'类
					this.classList.toggle('floatinglis');// 添加或移除当前元素的'floatinglis'类
				});
			});
		});
		// 共创作品
		document.addEventListener('DOMContentLoaded', function() {// 当文档内容加载完成后
			const listItems = document.querySelectorAll('.Co_create_works_box li');
			listItems.forEach(item => {// 遍历每个'li'元素
				item.addEventListener('mouseenter', function() {// 当鼠标移入'li'元素时
					listItems.forEach(li => li.classList.remove('floating'));
					// 切换当前'li'元素的'floating'类
					this.classList.toggle('floating');// 添加或移除当前元素的'floating'类
				});
			});
		});
		// 壁画元素
		document.addEventListener('DOMContentLoaded', function() {
			const lis = document.querySelectorAll('.Mural_Special_list li');
			lis.forEach(item => {
				item.addEventListener('mouseenter', function() {
					lis.forEach(li => li.classList.remove('floatinglis'));
					 // 切换当前'li'元素的'floatinglis'类
					this.classList.toggle('floatinglis');// 添加或移除当前元素的'floatinglis'类
				});
			});
		});
		// 轮播图1
		// 获取第一个li中轮播图图片
		const images = document.querySelectorAll('.Mural_Special_Element_box li:nth-child(1) .carousel-image');
		let currentIndex = 0;
		// 设置定时器来切换图片
		setInterval(function() {
		    // 移除当前图片的active类
		    images[currentIndex].classList.remove('active');
		    // 计算下一个图片的索引（循环）
		    currentIndex = (currentIndex + 1) % images.length;
		    // 为下一个图片添加active类
		    images[currentIndex].classList.add('active');
		}, 3000); // 每3秒切换一次图片
		if (images.length > 0) {
			// 由于我们在HTML中直接为按钮添加了onclick事件，所以不需要在这里再添加事件监听器
			// 但为了展示如何通过JavaScript添加事件监听器，以下代码被注释掉：
			const prevButton = document.querySelector('.prev');
			const nextButton = document.querySelector('.next');
			prevButton.addEventListener('click',function(){
				// 移除当前图片的active类
				images[currentIndex].classList.remove('active');
				currentIndex = (currentIndex - 1 + images.length) % images.length;
				// 为下一个图片添加active类
				images[currentIndex].classList.add('active');
			});
			nextButton.addEventListener('click', function(){
				// 移除当前图片的active类
				images[currentIndex].classList.remove('active');
				// 计算下一个图片的索引（循环）
				currentIndex = (currentIndex + 1) % images.length;
				// 为下一个图片添加active类
				images[currentIndex].classList.add('active');
			});
		}
		// 轮播图2
		// 获取第二个li中轮播图图片
		const images2 = document.querySelectorAll('.Mural_Special_Element_box li:nth-child(2) .carousel-image');
		let currentIndex2 = 0;
		// 设置定时器来切换图片
		setInterval(function() {
		    // 移除当前图片的active类
		    images2[currentIndex2].classList.remove('active');
		    // 计算下一个图片的索引（循环）
		    currentIndex2 = (currentIndex2 + 1) % images2.length;
		    // 为下一个图片添加active类
		    images2[currentIndex2].classList.add('active');
		}, 3000); // 每3秒切换一次图片
		if (images2.length > 0) {
			// 由于我们在HTML中直接为按钮添加了onclick事件，所以不需要在这里再添加事件监听器
			// 但为了展示如何通过JavaScript添加事件监听器，以下代码被注释掉：
			const prevButton2 = document.querySelector('.Mural_Special_Element_box li:nth-child(2) .prev');
			const nextButton2 = document.querySelector('.Mural_Special_Element_box li:nth-child(2) .next');
			prevButton2.addEventListener('click',function(){
				// 移除当前图片的active类
				images2[currentIndex2].classList.remove('active');
				currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
				// 为下一个图片添加active类
				images2[currentIndex2].classList.add('active');
			});
			nextButton2.addEventListener('click', function(){
				// 移除当前图片的active类
				images2[currentIndex2].classList.remove('active');
				// 计算下一个图片的索引（循环）
				currentIndex2 = (currentIndex2 + 1) % images2.length;
				// 为下一个图片添加active类
				images2[currentIndex2].classList.add('active');
			});
		}
		// 轮播图3
		// 获取第三个li中轮播图图片
		const images3 = document.querySelectorAll('.Mural_Special_Element_box li:nth-child(3) .carousel-image');
		let currentIndex3 = 0;
		// 设置定时器来切换图片
		setInterval(function() {
		    // 移除当前图片的active类
		    images3[currentIndex3].classList.remove('active');
		    // 计算下一个图片的索引（循环）
		    currentIndex3 = (currentIndex3 + 1) % images3.length;
		    // 为下一个图片添加active类
		    images3[currentIndex3].classList.add('active');
		}, 3000); // 每3秒切换一次图片
		if (images3.length > 0) {
			// 由于我们在HTML中直接为按钮添加了onclick事件，所以不需要在这里再添加事件监听器
			// 但为了展示如何通过JavaScript添加事件监听器，以下代码被注释掉：
			const prevButton3 = document.querySelector('.Mural_Special_Element_box li:nth-child(3) .prev');
			const nextButton3 = document.querySelector('.Mural_Special_Element_box li:nth-child(3) .next');
			prevButton3.addEventListener('click',function(){
				// 移除当前图片的active类
				images3[currentIndex3].classList.remove('active');
				currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
				// 为下一个图片添加active类
				images3[currentIndex3].classList.add('active');
			});
			nextButton3.addEventListener('click', function(){
				// 移除当前图片的active类
				images3[currentIndex3].classList.remove('active');
				// 计算下一个图片的索引（循环）
				currentIndex3 = (currentIndex3 + 1) % images3.length;
				// 为下一个图片添加active类
				images3[currentIndex3].classList.add('active');
			});
		}
		// 页面滑动大于300,电梯导航出现
		const xtxElevator = document.querySelector('.xtx-elevator')
		// console.log(xtxElevator)
		window.addEventListener('scroll',function(){
			const n = document.documentElement.scrollTop
			// console.log(n)
			xtxElevator.style.opacity = n >=350?1:0
		})
		// 返回至顶部
		const backTop = document.querySelector('#backTop')
		// console.log(backTop);
		backTop.addEventListener('click',function(){
			// console.log('222')
			document.documentElement.scrollTop = 0
		})
		// 壁画专题
		const lists = document.querySelector('.xtx-elevator-list')
		console.log(lists)
		lists.addEventListener('click',function(e){
			if(e.target.tagName === 'A'){
				const box = document.querySelector(`#Mural_Special_${e.target.dataset.name}`)
				document.documentElement.scrollTop = box.offsetTop
			}
		})