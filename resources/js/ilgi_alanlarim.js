const url = 'https://myanimelist.p.rapidapi.com';
const options = {   
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '64c48bfa45msh2b597d40070e5a9p16dbd6jsn96c32450ea9e',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
};

const url2 = 'https://anime-quotes5.p.rapidapi.com/api?random=random';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64c48bfa45msh2b597d40070e5a9p16dbd6jsn96c32450ea9e',
		'X-RapidAPI-Host': 'anime-quotes5.p.rapidapi.com'
	}
};

// const url3 = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
// const options3 = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '64c48bfa45msh2b597d40070e5a9p16dbd6jsn96c32450ea9e',
// 		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		from: 'auto',
// 		to: 'tr',
// 		text: 'Hello There!'
// 	})
// };


async function show_airing(){
    try{
    const response = await fetch(url+"/anime/top/airing", options);
    const data = await response.json();   

    document.getElementById("airing_image1").src = data[0].picture_url;
    document.getElementById("airing_name1").innerHTML = data[0].rank + "- " + data[0].title;
    document.getElementById("airing_airedOn1").innerHTML = data[0].aired_on;
    document.getElementById("airing_score1").innerHTML = data[0].score;

    document.getElementById("airing_image2").src = data[1].picture_url;
    document.getElementById("airing_name2").innerHTML = data[1].rank + "- " + data[1].title;
    document.getElementById("airing_airedOn2").innerHTML = data[1].aired_on;
    document.getElementById("airing_score2").innerHTML = data[1].score;

    document.getElementById("airing_image3").src = data[2].picture_url;
    document.getElementById("airing_name3").innerHTML = data[2].rank + "- " + data[2].title;
    document.getElementById("airing_airedOn3").innerHTML = data[2].aired_on;
    document.getElementById("airing_score3").innerHTML = data[2].score;

    document.getElementById("airing_image4").src = data[3].picture_url;
    document.getElementById("airing_name4").innerHTML = data[3].rank + "- " + data[3].title;
    document.getElementById("airing_airedOn4").innerHTML = data[3].aired_on;
    document.getElementById("airing_score4").innerHTML = data[3].score;

    document.getElementById("airing_image5").src = data[4].picture_url;
    document.getElementById("airing_name5").innerHTML = data[4].rank + "- " + data[4].title;
    document.getElementById("airing_airedOn5").innerHTML = data[4].aired_on;
    document.getElementById("airing_score5").innerHTML = data[4].score;

    document.getElementById("airing_image6").src = data[5].picture_url;
    document.getElementById("airing_name6").innerHTML = data[5].rank + "- " + data[5].title;
    document.getElementById("airing_airedOn6").innerHTML = data[5].aired_on;
    document.getElementById("airing_score6").innerHTML = data[5].score;

    document.getElementById("airing_image7").src = data[6].picture_url;
    document.getElementById("airing_name7").innerHTML = data[6].rank + "- " + data[6].title;
    document.getElementById("airing_airedOn7").innerHTML = data[6].aired_on;
    document.getElementById("airing_score7").innerHTML = data[6].score;

    document.getElementById("airing_image8").src = data[7].picture_url;
    document.getElementById("airing_name8").innerHTML = data[7].rank + "- " + data[7].title;
    document.getElementById("airing_airedOn8").innerHTML = data[7].aired_on;
    document.getElementById("airing_score8").innerHTML = data[7].score;

    document.getElementById("airing_image9").src = data[8].picture_url;
    document.getElementById("airing_name9").innerHTML = data[8].rank + "- " + data[8].title;
    document.getElementById("airing_airedOn9").innerHTML = data[8].aired_on;
    document.getElementById("airing_score9").innerHTML = data[8].score;

    document.getElementById("airing_image10").src = data[9].picture_url;
    document.getElementById("airing_name10").innerHTML = data[9].rank + "- " + data[9].title;
    document.getElementById("airing_airedOn10").innerHTML = data[9].aired_on;
    document.getElementById("airing_score10").innerHTML = data[9].score;

    }
    catch(error){
        console.error(error);
    }
}


async function show_top(){
    try {
        const response = await fetch(url+"/anime/top/bypopularity", options);
        const data = await response.json();   

        console.log(data);

        document.getElementById("top_image1").src = data[0].picture_url;
        document.getElementById("top_name1").innerHTML = data[0].rank + "- " + data[0].title;
        document.getElementById("top_airedOn1").innerHTML = data[0].aired_on;
        document.getElementById("top_score1").innerHTML = data[0].score;

        document.getElementById("top_image2").src = data[1].picture_url;
        document.getElementById("top_name2").innerHTML = data[1].rank + "- " + data[1].title;
        document.getElementById("top_airedOn2").innerHTML = data[1].aired_on;
        document.getElementById("top_score2").innerHTML = data[1].score;

        document.getElementById("top_image3").src = data[2].picture_url;
        document.getElementById("top_name3").innerHTML = data[2].rank + "- " + data[2].title;
        document.getElementById("top_airedOn3").innerHTML = data[2].aired_on;
        document.getElementById("top_score3").innerHTML = data[2].score;

        document.getElementById("top_image4").src = data[3].picture_url;
        document.getElementById("top_name4").innerHTML = data[3].rank + "- " + data[3].title;
        document.getElementById("top_airedOn4").innerHTML = data[3].aired_on;
        document.getElementById("top_score4").innerHTML = data[3].score;

        document.getElementById("top_image5").src = data[4].picture_url;
        document.getElementById("top_name5").innerHTML = data[4].rank + "- " + data[4].title;
        document.getElementById("top_airedOn5").innerHTML = data[4].aired_on;
        document.getElementById("top_score5").innerHTML = data[4].score;

        document.getElementById("top_image6").src = data[5].picture_url;
        document.getElementById("top_name6").innerHTML = data[5].rank + "- " + data[5].title;
        document.getElementById("top_airedOn6").innerHTML = data[5].aired_on;
        document.getElementById("top_score6").innerHTML = data[5].score;

        document.getElementById("top_image7").src = data[6].picture_url;
        document.getElementById("top_name7").innerHTML = data[6].rank + "- " + data[6].title;
        document.getElementById("top_airedOn7").innerHTML = data[6].aired_on;
        document.getElementById("top_score7").innerHTML = data[6].score;

        document.getElementById("top_image8").src = data[7].picture_url;
        document.getElementById("top_name8").innerHTML = data[7].rank + "- " + data[7].title;
        document.getElementById("top_airedOn8").innerHTML = data[7].aired_on;
        document.getElementById("top_score8").innerHTML = data[7].score;

        document.getElementById("top_image9").src = data[8].picture_url;
        document.getElementById("top_name9").innerHTML = data[8].rank + "- " + data[8].title;
        document.getElementById("top_airedOn9").innerHTML = data[8].aired_on;
        document.getElementById("top_score9").innerHTML = data[8].score;

        document.getElementById("top_image10").src = data[9].picture_url;
        document.getElementById("top_name10").innerHTML = data[9].rank + "- " + data[9].title;
        document.getElementById("top_airedOn10").innerHTML = data[9].aired_on;
        document.getElementById("top_score10").innerHTML = data[9].score;

    } catch (error) {
        console.error(error);
    }
}


async function show_quote(){
    try {
        const response = await fetch(url2, options2);
        const data = await response.json();
        
        document.getElementById("yazi").innerHTML = data[0].quote;
        document.getElementById("character").innerHTML = "~" + data[0].character;
        document.getElementById("anime").innerHTML = "(" + "Anime: " + data[0].anime + ")";
        
    } catch (error) {
        console.error(error);
    }
}



// async function translate(){
//     try {
//         const response = await fetch(url3, options3);
//         const data = await response.text();

//         // options3.body.text = myText;
//         // return data.trans;

//         console.log(data);
//         console.log(data.trans);
//         console.log(data.source_language);

//     } 
//     catch (error) {
//         console.error(error);
//     }
// } 
