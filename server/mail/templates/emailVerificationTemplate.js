const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
	</head>
	
	<body>
		<div class="container">
			<div class="message">OTP Verification Email</div>
			<div class="body">
				<h2 class="highlight">${otp}</h2>
			</div>
		</div>
	</body>
	
	</html>`;
};
module.exports = otpTemplate;
