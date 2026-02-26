// Configuration for the link you are sharing
const shareConfig = {
    url: 'https://buriracer.com',
    text: 'Check out Buriracer, a fast-paced typing game!',
    title: 'Buriracer'
};

// Handle specific social media clicks
function shareTo(platform) {
    const encodedUrl = encodeURIComponent(shareConfig.url);
    const encodedText = encodeURIComponent(shareConfig.text);
    let shareUrl = '';

    switch(platform) {
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodedText} ${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
    }

    // Open in a small popup window
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Handle Native Web Share API (mostly for Mobile devices)
async function nativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: shareConfig.title,
                text: shareConfig.text,
                url: shareConfig.url
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    } else {
        alert("Native web share is not supported on this browser. Try the buttons above!");
    }
}

// Handle Copy to Clipboard
function copyLink() {
    const input = document.getElementById('websiteUrl');
    const copyBtn = document.getElementById('copyBtn');

    input.select();
    input.setSelectionRange(0, 99999); // Mobile compatibility
    navigator.clipboard.writeText(input.value).then(() => {
        copyBtn.innerText = 'Copied!';
        copyBtn.classList.replace('btn-outline-secondary', 'btn-success');
        copyBtn.classList.add('text-white');

        setTimeout(() => {
            copyBtn.innerText = 'Copy';
            copyBtn.classList.replace('btn-success', 'btn-outline-secondary');
            copyBtn.classList.remove('text-white');
        }, 2000);
    });
}