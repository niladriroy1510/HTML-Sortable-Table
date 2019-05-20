const sortableTable = ()=>{
const sortable = $(`[custom-sortable="true"]`);
const thead = sortable.find('thead tr.sortable-tr');
thead.each(function() {	
	$(this).find('th').each(function(){
	const th = $(this);
	if (th.hasClass("sortable-column")) {
	  th.click(function(){
	 let thIndex =  th.index();
	 let tdValues = [];
	 let tbody =  sortable.children('tbody').eq(0);
	tbody.find('tr').each(function(){
	  let tr = $(this);
	  let trIndex = tr.index();
	  let td = $(this).children('td').eq(thIndex);
	  tdValues.push(td.text())
	 })
	  const sortValues = tdValues.sort();
	$(this).siblings().removeClass("sort-asc sort-desc");
	  const  tdValuesSort = ()=>{
		if ($(this).hasClass("sort-asc")) {
		 $(this).addClass('sort-desc').removeClass('sort-asc');
		 return tdValues.sort();
		}else{
		 $(this).addClass('sort-asc').removeClass('sort-desc');
		return tdValues.sort().reverse();
		}
	  }
	tdValuesSort().forEach((item, index)=> {
	let tableRow =  tbody.find('tr').filter(function() {
	  let tdTxt = $(this).children('td').eq(thIndex).text();
			return tdTxt.toLowerCase() == item.toLowerCase();
		})
	tbody.append(tableRow);
	});
	  })
	}
	})
})

}
$(document).ready(function(){
  sortableTable()
})