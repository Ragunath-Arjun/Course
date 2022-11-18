/* 
Problem 0 : Part A
Playing with JSON object’s Values:
    Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
    Write a code to get the below details of Fluffyy so that
    I can take him to vet.
*/


var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
                {   name: 'bar',
                    activities: ['be grumpy', 'eat bread omblet'],
                    weight: 8,
                    furcolor: 'white'
                }, 
                 
                {
                    name: 'foo',
                    activities: ['sleep', 'pre-sleep naps'],
                    weight: 3
                }
            ]
        };
        
// console.log(cat)

//1.Add height and weight to Fluffy

cat.weight = 6;
cat.height = 2;

//2.Fluffy name is spelled wrongly. Update it to Fluffyy

cat.name = "Fluffyy";

//3.List all the activities of Fluffyy’s catFriends.

let arr = cat.catFriends;
for(i=0;i<arr.length;i++)
{
    let temp = arr[i].activities;
    for(j=0;j<temp.length;j++)
    {
        console.log(temp[j]);    
    }    
}


//4.Print the catFriends names.

for(i=0;i<cat.catFriends.length;i++)
{
    console.log(cat.catFriends[i].name);
}

//5.Print the total weight of catFriends

let weight = 0;
for(i=0;i<cat.catFriends.length;i++)
{
    weight += cat.catFriends[i].weight;
}
console.log(weight);

//6.Print the total activities of all cats

let arr1 = [];
arr1.push(cat.activities,cat.catFriends[0].activities,cat.catFriends[1].activities);
// console.log(arr)
for(i=0;i<arr1.length;i++)
{
    for(j=0;j<arr1[i].length;j++)
    {
        console.log(arr1[i][j]);    
    }
}

//7.Add 2 more activities to bar & foo cats

cat.catFriends[0].activities.push("looking out of window","wandering around");
cat.catFriends[1].activities.push("play","be grumpy");

// console.log(cat.catFriends);


//8.Update the fur color of bar

cat.catFriends[0].furcolor = 'brown';
console.log(cat.catFriends);


