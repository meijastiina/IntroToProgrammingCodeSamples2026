let sharray=[["0","0","0","0",""],["","0","0","0","0"],["","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]];
let a=1;
process.stdout.write("Welcome to the battleship game! Enter x and y coordinates to take a shot at the battlefield: ");

process.stdin.on("data",function(inputFromUser){
    let [x,y]=inputFromUser.toString().split(" ").map(Number);
    for(let o=0;o<sharray.length-4;o++){
        for(let i=0;i<sharray[o].length;i++){
            if(sharray[x][y]!==""){
              // process.stdout.write("All ships sunk! You needed "+a+" shots.");
              // process.exit();
                process.stdout.write("You missed!");
                break;
            }
            else if(sharray[x][y]===""){
                process.stdout.write("You hit a ship.");
                sharray[x][y]="0";
                a++;
                process.stdout.write("Enter x and y coordinates to take a shot at the battlefield:")
                break;
            }
            else if(sharray[x][y]==="0"){
                process.stdout.write("You missed!");
                a++;
                process.stdout.write("Enter x and y coordinates to take a shot at the battlefield:")
                break;
            }
            
        }
    }
})