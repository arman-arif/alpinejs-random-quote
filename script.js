const quote = {
    content: "",
    author: "",
    getQuote() {
        fetch("https://api.quotable.io/random")
        .then(res=>res.json())
        .then(data=>{
            this.content = data.content
            this.author = "-- " + data.author
        })
    }
}



setInterval(() => {
    quote.getQuote();
}, 3000);