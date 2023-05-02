function BellmanFord(graph, vertices, src) {
    let edgesCount = graph.length;
    let verticesCount = 0;
    for (let key in vertices) {
        if (Number.isInteger(+key)) {
            verticesCount++;
        }
    }
    let dis = [];
    for (let index = 0; index < verticesCount; index++) {
        dis[index] = Number.MAX_VALUE;
    }

    dis[src] = 0;
    let currCost = 0;
    for (let i = 0; i < verticesCount - 1; i++) {
        for (let j = 0; j < edgesCount; j++) {
            if (dis[graph[j][0]] != Number.MAX_VALUE) {
                currCost = dis[graph[j][0]] + graph[j][2];
                if (currCost < dis[graph[j][1]]) {
                    dis[graph[j][1]] = currCost;
                }
            }
        }
    }

    let resOut = document.querySelector('.bellmanFord .result');
    let res = "";

    for (let i = 0; i < edgesCount; i++) {
        let x = graph[i][0];
        let y = graph[i][1];
        let weight = graph[i][2];

        if (dis[x] + weight < dis[y]) {
            if (dis[x] != Number.MAX_VALUE) {
                res += "Graph contains negative weight cycle\n";
            }
        }
    }

    res += "Vertex Distance from Source\n";
    for (let i = 0; i < verticesCount; i++) {
        if (dis[i] == Number.MAX_VALUE) {
            res += "There is no way "
            res += "from " + vertices[src];
        } else {
            res += "From " + vertices[src];
        }

        res += " to " + vertices[i];

        if (dis[i] != Number.MAX_VALUE) {
            res += " costs " + dis[i];
        }

        res += "\n";
    }

    resOut.innerText = res;
}