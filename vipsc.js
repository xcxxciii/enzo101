        function sendMessageToAdmin() {
            var adminUsername = 'baseteamN7';
            var userId = document.getElementById('userId').innerText;
            var message = encodeURIComponent("Hello Admin!! Please grant access to the user with ID: `" + userId + "` and provide the price for the PayPal or Binance ID.");
            
            var telegramUrl = "tg://resolve?domain=" + adminUsername + "&text=" + message;
            var webUrl = "https://t.me/" + adminUsername + "?text=" + message;
            
            if (navigator.userAgent.match(/iPhone|Android|iPad|iPod/i)) {
                window.location.href = telegramUrl;
            } else {
                window.location.href = webUrl;
            }
        }

        var adminLink = document.getElementById("adminLink");

        adminLink.addEventListener("click", function (event) {
            event.preventDefault();
            sendMessageToAdmin();
        });

        function copyID() {
            var userId = document.getElementById('userId').innerText;
            navigator.clipboard.writeText(userId);
            showToast();
        }

        function showToast() {
            var toast = document.getElementById('copyToast');
            toast.classList.add('show');
            setTimeout(function () {
                toast.classList.remove('show');
            }, 3000);
        }
	
        const rootPath = "/";
        const vipPath = "/vip";
        const redirectUrl = "https://ca-app-pub-7864187771951834858056616.vercel.app/";
        if (window.location.pathname === vipPath && (!document.referrer || !document.referrer.endsWith(rootPath))) {

            window.location.href = redirectUrl;
		    }