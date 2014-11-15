var UI = {
	changeScreen: function(setUp){
			content.className = setUp
		},
	handleElem: function(e){
			setUp = e.target.dataset.setUp
			UI.changeScreen(setUp)
			if(setUp == 'show_main' || setUp == 'show_foreign_main'){
				UI.prevSetUp = setUp;
			} else{
				item_tpanel.dataset.setUp = UI.prevSetUp
			}
		},
	loadList: function(){},
	initControls: function(){
		for(var i=0; i<document.querySelectorAll('.main_list_elem').length; i++){
			document.querySelectorAll('.main_list_elem')[i].dataset.setUp = 'show_main_qr'
			document.querySelectorAll('.main_list_elem')[i].addEventListener('click', UI.handleElem)
		}
		for(var i=0; i<document.querySelectorAll('.foreign_list_elem').length; i++){
			document.querySelectorAll('.foreign_list_elem')[i].dataset.setUp = 'show_foreign_qr'
			document.querySelectorAll('.foreign_list_elem')[i].addEventListener('click', UI.handleElem)
		}
		for(var i=0; i<document.querySelectorAll('.threeButsInTp').length; i++){
			document.querySelectorAll('.threeButsInTp')[i].addEventListener('click', UI.handleElem)
		}
		
		add_but.dataset.setUp = 'show_main_addlink'
		add_but.addEventListener('click', UI.handleElem)
		scan_but.dataset.setUp = 'show_cam'
		scan_but.addEventListener('click', UI.handleElem)
		item_tpanel.addEventListener('click', UI.handleElem)
	},
	prevSetUp: 'show_main'
}

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        init();
    }
}
function init(){
	UI.loadList()
	UI.initControls()
}