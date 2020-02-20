export default function calculateWinner(value){
    const line = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < line.length ; i++){
        const [a,b,c] = line[i];
        if (value[a] && value[a] === value[b] && value[a] === value[c]){
            return value[a];
        }
    }
    return null;
}