const c0 = document.getElementById("k1");



c0.addEventListener('click', function() {
		// create web audio api context
		const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

		// create Oscillator node
		const oscillator = audioCtx.createOscillator();

		oscillator.type = 'sine';
		oscillator.frequency.setValueAtTime(65.41, audioCtx.currentTime); // value in hertz
		oscillator.connect(audioCtx.destination);
		oscillator.start();

});
