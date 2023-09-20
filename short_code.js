load = (link) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(res => res.json())
        .then(data => show(data))
}

show = (data) => {
    console.log(data.result.short_link);
    const orginalLink = document.getElementById('inputBox');
    orginalLink.value = data.result.short_link;
    orginalLink.select();
    orginalLink.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(orginalLink.value);
    document.getElementById('short_message').innerText = 'short link copied to your Clipboard.';

}
document.getElementById('btn').addEventListener('click', () => {
    const orginalLink = document.getElementById('inputBox');
    load(orginalLink.value)
})