
function generator() {
    var quote = document.getElementById("h1");
    var btn = document.getElementById("btn");
    var author = document.getElementById("author");

    let num = Math.random() * 15;
    let num1 = Math.ceil(num);//ceil is used rounds the number to the largest integer ex.7.90 will be round to 8.

    switch (num1) {
        case 1:
            quote.innerHTML = "<span>B</span>e strong now, b’coz things will get better. It might be stormy now, but it can’t rain forever.",
                author.innerHTML = "- Stanley Orabueze";
            break;
        case 2:
            quote.innerHTML = "<span>W</span>hy We Sometimes Write “Etc” In Exams? Because It Means. . . . E (End Of) T (Thinking) C (Capacity) ;-)",
                author.innerHTML = "- St.dago";
            break;
        case 3:
            quote.innerHTML = "<span>W</span>hy is it so EASY to fail but so HARD to SUCCEED?",
                author.innerHTML = "- program Lord";
            break;
        case 4:
            quote.innerHTML = "<span>8</span>0% of the exam is always based on 1 lecture that you missed and 1 topic that you didn’t prepare.",
                author.innerHTML = "- Arinze orabueze";
            break;
        case 5:
            quote.innerHTML = "<span>H</span>ated by many, wanted by plenty, disliked by some, confronted by none.",
                author.innerHTML = "- mary Orabueze";
            break;
        case 6:
            quote.innerHTML = "<span>D</span>on’t let people rent space in your head just let it go..",
                author.innerHTML = "- Goodnews uko";
            break;
        case 7:
            quote.innerHTML = "<span>T</span>ake the risk, it could lead to something beautiful.",
                author.innerHTML = "- Ezra soku";
            break;
        case 8:
            quote.innerHTML = "<span>G</span>irl’s logic: When you like a guy, do nothing about it and expect him to magically know and make the first move.",
                author.innerHTML = "- David ayanii";
            break;
        case 9:
            quote.innerHTML = "<span>D</span>on’t waste time giving someone a second chance, when there is someone better waiting for their first.",
                author.innerHTML = "- Stanley Orabueze";
            break;
        case 10:
            quote.innerHTML = "<span>I</span>t might seem like the hardest thing to do, but you have to forget the person who forgot about you.",
                author.innerHTML = "- coddy robot";
            break;
        case 11:
            quote.innerHTML = "<span>तुम्ही</span>ठरवलेल्या ध्येयांवर, लोक हसत नसतील तर,तुमची ध्येये खूपच लहान आहेत हे लक्षात घ्या.",
                author.innerHTML = "- Your Dream!";
            break;
        case 12:
            quote.innerHTML = "<span>क</span>ठीण काळात सतत स्वतःला सांगा,शर्यत अजून संपलेली नाही,कारण मी अजून जिंकलेलो नाही.",
                author.innerHTML = "- Hope!";
            break;
        case 13:
            quote.innerHTML = "<span>जिं</span>कण्याची मजा तेव्हाच येते,जेव्हा सर्वजण तुमच्या हरण्याची वाट पाहत असतात.",
                author.innerHTML = "- Lost";
            break;
        case 14:
            quote.innerHTML = "<span>प्रेम</span> म्हणजे समजली तर भावना आहे,केली तर मस्करी आहे,मांडला तर खेळ आहे,ठेवला तर विश्वास आहे,घेतला तर श्वास आहे,रचला तर संसार आहे,निभावले तर जीवन आहे.",
                author.innerHTML = "- LOVE_LIFE!";
            break;
        case 15:
            quote.innerHTML = "<span>जे</span> कठीण आहे ते सोपे करावे,je जे सोपे आहे ते सहज करावे,je जे सहज आहे ते सुंदर करावे आणि जे सुंदर आहे त्यावर मनापासून प्रेम करावे.",
                author.innerHTML = "- Je";
            break;
        default:
            quote.innerHTML = "<span>T</span>here are so many people out there who will tell you that you can’t. What you have for to do is turn around and say watch me.",
                author.innerHTML = "- ifechukwu Orabueze";
    }
}
