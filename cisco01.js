let football={
    team: "FC Barcelona",
    goals: 10,
    assists: 10,
    goalsAgainst: 10,
    goalsFor: 10,
    points: 10
};

console.log(`Man united have had ${football.assists}`);
let footballTeams=["mancity", "manunited","chelsea","arsenal","liverpool"];
console.log(footballTeams.length);
console.log(footballTeams[1]);
let unityTe=[["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
["occupied","occupied","not fully occupied","assignment","Meeting day","hobby","church day"]];
let dayOfWeek= unityTe[0];
console.log(dayOfWeek);
let schedule =unityTe[1];
console.log(`On ${dayOfWeek[0]} I am ${schedule[0]}`);
let groups=[{teamName:"mancity",goals:5,assists:7,level:"uefa"},
{teamName:"manunit",goals:2,"assists":4,level:"ue"}];
console.log(groups[0]);
console.log(groups[0].goals);
groups.push(football);
console.log(groups);
groups.unshift(unityTe);
let group = groups.pop();
console.log("Hey there",group);