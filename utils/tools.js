/**
 * 
 * @param {*} target 
 */
function scrollToPosition (target) {
	// 获取当前元素的 offsetLeft
	const offsetLeft = target.offsetLeft,
				// 
	      scrollEl = target.parentNode.parentNode;
	
	// console.log(scrollEl);

	scrollEl.scrollTo(offsetLeft, 0);
}

/**
 * 数据过滤函数
 */
function filterData (data, id) {
	if (id === 0) {
		return data;
	}

	return data.filter(item => item.field === id);
}

export {
	scrollToPosition,
	filterData
}