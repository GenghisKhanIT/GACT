<script type="text/javascript">

function onConfirm (buttonIndex) {
	var l= buttonIndex
	if (l == 1) {
		if(navigator.app){
			navigator.app.exitApp();
		}	
		else 
			if(navigator.device){
				navigator.device.exitApp();
			}
		} 
}

function showConfirm() {
	navigator.notification.confirm(
		'Quit ?', 				// message
		 onConfirm,            	// callback to invoke with index of button pressed
		'Confirm',           	// title
		['Ok','Cancel']      // buttonLabels
	);
}

</script>
