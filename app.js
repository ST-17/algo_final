let nodes = [
    'Eat&Chat', //0
    'Red Canteen', //1
    'White Canteen', //2
    'Mini Hall', //3
    'Red Hall', //4
    'Library', //5
    'Technopark', //6
    'WiFi Zone', //7
];
let edges = [
    [3, 0],
    [3, 1],
    [0, 1],
    [1, 6],
    [1, 7],
    [6, 7],
    [7, 5],
    [7, 2],
    [2, 4],
]

let fromOpts = document.querySelector('#from');
nodes.forEach((val, index) => {
    fromOpts.innerHTML += `<option value=${index}>${val}</option>`;
 });

let targetOpts = document.querySelector('#target');
nodes.forEach((val, index) => {
    targetOpts.innerHTML += `<option value=${index}>${val}</option>`;
 });

function toBFS() {
    let from = +document.querySelector('.BFS #from').value;
    let target = +document.querySelector('.BFS #target').value;
    let graph = [];
    edges.forEach(edge => {
        if(graph[edge[0]] === undefined){
            graph[edge[0]] = [];
        }
        graph[edge[0]].push(edge[1]);

        if(graph[edge[1]] === undefined){
            graph[edge[1]] = [];
        }
        graph[edge[1]].push(edge[0]);
    });

    bfs(graph, from, target);
}

function toBellmanFord() {
    let input = document.querySelector('.bellmanFord #edges').value;
    let edges = input.split("\n");
    edges = edges.map(val => {
        return val.split(" ");
    });

    let allVertices = [];
    edges.forEach((curr) => {
        let onlyNodes = curr.slice(0, 2);
        allVertices = allVertices.concat(onlyNodes);
    })

    let vertices = generateDistinct(allVertices);
    let source = document.querySelector('.bellmanFord #source').value;

    edges = edges.map((edge) => {
        edge[0] = vertices[edge[0]];
        edge[1] = vertices[edge[1]];
        edge[2] = +edge[2];
        return edge;
    });

    BellmanFord(edges, vertices, vertices[source]);
}

function generateDistinct(arr) {
    let n = arr.length;
    let distInct = {};
    let addit = {};
    let res = 0;
    for (let i = 0; i < n; i++) {
        let j = 0;
        for (j = 0; j < i; j++)
            if (arr[i] === arr[j]){
                break;
            }
        if (i === j) {
            distInct[res] = arr[i];
            addit[arr[i]] = res;
            res++;
        }
    }

    for (const key in addit) {
        distInct[key] = addit[key];
    }

    return distInct;
}
