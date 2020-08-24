window.onload = function () {
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Please read this web zine in landscape orientation on a desktop, laptop or tablet for the best reading experience.");
    } else {

    }
}